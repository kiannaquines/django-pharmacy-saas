using Microsoft.AspNetCore.Mvc;

namespace Tailwick.Controllers
{
    public class AppsController : Controller
    {
        public IActionResult Mailbox()
        {
            return View();
        }

        public IActionResult Chat()
        {
            return View();
        }

        public IActionResult Calendar()
        {
            return View();
        }

        public IActionResult Notes()
        {
            return View();
        }

    }
}