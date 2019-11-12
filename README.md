This project is made as a test task for 99MATH. It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Application has a form to create new notes to save in db, along with the list of saved notes.

Project is deployed on heroku with URL: [https://hajira-masood-99math.herokuapp.com/]

## Setup

Frontend is made in Reactjs and backend server uses Hapi framework for Nodejs and MongoDb.
Project uses Mongodb cloud cluster.

### Available Scripts

In the project directory, you must run:
run `npm install` to install all dependencies

### `npm run server`

Runs the backend server.
[http://localhost:3001] have backend api server.

### `npm start`

Runs the frontend app.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Also frontend app has proxy hosted to : http://localhost:3001 and configuration is defined
package.json file. This is used to redirect to server side apis.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
