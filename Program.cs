var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

var jokes = new List<string>
{
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "There are only 10 types of people in the world: those who understand binary, and those who don't."
};

var random = new Random();

app.MapGet("/jokes", () =>
{
    int index = random.Next(jokes.Count);
    return jokes[index];
});

app.Run();