<<<<<<< HEAD
# Weather App

This Weather App is built using React and fetches real-time weather data from the AccuWeather API via a proxy server.
The proxy server is used to handle CORS issues by forwarding requests to the AccuWeather API and returning the results to the React app.

## Table of Contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for a city to get real-time weather data.
- Display current weather conditions including temperature, weather icon, and description.
- User-friendly interface with responsive design.
- Error handling for city not found and API issues.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A valid API key from [AccuWeather](https://developer.accuweather.com/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. **Install the dependencies:**

   ```bash
    npm install
   
3. **Install dependencies for the proxy server:**

   ```bash
   cd proxy-server
   npm install express request


## Running the App

**Start the Proxy Server**
In the proxy-server directory, start the proxy server:

    node proxy-server.js
    Start the React App
        
**In the root directory of the project, start the React development server:**

    npm start
    
Open your browser and navigate to http://localhost:3000 to see the app in action.

## Project Structure
weather-app/<br>
├── public/<br>
│   ├── index.html<br>
│   └── ...<br>
├── src/<br>
│   ├── components/<br>
│   │   ├── FetchWeather.js<br>
│   │   └── ...<br>
│   ├── App.js<br>
│   └── index.js<br>
├── proxy-server/<br>
│   ├── proxy-server.js<br>
│   └── package.json<br>
├── package.json<br>
└── README.md<br>

## Dependencies
1. React
2. Axios
3. Express (for proxy server)
4. Request (for proxy server)

## Screenrecording
`![click to watch](screenrec)`

### Explanation

- **Features**: Lists the main features of the app.
- **Setup and Installation**: Detailed steps on how to set up and install the project, including prerequisites and installation instructions.
- **Running the App**: Instructions on how to start both the proxy server and the React app.
- **Project Structure**: A brief overview of the project directory structure.
- **Dependencies**: Lists the main dependencies used in the project.
- **Contributing**: Notes on how others can contribute to the project.
- **License**: Information about the project's license.

Feel free to customize further based on your specific project details and preferences.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> e8cad77 (first commit)
