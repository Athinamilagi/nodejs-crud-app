## Getting Started

## Architecture Overview

This project follows the **Model-View-Controller (MVC) architecture**, ensuring a modular and scalable structure.

- **Model (model.js)**: Defines the structure of the database entities and handles data validation.
- **View**: Since this is a backend API, the view is represented by the responses sent to the client.
- **Controller (controllers.js)**: Contains the business logic and interacts with the model to fetch or manipulate data.
- **Routes (route.js)**: Maps incoming API requests to the appropriate controller functions.
- **Database (db.js)**: Manages the connection to the MongoDB database and performs queries.
- **Server (server.js)**: Initializes the Express server and integrates all components.

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-repo.git
   cd your-project-folder
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Create a `.env` File**

   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=3000
     ```

4. **Run the Server**

   ```sh
   npm start
   ```

5. **Access the Application**
   - The server will run on `http://localhost:3000/` (or your specified port).

## Project Structure

### 📂 node_modules

- Contains all third-party dependencies installed via npm.
- Auto-generated when you run `npm install`.
- Should not be modified manually.

### 📄 .gitignore

- Specifies files and folders Git should ignore.
- Helps avoid pushing unnecessary or sensitive files (e.g., `node_modules`).

### 📄 controllers.js

- Contains functions that handle request logic.
- Processes incoming requests and sends appropriate responses.

### 📄 db.js

- Manages database connection and configuration.
- Helps the app interact with the database efficiently.

### 📄 model.js

- Defines the structure/schema of the database entities.
- Ensures data consistency when interacting with the database.

### 📄 package-lock.json

- Locks specific versions of dependencies for consistency.
- Auto-generated when dependencies are installed/updated.

### 📄 package.json

- Defines project metadata, dependencies, and scripts.
- Used by npm to manage and install required packages.

### 📄 route.js

- Defines API endpoints and maps them to controller functions.
- Acts as a bridge between the frontend and backend logic.

### 📄 server.js

- The main entry point of the application.
- Initializes the server and starts listening for requests.
