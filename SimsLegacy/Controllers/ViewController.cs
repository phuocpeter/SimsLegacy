using Microsoft.AspNetCore.Mvc;

namespace SimsLegacy.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ViewController : Controller
    {
        [Route("/")]
        public IActionResult Index([FromRoute] string id)
        {
            return View();
        }
    }
}
