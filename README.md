## Project Overview

This project is a web application designed to manage a dataset of two-dimensional named entities. There is an interface where users can create, edit, and visualize these entities. The application is built using ReactJS for the frontend, with Redux for state management, and a backend implemented in Node.js with Express.

## Features

### Core Features

1. <strong>Create a New Entity:</strong> Users can add new entities to the dataset.
2. <strong>Remove Existing Entity:</strong> Users can delete entities from the dataset.
3. <strong>Edit Existing Entity:</strong> Users can modify the details of existing entities.
4. <strong>Query Entities by Rectangle:</strong> Users can query entities within a specified rectangular area and get the list of entities and their labels.

## Technology Stack

1. ReactJS
2. Redux
3. NodeJS
4. ExpressJS
5. Axios

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation Steps

1. <strong>Clone the Repository:</strong> <code>git clone https://github.com/asselzhl/frontend-test-task.git</code>
2. <strong>Go the project folder:</strong> <code>cd frontend-test-task</code>
3. <strong>Install dependencies:</strong> <code>npm run install</code>
4. <strong>Start the application:</strong> <code>npm run start</code>

The frontend application will be available at http://localhost:5173/.

## Usage

### Entity Management

- <strong>Create an Entity:</strong> Fill in the details in "Create entity" section, and click on the "Create" button.
- <strong>Edit an Entity:</strong> Click the "Edit" button next to an entity, modify the details, and save.
- <strong>Remove an Entity:</strong> Click the "Delete" button next to an entity to delete it.

### Querying

- <strong>Perform a Query:</strong> Navigate to the query form section, input the rectangle coordinates, and view the matched entities and labels.
