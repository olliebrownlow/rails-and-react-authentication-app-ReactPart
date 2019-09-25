# Rails api and React authentication app

React frontend authentication web application with a Rails api backend.

This repository hosts the frontend. Click [here](https://github.com/olliebrownlow/rails-and-react-authentication-app-RailsPart) for the backend Rails repository.

## Prerequisites

You must have Node and NPM installed on your system.

Versions used in development:
- Node 12.9.1
- NPM 6.11.2

## Getting set up

#### Get the project

Clone the repo, navigate to the root directory and run `npm install` to install the dependencies.

#### Start the server

We will run the Rails backend on localhost:3001, so you can use the default React port for the frontend (localhost:3000): run `npm start`.

#### A point to note

If your server is not listening on port 3000, you will need to adjust the cors.rb file accordingly in config/initializers in the Rails api.
