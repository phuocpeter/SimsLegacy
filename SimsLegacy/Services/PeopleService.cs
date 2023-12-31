﻿namespace SimsLegacy.Services
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

        public async Task<JsonNode> GetPersonAsync(string personId, string treeId = null)
        {
            try
            {
                if (!string.IsNullOrEmpty(treeId) || TreeResolverService.TryGet(TreeResolverEntity.People, personId, out treeId))
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

        public async Task<JsonObject> CreatePersonAsync(string treeId, JsonObject personNode)
        {
            personNode.Add("_id", Guid.NewGuid().ToString("N")[..24]);

            var filePath = Path.Combine(_dataRootPath, treeId, PeoplePath);
            var rootNode = await ParseToJsonNode(filePath);

            rootNode.AsArray().Add(personNode);

            var updatedJson = rootNode.ToJsonString();
            await File.WriteAllTextAsync(filePath, updatedJson);

            return personNode;
        }

        public async Task<JsonObject> UpdatePersonAsync(string treeId, string personId, JsonObject personNode)
        {
            var filePath = Path.Combine(_dataRootPath, treeId, PeoplePath);
            var rootNode = await ParseToJsonNode(filePath);

            var existingPersonNode = rootNode.AsArray().FirstOrDefault(x =>
            {
                if (x.AsObject().TryGetPropertyValue("_id", out var id) && id != null)
                {
                    return id.GetValue<string>().Equals(personId);
                }

                return false;
            });

            if (existingPersonNode != null)
            {
                var idx = existingPersonNode.GetElementIndex();
                rootNode.AsArray().RemoveAt(idx);

                personNode.Add("_id", personId);
                rootNode.AsArray().Insert(idx, personNode);

                var updatedJson = rootNode.ToJsonString();
                await File.WriteAllTextAsync(filePath, updatedJson);
            }

            return personNode;
        }

        public async Task DeletePersonAsync(string treeId, string personId)
        {
            var filePath = Path.Combine(_dataRootPath, treeId, PeoplePath);
            var rootNode = await ParseToJsonNode(filePath);

            var personNode = rootNode.AsArray().FirstOrDefault(x =>
            {
                if (x.AsObject().TryGetPropertyValue("_id", out var id) && id != null)
                {
                    return id.GetValue<string>().Equals(personId);
                }

                return false;
            });

            if (personNode != null)
            {
                var idx = personNode.GetElementIndex();
                rootNode.AsArray().RemoveAt(idx);
                var updatedJson = rootNode.ToJsonString();
                await File.WriteAllTextAsync(filePath, updatedJson);
            }
        }

        public async Task AddPersonAvatarAsync(string treeId, string personId, string avatarFileName)
        {
            var filePath = Path.Combine(_dataRootPath, treeId, PeoplePath);
            var rootNode = await ParseToJsonNode(filePath);

            var existingPersonNode = rootNode.AsArray().FirstOrDefault(x =>
            {
                if (x.AsObject().TryGetPropertyValue("_id", out var id) && id != null)
                {
                    return id.GetValue<string>().Equals(personId);
                }

                return false;
            });

            if (existingPersonNode != null)
            {
                existingPersonNode.AsObject()["avatar"] = JsonValue.Create(avatarFileName);

                var updatedJson = rootNode.ToJsonString();
                await File.WriteAllTextAsync(filePath, updatedJson);
            }
        }

        private static async Task<JsonNode> ParseToJsonNode(string filePath)
        {
            await using var fs = File.OpenRead(filePath);
            return await JsonNode.ParseAsync(fs);
        }
    }
}
