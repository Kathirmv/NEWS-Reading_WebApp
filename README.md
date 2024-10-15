News Web App
Description
The News Web App is a frontend application that fetches and displays the latest news articles using a third-party news API. It provides an easy-to-use interface for browsing news by category, searching for specific topics, and viewing detailed articles. The app is built with HTML, CSS, and vanilla JavaScript, ensuring a lightweight and responsive experience.

Features
Fetches live news articles from a third-party API (such as NewsAPI).
Users can filter news based on predefined categories (e.g., Sports, Technology, Health).
Search functionality allows users to look up articles by keyword.
Displays article details including title, description, source, and published date.
Responsive layout optimized for both desktop and mobile users.
Tech Stack
Frontend:
HTML5: Structure of the app.
CSS3: Styling for the layout and components.
JavaScript: To fetch and render data from the news API.
API: NewsAPI or any similar news API.
Installation
Prerequisites
A valid API key from NewsAPI (or another news API provider).
A code editor and a browser to run the app.
Setup Instructions
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/news-web-app.git
cd news-web-app
Open the project folder and locate the script.js file.

Replace the placeholder for the API_KEY in the script.js file with your own API key from the news provider.

javascript
Copy code
const API_KEY = 'your_api_key_here';
Open the index.html file in your web browser.

You can simply double-click the index.html file or serve it with a local HTTP server to ensure all functionalities work properly.

Usage
Home Page
The home page displays the latest top headlines from different sources.
Users can navigate through different categories (e.g., Business, Technology, Sports, etc.) to view more specific news articles.
Search
Users can search for news articles by entering a keyword into the search bar.
The app will display relevant articles based on the search query.
Article View
Clicking on any news article will redirect the user to the full article in a new tab, allowing users to read the entire news piece from the original source.
API Usage
The app relies on NewsAPI (or a similar API) to fetch news articles. Here are the primary API requests used:

