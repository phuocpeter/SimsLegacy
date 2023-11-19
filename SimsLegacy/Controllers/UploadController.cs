namespace SimsLegacy.Controllers
{
    using System.Net.Mime;
    using Microsoft.AspNetCore.Mvc;
    using SimsLegacy.Services;

    [ApiController]
    [Route("api/[controller]")]
    public class UploadController : ControllerBase
    {
        public UploadController(DataService dataService, AvatarService avatarService)
        {
            DataService = dataService;
            AvatarService = avatarService;
        }

        private DataService DataService { get; }
        private AvatarService AvatarService { get; }

        [HttpPost("import")]
        public async Task<IActionResult> ImportAsync(IFormFile file)
        {
            await DataService.ImportAsync(file.FileName, file.OpenReadStream());
            return Ok();
        }

        [HttpGet("{dimension}/avatar/{file}")]
        public async Task<IActionResult> GetAvatarAsync([FromRoute] string dimension, [FromRoute] string file)
        {
            var bytes = await AvatarService.GetAvatarAsync(file);
            if (bytes == null)
            {
                return NotFound();
            }

            return File(bytes, MediaTypeNames.Image.Png);
        }
    }
}
