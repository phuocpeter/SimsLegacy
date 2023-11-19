namespace SimsLegacy.Services
{
    using System.Text.Json.Nodes;

    public class PeopleService
    {
        private const string PeoplePath = "data/people.json";

        public PeopleService(IConfiguration configuration, ILogger<AvatarService> logger, TreeResolverService treeResolverService)
        {
            Log = logger;
            _dataRootPath = configuration.GetValue<string>("DataRootPath");
            TreeResolverService = treeResolverService;
        }

        private ILogger Log { get; }
        private TreeResolverService TreeResolverService { get; }
        private string _dataRootPath;

        public async Task ImportPeopleAsync(string treeId)
        {
            var peopleJsonFile = Path.Combine(_dataRootPath, treeId, PeoplePath);
            var rootNode = await ParseToJsonNode(peopleJsonFile);

            var allIds = new List<string>();
            foreach (var node in rootNode.AsArray())
            {
                if (node.AsObject().TryGetPropertyValue("_id", out var valueNode) && valueNode != null)
                {
                    var id = valueNode.AsValue().GetValue<string>();
                    allIds.Add(id);
                }
            }

            await TreeResolverService.RebuildResolverAsync(TreeResolverEntity.People, treeId, allIds);
        }

        public async Task<JsonNode> GetPersonAsync(string personId)
        {
            try
            {
                if (TreeResolverService.TryGet(TreeResolverEntity.People, personId, out var treeId))
                {
                    var filePath = Path.Combine(_dataRootPath, treeId, PeoplePath);
                    var rootNode = await ParseToJsonNode(filePath);
                    
                    foreach (var node in rootNode.AsArray())
                    {
                        var objectNode = node.AsObject();
                        if (objectNode.TryGetPropertyValue("_id", out var valueNode) && valueNode?.GetValue<string>() == personId)
                        {
                            return objectNode;
                        }
                    }
                }
            }
            catch (FileNotFoundException) { }
            catch (Exception ex)
            {
                Log.LogError(ex, "Failed to get person {path}", personId);
            }
            return null;
        }

        private static async Task<JsonNode> ParseToJsonNode(string filePath)
        {
            await using var fs = File.OpenRead(filePath);
            return await JsonNode.ParseAsync(fs);
        }
    }
}
