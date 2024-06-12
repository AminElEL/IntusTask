## About

The project is done as one project with two sides.


## Installation

npm install

Please run one of the open-source cross-platform web servers like XAMPP

Start web server


## Getting Started
Run the migrations 

php artisan migrate ( web server must be live at this point )

You will need 2 terminals open

1.  run php artisan serve 
2.  run npm run dev

.env file is populated with DB info and connection

## Usage

This is a small web app written in Laravel and Vue. Main purpose is hashing/shortening URLs.
Shortened URL will open an original URL in new tab, as long as the project is running, while keeping you on the Home page.
If full redirect is required please uncomment the code in the App.vue file for redirect and comment the one for blank opening.
To test web safety URLs You can use: "http://testsafebrowsing.appspot.com/s/phishing.html" as an example URL
