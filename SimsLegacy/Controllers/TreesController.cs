namespace SimsLegacy.Controllers
{
    using System.Text.Json;
    using Microsoft.AspNetCore.Mvc;
    using SimsLegacy.Services;

    public class TreesController : Controller
    {
        public TreesController(DataService dataService)
        {
            DataService = dataService;
        }

        private DataService DataService { get; }

        [Route("trees/{id}")]
        //[HttpGet]
        public IActionResult Index([FromRoute] string id)
        {
            return View();
        }

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
        public async Task<IActionResult> UpdateByIdAsync([FromRoute] string id, [FromBody] object tree)
        {
            await DataService.UpdateTreeByIdAsync(id, tree);
            return Ok();
        }
    }
}
