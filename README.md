🔗 URL Shortener Backend
A simple backend API for shortening long URLs using Node.js, Express, MongoDB, and Mongoose. This project allows users to generate short, shareable links that redirect to original URLs.

.

🚀 Live API
Base URL:
https://your-app-name.onrender.com
(Replace with your actual deployed Render URL)

)

📦 Features
Shorten long URLs

Redirect from short code to original URL

Tracks number of clicks

Stores creation and expiration dates

Built with Node.js, Express, MongoDB, and Mongoose

Mongoose

🛠️ Technologies Used
Node.js

Express.js

MongoDB Atlas

Mongoose

shortid

valid-url

dotenv



📁 Project Structure
├── models/
│   └── URL.js        # Mongoose schema for storing URLs
├── routes/
│   └── urlRoutes.js  # API endpoints
├── config/
│   └── db.js         # MongoDB connection
├── server.js         # Main application file
├── .env              # Environment variables
└── README.md

⚙️ Setup Instructions
1  Clone the repo:
git clone https://github.com/yourusername/url-shortener-backend.git
cd url-shortener-backend
2  Install dependencies:
npm install

3  Set environment variables in .env:
PORT=5000
MONGO_URI=your_mongo_connection_string
BASE_URL=http://localhost:5000
4  Run the app locally:
npm start


📡 API Endpoints
POST /shorten
Create a short URL for a given original URL.

Request Body:

{
  "originalUrl": "https://example.com"
}
Response:

{
  "originalUrl": "https://example.com",
  "shortCode": "abc123",
  "shortUrl": "https://your-app-name.onrender.com/abc123"
}

GET /:shortCode
Redirects the user to the original URL.

.

🌐 Deployment
Deployed using Render. Make sure to:

Add your environment variables in Render dashboard

Use npm install as build command

Use node server.js as start command
🙌 Credits
Developed by Ekram Asrar

📜 License
This project is licensed under the MIT License.







