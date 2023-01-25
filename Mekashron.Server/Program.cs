using Mekashron.Server.Infrastructure.Configuration;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.CorsRegister(builder.Configuration);
builder.Services.SwaggerRegister();

var app = builder.Build();

app.SwaggereConfigure();
app.UseHttpsRedirection();
app.CorsConfigure();
app.UseAuthorization();
app.MapControllers();

app.Run();
