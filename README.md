# 🌤️ Global Weather Forecasting App

A responsive weather app built with **React** that allows users to search for any city and get live weather updates using the AccuWeather API. All API requests are securely proxied through a Cloudflare Worker, keeping the API key hidden from the frontend.

---

## 🚀 Live Demo

🔗 [Click here to try it live](https://global-weather-forecasting.pages.dev/)

🔗 [Backend Worker Proxy](https://weather-proxy.anwesha11674.workers.dev)

---

## 🛠️ Tech Stack

* **Frontend**: React, Axios, CSS
* **Backend Proxy**: Cloudflare Workers
* **API**: AccuWeather (via secure proxy)

---

## 📦 Features

* 🌍 Search weather by city name
* 🌤️ View current weather conditions
* ⚡ Fast and responsive design
* 🔐 Secure proxy to protect API key using Cloudflare Workers

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   └── FetchWeather.js
│   └── App.js
├── worker/
│   ├── index.js            # Cloudflare Worker proxy code
│   └── wrangler.toml       # Worker config
├── .env                    # Contains REACT_APP_PROXY_URL
├── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/nwesha/global-weather-forecasting.git
cd global-weather-forecasting
```

### 2. Set up the frontend

```bash
npm install
```

Create a `.env` file with:

```env
REACT_APP_PROXY_URL=https://weather-proxy.anwesha11674.workers.dev
```

### 3. Start the development server

```bash
npm start
```

### 4. Build for production

```bash
npm run build
```

---

## ☁️ Worker Deployment

The Cloudflare Worker handles proxying requests to the AccuWeather API.

* Location Search: `/api/locations/v1/cities/search?q=...`
* Current Weather: `/api/currentconditions/v1/:locationKey`

The Worker is deployed live at:

```
https://weather-proxy.anwesha11674.workers.dev
```

---

## 📜 License

MIT License. Feel free to fork and use!

---

## 🙋‍♀️ Author

Made with ☀️ by [Anwesha](https://github.com/nwesha)
