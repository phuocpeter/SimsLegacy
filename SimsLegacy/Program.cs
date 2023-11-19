namespace SimsLegacy
{
    using Microsoft.AspNetCore.Rewrite;
    using Microsoft.Extensions.DependencyInjection;
    using SimsLegacy.Services;

    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            ConfigureBuilder(builder);

            var app = builder.Build();
            await ConfigureAppAsync(app);

            await app.RunAsync();
        }

        private static void ConfigureBuilder(WebApplicationBuilder builder)
        {
            builder.Services.AddControllersWithViews();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddResponseCompression(opt =>
            {
                opt.EnableForHttps = true;
            });

            builder.Services.AddSingleton<AvatarService>();
            builder.Services.AddSingleton<DataService>();
            builder.Services.AddSingleton<PeopleService>();
            builder.Services.AddSingleton<TreeResolverService>();
        }

        private static async Task ConfigureAppAsync(WebApplication app)
        {
            await app.Services.GetRequiredService<TreeResolverService>().InitializeAsync();

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();

            app.UseResponseCompression();

            //app.UseRewriter(new RewriteOptions()
            //    .AddRewrite("^[^/api/]", "/", true));

            //app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            //app.MapControllers();
            //app.MapFallbackToFile("index.html");
        }
    }
}
