using Microsoft.AspNetCore.Mvc;

namespace PocEv.Core.Portal.Controllers
{
    public class SpaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
