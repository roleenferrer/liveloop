# Instructions for Using Live Loop

## Word of Caution

As of Sprint 4, it is **NOT** possible to run this application locally through a Windows OS machine. This application works as intended with Mac OS.

## Prerequistes

In order to fully use Live Loop and its features, the following must be installed on your machine:

Docker (https://www.docker.com/products/docker-desktop/)

Node.js (https://nodejs.org/en/download/)

PostgresSQL, specifically the Postgres.app for Mac (https://postgresapp.com)

## Deploying Live Loop

1. Clone the directory (https://github.com/roleenferrer/liveloop) onto your machine 

### Using install.py script (must have Python3 installed)

1. In the liveloop directory run the following command:

   ```python
   python3 install.py
   ```

2. When finished installing dependencies, create two seperate terminals to for backend and frontend components, then run the command:

   ```
   npm start
   ```

### Not Using install.py script

1. There are multiple folders containing the contents of the project. In order to deploy the application successfully, create two seperate terminals, with one handling the backend directory and the other handling the frontend directory. These two must be run concurrently with Node.js in order to ensure a connection between frontend and backend.

   1. For the **backend** directory (in a seperate terminal):

      1. While inside the **backend** directory, run the following command:

         ```
         npm install
         ```

         which will install the required components via the **package.json** file located in the directory.

         **NOTE**: There may be conflicts with some dependencies due to version conflicts. If the previous command did not work, instead, run the command again with the following flag to forcefully install and ignore version conflicts with dependencies:

         ```
         --legacy-peer-deps 
         ```

      2. Install the docker image provided using the following command with Docker opened:

         ```
         docker compose up -d
         ```

         If you ever wanted to reload the image drop it using the command:

         ```
         docker compose down
         ```

         and run the previous command again.

      3. To start the backend component of Live Loop, run the command:

         ```
         npm start
         ```

         which will start the backend component.

      4. (Optional) For API testing, a testing environment for API calls has been created using Swagger UI, which can be found by entering the local URL (http://localhost:3010/v0/api-docs/)

   2. For the frontend directory (in a seperate terminal):

      1. While inside the **backend** directory, run the following command:

         ```
         npm install
         ```

         which will install the required components via the **package.json** file located in the directory.

         **NOTE**: There may be conflicts with some dependencies due to version conflicts. If the previous command did not work, instead, run the command again with the following flag to forcefully install and ignore version conflicts with dependencies:

         ```
         --legacy-peer-deps 
         ```

      2. To start the frontend component of Live Loop, run the command:

         ```
         npm start
         ```

         which will start the frontend component.

2. The appplication can now be ran locally, which can be found by enetering the local URL (http://localhost:3000)

## Known Issues

- Compatability with Windows OS machines. The reason being the Docker image we created does not (for some reason) install the necessary components that are required to full utilize Live Loop (more specifically, improper setup of the database). Though, it is entirely possible to setup the database manually by using SQL commands to create a "dev" database locally to your machine.

