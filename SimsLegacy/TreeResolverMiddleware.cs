namespace SimsLegacy
{
    using System.Text.RegularExpressions;

    public partial class TreeResolverMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly Regex _treeIdMatcher = TreeIdMatcher();
        public static readonly object Id = new();

        public TreeResolverMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            string treeId = null;
            foreach (var referer in context.Request.Headers.Referer)
            {
                var match = _treeIdMatcher.Match(referer);
                if (match.Success)
                {
                     treeId = match.Groups[1].Value;
                    break;
                }
            }

            context.Items[Id] = treeId;
            await _next(context);
        }

        [GeneratedRegex(@".*\/trees\/(\w+).*", RegexOptions.IgnoreCase | RegexOptions.Compiled)]
        private static partial Regex TreeIdMatcher();
    }
}
