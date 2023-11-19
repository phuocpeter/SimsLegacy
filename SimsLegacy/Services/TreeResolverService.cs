namespace SimsLegacy.Services
{
    using System.Collections.Concurrent;
    using System.Text.Json;

    public class TreeResolverService
    {
        private readonly ConcurrentDictionary<TreeResolverEntity, SemaphoreSlim> _resolverLock = new();
        private readonly ConcurrentDictionary<TreeResolverEntity, ConcurrentDictionary<string, string>> _resolverDict = new();

        private ILogger Log { get; }
        private string _dataRootPath;

        public TreeResolverService(IConfiguration configuration, ILogger<AvatarService> logger)
        {
            Log = logger;
            _dataRootPath = configuration.GetValue<string>("DataRootPath");
        }

        public async Task InitializeAsync()
        {
            foreach (var entity in Enum.GetValues<TreeResolverEntity>())
            {
                _resolverDict[entity] = new ConcurrentDictionary<string, string>();
                await InitializeResolverAsync(entity);
            }
        }

        private string GetResolverFilePath(TreeResolverEntity e) => Path.Combine(_dataRootPath, $"{e.ToString().ToLower()}-resolver.json");

        private async Task InitializeResolverAsync(TreeResolverEntity entity)
        {
            var resovlerLock = _resolverLock.GetOrAdd(entity, _ => new SemaphoreSlim(1));
            await resovlerLock.WaitAsync();
            try
            {
                var resolverFilePath = GetResolverFilePath(entity);
                if (!File.Exists(resolverFilePath))
                {
                    _resolverDict[entity] = new ConcurrentDictionary<string, string>();
                    return;
                }

                await using var fs = File.OpenRead(resolverFilePath);
                _resolverDict[entity] = await JsonSerializer.DeserializeAsync<ConcurrentDictionary<string, string>>(fs);
            }
            finally
            {
                resovlerLock.Release();
            }
        }

        public async Task RebuildResolverAsync(TreeResolverEntity entity, string treeId, IEnumerable<string> entityIds)
        {
            var resovlerLock = _resolverLock.GetOrAdd(entity, _ => new SemaphoreSlim(1));
            await resovlerLock.WaitAsync();
            try
            {
                var dict = _resolverDict[entity];
                foreach (var id in entityIds)
                {
                    dict.TryAdd(id, treeId);
                }

                var serializedResolverDict = JsonSerializer.SerializeToUtf8Bytes(dict);

                var resolverFilePath = GetResolverFilePath(entity);
                await File.WriteAllBytesAsync(resolverFilePath, serializedResolverDict);
            }
            finally
            {
                resovlerLock.Release();
            }
        }

        public bool TryGet(TreeResolverEntity entity, string id, out string treeId)
        {
            return _resolverDict[entity].TryGetValue(id, out treeId);
        }
    }

    public enum TreeResolverEntity
    {
        Avatar,
        People
    }
}
