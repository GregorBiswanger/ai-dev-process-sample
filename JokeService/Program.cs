var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

var jokes = new[]
{
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He will stop at nothing to avoid them!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish wearing a crown? King Cod!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!"
};

app.MapGet("/jokes", () =>
{
    var random = new Random();
    var joke = jokes[random.Next(jokes.Length)];
    return joke;
})
.WithName("GetRandomJoke")
.WithOpenApi();

app.Run();
