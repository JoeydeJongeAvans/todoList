# Gebruik de officiële .NET Core-runtime als basisimage
FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine AS base
WORKDIR /app

# Gebruik de officiële .NET Core SDK als basis voor het bouwen van het project
FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS build
WORKDIR /src

# Kopieer de csproj- en sln-bestanden om afhankelijkheden te herstellen en te bouwen
COPY ["ToDoApi.csproj", "./"]
RUN dotnet restore "./ToDoApi.csproj"

# Kopieer de rest van de broncode en bouw het project
COPY . .
WORKDIR "/src/."
RUN dotnet build "ToDoApi.csproj" -c Release -o /app/build

# Publiceer het project
FROM build AS publish
RUN dotnet publish "ToDoApi.csproj" -c Release -o /app/publish

# Gebruik de officiële .NET Core-runtime als basisimage voor de runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine AS final
WORKDIR /app

# Kopieer de gepubliceerde bestanden vanuit de publish stage
COPY --from=publish /app/publish .

# EXPOSE instructie is niet strikt noodzakelijk, maar kan handig zijn voor documentatie
# en voor het begrijpen welke poorten de container gebruikt
EXPOSE 5219

# Voer de gepubliceerde applicatie uit
ENTRYPOINT ["dotnet", "ToDoApi.dll"]
