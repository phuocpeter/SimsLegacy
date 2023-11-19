namespace SimsLegacy.Services
{
    public class AvatarService
    {
        private const string AvatarPath = "images/avatar";

        public AvatarService(IConfiguration configuration, ILogger<AvatarService> logger, TreeResolverService treeResolverService)
        {
            Log = logger;
            _dataRootPath = configuration.GetValue<string>("DataRootPath");
            TreeResolverService = treeResolverService;
        }

        private ILogger Log { get; }
        private TreeResolverService TreeResolverService { get; }

        private string _dataRootPath;

        public async Task ImportAvatarsAsync(string treeId)
        {
            var avatarsRootPath = Path.Combine(_dataRootPath, treeId, AvatarPath);
            var allAvatarIds = Directory.GetFiles(avatarsRootPath, "*.*", SearchOption.AllDirectories)
                .Select(Path.GetFileName);
            await TreeResolverService.RebuildResolverAsync(TreeResolverEntity.Avatar, treeId, allAvatarIds);
        }

        public async Task<byte[]> GetAvatarAsync(string avatarFilePath)
        {
            try
            {
                if (TreeResolverService.TryGet(TreeResolverEntity.Avatar, avatarFilePath, out var treeId))
                {
                    var avatarsRootPath = Path.Combine(_dataRootPath, treeId, AvatarPath, avatarFilePath);
                    return await File.ReadAllBytesAsync(avatarsRootPath);
                }
            }
            catch (FileNotFoundException) { }
            catch (Exception ex)
            {
                Log.LogError(ex, "Failed to get avatar {path}", avatarFilePath);
            }
            return null;
        }
    }
}
