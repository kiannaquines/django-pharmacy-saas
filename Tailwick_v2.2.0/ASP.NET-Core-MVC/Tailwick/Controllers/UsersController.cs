using Microsoft.AspNetCore.Mvc;

namespace Tailwick.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Grid()
        {
            return View();
        }
        
        public IActionResult List()
        {
            return View();
        }
        
    }
}