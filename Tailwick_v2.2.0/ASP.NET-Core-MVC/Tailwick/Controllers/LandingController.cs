using Microsoft.AspNetCore.Mvc;

namespace Tailwick.Controllers
{
    public class LandingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Product()
        {
            return View();
        }

    }
}