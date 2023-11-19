namespace SimsLegacy
{
    using System.Text.RegularExpressions;

    public partial class TreeResolverMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly Regex _treeIdMatcher = TreeIdMatcher();
        private readonly Regex _peopleIdMatcher = PeopleIdMatcher();
        public static readonly object TreeId = new();
        public static readonly object PeopleId = new();

        public TreeResolverMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            string treeId = null;
            string peopleId = null;
            foreach (var referer in context.Request.Headers.Referer)
            {
                var match = _treeIdMatcher.Match(referer);
                if (match.Success)
                {
                     treeId = match.Groups[1].Value;
                    break;
                }
            }

            foreach (var referer in context.Request.Headers.Referer)
            {
                var match = _peopleIdMatcher.Match(referer);
                if (match.Success)
                {
                    peopleId = match.Groups[1].Value;
                    break;
                }
            }

            context.Items[TreeId] = treeId;
            context.Items[PeopleId] = peopleId;
            await _next(context);
        }

        [GeneratedRegex(@".*\/trees\/(\w+).*", RegexOptions.IgnoreCase | RegexOptions.Compiled)]
        private static partial Regex TreeIdMatcher();

        [GeneratedRegex(@".*\/people\/(\w+).*", RegexOptions.IgnoreCase | RegexOptions.Compiled)]
        private static partial Regex PeopleIdMatcher();
    }
}
