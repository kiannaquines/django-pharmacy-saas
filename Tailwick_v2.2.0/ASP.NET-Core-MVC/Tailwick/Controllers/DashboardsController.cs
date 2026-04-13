using Microsoft.AspNetCore.Mvc;

namespace Tailwick.Controllers
{
    public class DashboardsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult Analytics()
        {
            return View();
        }

        public IActionResult Email()
        {
            return View();
        }

        public IActionResult Hr()
        {
            return View();
        }

    }
}