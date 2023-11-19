namespace SimsLegacy.Controllers
{
    using System.Text.Json.Nodes;
    using Microsoft.AspNetCore.Mvc;
    using SimsLegacy.Services;

    [ApiController]
    public class PeopleController : ApiControllerBase
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
            var person = await PeopleService.GetPersonAsync(personId, TreeId);
            if (person == null)
            {
                return NotFound();
            }
            return new OkObjectResult(person);
        }

        [HttpPost("api/people")]
        public async Task<IActionResult> CreatePersonAsync([FromBody] JsonObject person)
        {
            if (TreeId == null)
            {
                return BadRequest();
            }

            await PeopleService.CreatePersonAsync(TreeId, person);
            return new OkObjectResult(person);
        }

        [HttpPut("api/people/{personId}")]
        public async Task<IActionResult> UpdatePersonAsync([FromRoute] string personId, [FromBody] JsonObject person)
        {
            if (TreeId == null)
            {
                return BadRequest();
            }

            var personNode = await PeopleService.UpdatePersonAsync(TreeId, personId, person);
            return Ok(personNode);
        }

        [HttpDelete("api/people/{personId}")]
        public async Task<IActionResult> CreatePersonAsync([FromRoute] string personId)
        {
            if (TreeId == null)
            {
                return BadRequest();
            }

            await PeopleService.DeletePersonAsync(TreeId, personId);
            return NoContent();
        }
    }
}
