namespace SimsLegacy.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public abstract class ApiControllerBase : ControllerBase
    {
        protected string TreeId => (string)HttpContext.Items[TreeResolverMiddleware.TreeId];
        protected string PeopleId => (string)HttpContext.Items[TreeResolverMiddleware.TreeId];
    }
}
