var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var jokes = new[]
{
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!"
};

app.MapGet("/api/jokes", () =>
    {
        var randomJokes = jokes.OrderBy(_ => Guid.NewGuid()).Take(10).ToArray();
        return randomJokes;
    })
    .WithName("GetJokes");

app.Run();
