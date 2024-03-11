# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

In the example there is no connection to UI. The results are output to the console. React Application was used as a container that could be easily created and configured. Purely to save time.

This is not a perfect designed system. This is an example in which the task points are implemented. Approximate infrastructure has been created. Added comments on what would need to be done differently in a real system.

## Input

This sample loads predefined movies.csv from public folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
