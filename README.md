This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This web app is fetching data from the USGS API (https://earthquake.usgs.gov/fdsnws/event/1/) and displaying the results in Google Map.
The size of the map markers reflect the magnitude of the earthquake. Clicking on a marker gives more information about that earthquake.
The data presented here is from September 2015 as it shows varying degrees of magnitude of the earthquakes.

## Install/Setup
Google map API requires API_KEY. For this purpose, create .env file in the root folder and input:
REACT_APP_API_KEY = YOUR_API_KEY_HERE

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
