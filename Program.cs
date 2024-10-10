var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseHttpsRedirection();

var jokes = new[]
{
    "Warum benutzen Programmierer keine Sonnenbrillen? Weil sie keine Bugs sehen wollen.",
    "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem.",
    "Warum können Java-Entwickler keine Pausen einlegen? Weil sie keine 'break'-Anweisungen mögen."
};

app.MapGet("/joke", () =>
{
    var random = new Random();
    var joke = jokes[random.Next(jokes.Length)];
    return Results.Json(new { joke });
});

app.Run();
