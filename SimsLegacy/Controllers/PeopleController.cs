namespace SimsLegacy.Controllers
{
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
            var person = await PeopleService.GetPersonAsync(personId);
            if (person == null)
            {
                return NotFound();
            }
            return new OkObjectResult(person);
        }
    }
}
