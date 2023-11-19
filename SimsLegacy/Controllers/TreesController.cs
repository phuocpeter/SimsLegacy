namespace SimsLegacy.Controllers
{
    using System.Text.Json;
    using System.Text.Json.Nodes;
    using Microsoft.AspNetCore.Mvc;
    using SimsLegacy.Services;

    [ApiController]
    public class TreesController : ControllerBase
    {
        public TreesController(DataService dataService)
        {
            DataService = dataService;
        }

        private DataService DataService { get; }

        [HttpGet("api/trees")]
        public IActionResult Get()
        {
            var data = JsonSerializer.Deserialize<object>("[{\"_id\":\"5e66ada7826f110006b7ffc9\",\"title\":\"Legacy\"}]");
            return new OkObjectResult(data);
        }

        [HttpGet("api/trees/{id}")]
        public IActionResult GetById([FromRoute] string id)
        {
            var tree = DataService.GetTree(id);
            return new OkObjectResult(tree);
        }

        [HttpPatch("api/trees/{id}")]
        public async Task<IActionResult> UpdateByIdAsync([FromRoute] string id, [FromBody] JsonObject treeData)
        {
            await DataService.UpdateTreeByIdAsync(id, treeData);
            return Ok();
        }
    }
}
