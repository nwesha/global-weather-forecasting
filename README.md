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
