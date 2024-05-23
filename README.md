# State Suggester

A full-stack application for suggesting U.S. states and highlighting them on a map. The project uses Vue.js for the frontend and Golang with GraphQL for the backend. The backend is connected to a MongoDB database that stores state data.

## Features

- Typeahead input for searching U.S. states.
- Backend filtering logic implemented in Golang with GraphQL.
- Dynamically highlighted states on a Google Map.

## Technologies Used

- **Frontend**: Vue.js
- **Backend**: Golang, GraphQL
- **Database**: MongoDB
- **Map**: Google Maps API
- **Containerization**: Docker

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Golang](https://golang.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup

1. **Navigate to the backend directory**:
   cd ~/Desktop/VibrantProj/state-suggester/backend

2. **Install MongoDB Node.js driver:**
    npm install mongodb

3. **Insert State Data into MongoDB:**
    node seed.js

4. **Start MongoDB using Docker:**
    docker-compose up -d

5. **Run the Golang Server:**
    go run main.go

### Frontend Setup

1. **Navigate to the frontend directory:**
    cd ~/Desktop/VibrantProj/state-suggester/frontend/state-suggester

2. **Install Dependencies:**
    npm install

3. **Run the Vue.js Development Server:**
    npm run serve

## Accessing the Application
- Frontend: Open your browser and navigate to http://localhost:8081.
- Backend: The backend server runs on http://localhost:8080.


## Verifying the Setup
- Open http://localhost:8081 in your web browser.
- Type in the typeahead input to search for a state.
- The selected state should be highlighted on the map.


## Usage
- Search for a State: Use the typeahead input to search for U.S. states.
- Select a State: Click on a state from the suggestions.
