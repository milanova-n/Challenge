# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Short description

A user can search all repositories of a given Github user by providing his/her name in the searchbox. Afterwards, the user can filter the repositories by programming language and sort the result in asc or desc order. The user can reset the programming language by selecting "All languages". The user can not reset the sorting however (the results from the api were already sorted - it doesn't make sense for me to shuffle the data just to provide this addtional option - therefore the user can only select "A-Z" or "Z-A")
When the user deletes the input from the search bar, all repos shown and the filters are not visible again.
