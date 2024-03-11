# Coding Test Prompt

## Objective

Your task it to:

- Save the provided CSV data to a file
- Write a program that reads the CSV file
- Add code to Perform various calculations and output the results

## Manual Step

### Save CSV to File

- Copy the CSV data provided below.
- Create a new text file on your local machine.
- Paste the CSV data into the text file.
- Save the file with the name `movies.csv`.

## Requirements

1. **Read from File System**
   - Write a program to read the `movies.csv` file that you have saved.

2. **CSV Calculations**
   - Calculate the average movie length from the "Length" column.
   - Count the total number of movies for each genre.

3. **JSON Calculations**
   - Extract the JSON data from the "Reviews" column.
   - Calculate the average rating for each movie based on the reviews.
   - Find the movie with the highest average rating.

4. **Output**
   - Print the calculated average movie length.
   - Print the total number of movies per genre.
   - Print the average rating for each movie.
   - Print the title of the movie with the highest average rating.

## Provided CSV Data

```csv
Title,Director,Year,Genre,Length,Reviews
Pulp Fiction,Quentin Tarantino,1994,Crime/Drama,154 min,"[{""user"":""JohnDoe"",""rating"":9,""comment"":""A masterpiece of storytelling.""},{""user"":""MovieBuff87"",""rating"":4,""comment"":""Overrated in my opinion.""},{""user"":""JaneSmith"",""rating"":8,""comment"":""Brilliantly written characters.""}]"
WALL-E,Andrew Stanton,2008,Animation/Sci-Fi,98 min,"[{""user"":""ScreenSaver"",""rating"":10,""comment"":""Visually stunning and heartfelt!""},{""user"":""TechTalk"",""rating"":3,""comment"":""The pace was too slow for my taste.""},{""user"":""EcoWarrior"",""rating"":9,""comment"":""An environmental wake-up call that's fun for all ages.""}]"
Aliens,James Cameron,1986,Sci-Fi/Action,137 min,"[{""user"":""XenoFan123"",""rating"":8,""comment"":""Intense action and memorable scenes.""},{""user"":""CritiqueKing"",""rating"":2,""comment"":""Didn't live up to the original.""},{""user"":""SciFiGal78"",""rating"":10,""comment"":""Ripley is an icon! Fantastic sequel.""}]"
Beverly Hills Cop,Martin Brest,1984,Action/Comedy,105 min,"[{""user"":""ComedyGold"",""rating"":7,""comment"":""Murphy is hilarious! Great '80s vibe.""},{""user"":""80sKid"",""rating"":5,""comment"":""Just doesn't hold up.""},{""user"":""RetroFan"",""rating"":6,""comment"":""Funny, but a bit dated.""}]"
Top Gun,Tony Scott,1986,Action/Drama,110 min,"[{""user"":""FlyBoy"",""rating"":8,""comment"":""Takes my breath away!""},{""user"":""MaverickFan"",""rating"":7,""comment"":""Love the aerial scenes!""},{""user"":""Iceman"",""rating"":6,""comment"":""Good, but a bit cheesy in places.""}]"
Footloose,Herbert Ross,1984,Drama/Romance,107 min,"[{""user"":""Dancer"",""rating"":5,""comment"":""Fun soundtrack, but the story's lacking.""},{""user"":""80sMania"",""rating"":8,""comment"":""A true '80s classic!""},{""user"":""FilmCriticJoe"",""rating"":6,""comment"":""An okay dance movie with great music.""}]"
Blade Runner,Ridley Scott,1982,Sci-Fi/Thriller,117 min,"[{""user"":""SciFiAfficionado"",""rating"":9,""comment"":""A visually spectacular and deep movie.""},{""user"":""FutureNoir"",""rating"":10,""comment"":""A masterpiece of its genre.""}]"
Star Wars: Return of the Jedi,Richard Marquand,1983,Sci-Fi/Action,131 min,"[{""user"":""JediMaster"",""rating"":8,""comment"":""A great conclusion to the original trilogy.""},{""user"":""TheForceUser"",""rating"":7,""comment"":""Ewoks aside, it's a fantastic adventure.""}]"
Step Brothers,Adam McKay,2008,Comedy,98 min,"[{""user"":""ComedyLover"",""rating"":6,""comment"":""Has some hilarious moments but not for everyone.""},{""user"":""LaughRiot"",""rating"":8,""comment"":""Will Ferrell and John C. Reilly are a great duo.""}]"
The Goonies,Richard Donner,1985,Adventure/Comedy,114 min,"[{""user"":""80sKid"",""rating"":9,""comment"":""Never say die! A childhood favorite.""},{""user"":""TreasureHunter"",""rating"":7,""comment"":""Fun adventure movie with a group of lovable kids.""}]"
```
