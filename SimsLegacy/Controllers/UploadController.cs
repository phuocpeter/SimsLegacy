namespace SimsLegacy.Controllers
{
    using System.Net.Mime;
    using Microsoft.AspNetCore.Mvc;
    using SimsLegacy.Services;

    [ApiController]
    [Route("api/[controller]")]
    public class UploadController : ApiControllerBase
    {
        public UploadController(DataService dataService, AvatarService avatarService, PeopleService peopleService)
        {
            DataService = dataService;
            AvatarService = avatarService;
            PeopleService = peopleService;
        }

        private DataService DataService { get; }
        private AvatarService AvatarService { get; }
        private PeopleService PeopleService { get; }

        [HttpPost("import")]
        public async Task<IActionResult> ImportAsync(IFormFile file)
        {
            await DataService.ImportAsync(file.FileName, file.OpenReadStream());
            return Ok();
        }

        [HttpGet("{dimension}/avatar/{file}")]
        public async Task<IActionResult> GetAvatarAsync([FromRoute] string dimension, [FromRoute] string file)
        {
            var bytes = await AvatarService.GetAvatarAsync(file, TreeId);
            if (bytes == null)
            {
                return NotFound();
            }

            return File(bytes, MediaTypeNames.Image.Png);
        }

        [HttpGet("url")]
        public IActionResult GetUploadUrl([FromQuery] string type, [FromQuery] string dir)
        {
            var ext = type.ToLower() switch
            {
                MediaTypeNames.Image.Png => "png",
                MediaTypeNames.Image.Jpeg => "jpeg",
                _ => null
            };

            if (ext == null || dir == null)
            {
                return new UnsupportedMediaTypeResult();
            }

            var fileName = $"{dir}/{Guid.NewGuid()}.{ext}";
            var payload = new Dictionary<string, string>()
            {
                ["uploadURL"] = $"/api/upload/{fileName}",
                ["filename"] = fileName
            };
            return Ok(payload);
        }

        [HttpPut("avatar/{fileName}")]
        [Consumes(MediaTypeNames.Image.Png, MediaTypeNames.Image.Jpeg)]
        public async Task<IActionResult> UploadImageAsync([FromRoute] string fileName)
        {
            if (TreeId == null || PeopleId == null)
            {
                return BadRequest();
            }

            await AvatarService.AddAvatarAsync(TreeId, fileName, Request.BodyReader.AsStream());
            await PeopleService.AddPersonAvatarAsync(TreeId, PeopleId, $"avatar/{fileName}");

            return Ok();
        }
    }
}
