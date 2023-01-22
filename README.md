# Brewery Finder

This project is a web application built using React.js, Node.js, and PGadmin. The main objective of the app is to provide a platform for users to search for breweries based on their zip code.

## Features

- User authentication and authorization
- Search for breweries by zip code
- View details of a specific brewery
- 


## Installation and Running

1. Clone the repository: `git clone https://github.com/RichardFoil/milestone3.git`
2. Install dependencies: `npm install` in the frontend and the backend folders
3. cd into the backend folder and start the server with nodemond server.js, You should be listening on port 5000
4  cd in to the frontend folder in a differenet terminal and run npm start, this should bring up the website at localhost:3000

## Usage

This app can be used to search for and explore breweries. Users can sign up and create their own profiles, search for breweries by zip code, view details of a specific brewery, and save their favorite breweries. The following routes are available:

- `/signup`: Sign up page for new users.
- `/login`: Login page for existing users.

- '5000/users': get all information about the users that were passed to the database 
- `5000/breweries': get all information about the breweries that were passed to the database


## Deployment

##  Known Bugs/Issues
- the ratings and comment form gets submitted to the backend database but dosent re-populate the card when the same zip code is searched.

- the rating and comment when the form gets submitted sticks to the card even if you change the zipcode.

- the only 5000 route that works is /breweries.  the other  routes work because the information is being passed to the database but i can't properly get the routes


## Contributing

We welcome contributions to this project. If you would like to contribute, please fork the repository and make a pull request with your changes.

## Credits

- [RichardFoil](https://github.com/RichardFoil) : Project creator and developer
