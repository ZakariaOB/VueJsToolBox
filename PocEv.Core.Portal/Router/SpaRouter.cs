using Microsoft.AspNetCore.Routing;
using System.Threading.Tasks;

namespace PocEv.Core.Portal.Router
{
    public class SpaRouter : IRouter
    {
        public const string SpaSegment = "/spa";

        private readonly IRouter _defaultRouter;

        public SpaRouter(IRouter defaultRouter)
        {
            _defaultRouter = defaultRouter;
        }

        public async Task RouteAsync(RouteContext context)
        {
            if (context.HttpContext.Request.Path.StartsWithSegments(SpaSegment))
            {
                context.RouteData.Values["controller"] = "Spa";
                context.RouteData.Values["action"] = "Index";
            }
            await _defaultRouter.RouteAsync(context);
        }

        public VirtualPathData GetVirtualPath(VirtualPathContext context)
        {
            return _defaultRouter.GetVirtualPath(context);
        }
    }
}
