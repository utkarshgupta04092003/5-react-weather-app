# React Weather App


## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Screenshots](#screenshots)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [Contributions](#contributions)
8. [License](#license)

## Overview

The React Weather App, named '5-reat-weather-app', is a web application built with React, Vite, and OpenWeatherMap API. The app features two main routes, `Home` and `Compare`. In the `Home` route, users can check the weather by city name using a search bar and retrieve the current location weather by clicking a button. The data is displayed in a tabular form. In the `Compare` route, users can input two city names, and after clicking a button, the app shows the weather details of both cities side by side.

## Features

- **Two Main Routes:** `Home` and `Compare` routes for different functionalities.

- **Check weather by City:** In the `Home` route, users can check the weather by entering a city name in the search bar.

- **Check weather by Current Location Weather:** In the `Home` route, users can check the current location weather by clicking a button.

- **City Comparison:** In the `Compare` route, users can input two city names and compare the weather details.

## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/utkarshgupta04092003/5-react-weather-app.git
   ```

2. Navigate to the project directory.

   ```bash
   cd 5-react-weather-app
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Set up your [OpenWeatherMap API key](https://openweathermap.org/api) and replace `"REACT_APP_API_ID"` in the relevant components with your actual API key.

5. Start the development server.

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore the React Weather App.

## Screenshots

Current Location weather report: 
![image](https://github.com/utkarshgupta04092003/5-react-weather-app/assets/63789702/b2e1411b-e5e9-4cc5-b099-9356ff255317)

Weather report of the city by name:
![image](https://github.com/utkarshgupta04092003/5-react-weather-app/assets/63789702/146c5809-ad6b-40fa-a2ab-f183c2e638eb)

Compare two city weather reports:
![image](https://github.com/utkarshgupta04092003/5-react-weather-app/assets/63789702/2f9b5ada-d652-482b-a1bc-51bdb928ae9c)

## Project Structure

- **src/components/Home.jsx:** Component for the `Home` route with a search bar, current location weather button, and weather display.

- **src/components/Compare.jsx:** Component for the `Compare` route with input boxes for two city names and a button to compare weather details.

- **src/App.js:** Main application component defining the routes.


## Technologies Used

- React
- Vite
- OpenWeatherMap API

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use and modify the code for personal and commercial purposes.
