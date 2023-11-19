namespace SimsLegacy.Services
{
    using System.IO.Compression;
    using System.Text.Json;

    public class DataService
    {
        private const string DataPath = "data";

        public DataService(IConfiguration configuration, ILogger<DataService> logger, AvatarService avatarService, PeopleService peopleService)
        {
            Log = logger;
            _dataRootPath = configuration.GetValue<string>("DataRootPath");
            AvatarService = avatarService;
            PeopleService = peopleService;
        }

        private ILogger Log { get; }
        private AvatarService AvatarService { get; }
        private PeopleService PeopleService { get; }
        private string _dataRootPath;

        public object GetPeople(string id)
        {
            var peopleJson = File.ReadAllText(Path.Combine(_dataRootPath, id, DataPath, "people.json"));
            return JsonSerializer.Deserialize<object>(peopleJson);
        }

        public object GetTree(string id)
        {
            var treeJson = File.ReadAllText(Path.Combine(_dataRootPath, id, DataPath, "tree.json"));
            return JsonSerializer.Deserialize<object>(treeJson);
        }

        public async Task UpdateTreeByIdAsync(string id, object tree)
        {
            var treeJson = JsonSerializer.Serialize(tree);
            await File.WriteAllTextAsync(Path.Combine(_dataRootPath, id, DataPath, "tree.json"), treeJson);
        }

        public async Task ImportAsync(string fileName, Stream fileStream)
        {
            var treeId = Path.GetFileNameWithoutExtension(fileName);
            var treeRootPath = Path.Combine(_dataRootPath, treeId);

            try
            {
                ZipFile.ExtractToDirectory(fileStream, treeRootPath);

                var dataFiles = Directory.GetFiles(Path.Combine(treeRootPath, DataPath), "*.js");
                foreach (var dataFile in dataFiles)
                {
                    await JsToJsonAsync(dataFile);
                }

                await AvatarService.ImportAvatarsAsync(treeId);
                await PeopleService.ImportPeopleAsync(treeId);
            }
            catch (Exception ex)
            {
                Log.LogError(ex, "Failed to import {fileName}", fileName);
                try
                {
                    var di = new DirectoryInfo(treeRootPath);
                    foreach (var file in di.EnumerateFiles())
                    {
                        file.Delete();
                    }

                    foreach (var dir in di.EnumerateDirectories())
                    {
                        dir.Delete(true);
                    }
                }
                catch (Exception cleanUpEx)
                {
                    Log.LogWarning(cleanUpEx, "Failed to clean up import for {fileName}", fileName);
                }
            }
        }

        private static async Task JsToJsonAsync(string filePath)
        {
            var content = await File.ReadAllTextAsync(filePath);
            var equalIdx = content.IndexOf('=');
            if (equalIdx >= 0)
            {
                content = content[(equalIdx+1)..];
                await File.WriteAllTextAsync(filePath, content);
            }
                    
            File.Move(filePath, $"{filePath}on", true);
        }
    }
}
