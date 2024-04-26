var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/joke", () =>
{
    var jokes = new[]
    {
        "Warum vertrauen Wissenschaftler Atomen nicht? Weil sie alles ausmachen!",
        "Hast du von dem Mathematiker gehört, der Angst vor negativen Zahlen hat? Er wird alles tun, um sie zu vermeiden!",
        "Warum kämpfen Skelette nicht gegeneinander? Sie haben nicht den Mut!",
        "Ich lese ein Buch über Antischwerkraft. Es ist unmöglich, es aus der Hand zu legen!",
        "Warum hat der Vogelscheuchen einen Preis gewonnen? Weil er in seinem Feld herausragend war!",
    };

    var random = new Random();
    var joke = jokes[random.Next(jokes.Length)];

    return joke;
})
.WithName("GetJoke")
.WithOpenApi();

app.Run();