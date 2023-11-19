namespace SimsLegacy.Controllers
{
    using System.Text.Json.Nodes;
    using Microsoft.AspNetCore.Mvc;
    using SimsLegacy.Services;

    [ApiController]
    public class PeopleController : ControllerBase
    {
        public PeopleController(DataService dataService, PeopleService peopleService)
        {
            DataService = dataService;
            PeopleService = peopleService;
        }

        private DataService DataService { get; }
        private PeopleService PeopleService { get; }

        [HttpGet("api/people")]
        public IActionResult Get([FromQuery] string tree)
        {
            var people = DataService.GetPeople(tree);
            return new OkObjectResult(people);
        }

        [HttpGet("api/people/{personId}")]
        public async Task<IActionResult> GetPersonAsync([FromRoute] string personId)
        {
            var person = await PeopleService.GetPersonAsync(personId, (string)HttpContext.Items[TreeResolverMiddleware.Id]);
            if (person == null)
            {
                return NotFound();
            }
            return new OkObjectResult(person);
        }

        [HttpPost("api/people")]
        public async Task<IActionResult> CreatePersonAsync([FromBody] JsonObject person)
        {
            if (!HttpContext.Items.TryGetValue(TreeResolverMiddleware.Id, out var treeId))
            {
                return BadRequest();
            }

            await PeopleService.CreatePersonAsync((string)treeId, person);
            return new OkObjectResult(person);
        }

        [HttpDelete("api/people/{personId}")]
        public async Task<IActionResult> CreatePersonAsync([FromRoute] string personId)
        {
            if (!HttpContext.Items.TryGetValue(TreeResolverMiddleware.Id, out var treeId))
            {
                return BadRequest();
            }

            await PeopleService.DeletePersonAsync((string)treeId, personId);
            return NoContent();
        }
    }
}
