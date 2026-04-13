using Microsoft.AspNetCore.Mvc;

namespace Tailwick.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Error404()
        {
            return View();
        }

        public IActionResult Pricing()
        {
            return View();
        }

        public IActionResult Faqs()
        {
            return View();
        }

        public IActionResult ComingSoon()
        {
            return View();
        }

        public IActionResult Maintenance()
        {
            return View();
        }

        public IActionResult Offline()
        {
            return View();
        }

        public IActionResult Timeline()
        {
            return View();
        }

        public IActionResult Starter()
        {
            return View();
        }

    }
}