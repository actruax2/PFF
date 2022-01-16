# Not Ready to Quit Yet - Playoff Fantasy Football

## Description

This application is a full-stack web application to manage an NFL Postseason Fantasy Football league.

## Getting Started

### Prerequisites

This application requires Node.js to be installed. Initial development has been done with a `node --version` of
`v16.13.0`, and an `npm --version` of `8.1.0`. There are many ways to [install Node.js/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm),
so pick the method that works best for you.

While Node.js and npm will run on Linux, Windows, or Mac, several of the scripts, such as those defined in
`package.json` will not work on Windows, and have only been tested on Linux.

### Application Setup

To install the application for development purposes, clone this repository and run the following commands.

```bash
# Install the dependencies for the server
npm install

# Install the dependencies for the client
cd client; npm install
```

### Database Setup

This application requires a running PostgreSQL database to run. For ease of development, a basic docker-compose
configuration has been added. Feel free to use this, or any other PostgreSQL server.

```bash
# Start the database (Connect to localhost:8080 for web management of the database)
docker-compose up -d

# Run the migrations to create the database tables
npx knex migrate:latest

# Seed the database (optional, but recommended)
npx knex seed:run
```

Additionally, database lifetime can be managed with the following commands.

```bash
# Stop the running database, but leave the containers (and database) in-tact.
docker-compose stop

# (Re-)Start the database after it has been stopped
docker-compose start

# Stop the database and remove the containters (and database).
# NOTE: After running this command, you will need to re-run the migration and seed steps shown above
docker-compose down
```

Finally, this docker-compose deployment includes the [adminer](https://www.adminer.org/) application running for
database management. Once the containers are running, navigate to [http://localhost:8080](http://localhost:8080)
and connect with the following settings:

* **System**: PostgreSQL
* **Server**: db
* **Username**: postgres
* **Password**: password
* **Database**: pff

### Running the Application

#### Recommended Development Configuration (Client and Server)

To start the application in its development configuration, run `npm run develop` from the root folder. This will start
the ExpressJS API server running on port 5000, and the ReactJS front-end running on port 3000. This has also been
added as a Launch Configuration for Visual Studio Code, which will allow debugging of the application and/or API.

### Deploying the Application

TBD

### Environment Variables

There are a number of environment variables and customizations to support eventual deployment to a production database
and server. These aren't finalized or documented (yet), but this section is left as a placeholder for when they are.

#### `NODE_ENV`

The node environment. Should be one of `development` | `staging` | `production`. Defaults to `development` when run from
`npm start`

#### `PGSQL_CONNECTION`

The connection string for the PostgreSQL database connection. See the [PostgreSQL Documentation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)
for information on the format of these connection strings.

#### `PORT`

The port that the ExpressJS server is running on. Defaults to `5000`.

## Design Notes

### Stack

* Frontend: [ReactJS](https://reactjs.org/)
* Backend: [ExpressJS](https://expressjs.com/)
* Package Manager: [Node.js](https://nodejs.org/en/)
* Database: [PostgreSQL](https://www.postgresql.org/)

### Hosting

* Source Code: [GitHub](https://github.com/actruax2/PFF)
* Application: [Heroku](https://devcenter.heroku.com/)?

### Feature List

#### Minimum Viable Product

* Log in with [Google Auth](https://www.npmjs.com/package/react-google-login)
* Create Team(s)
* View all teams/standings
* Player/Team Scores and Standings updated automatically

#### Nice to Have

* Edit a team before season start
* Tip Jar / Payment

### Database Design

TBD
