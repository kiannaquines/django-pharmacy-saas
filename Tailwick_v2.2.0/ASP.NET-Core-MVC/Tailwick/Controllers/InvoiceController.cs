using Microsoft.AspNetCore.Mvc;

namespace Tailwick.Controllers
{
    public class InvoiceController : Controller
    {
        public IActionResult AddNew()
        {
            return View();
        }
        
        public IActionResult List()
        {
            return View();
        }

        public IActionResult Overview()
        {
            return View();
        }

    }
}