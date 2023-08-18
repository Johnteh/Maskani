<h1 align="center">Mali safi</h1>
<p align="center">Realtor clone</p>

<p align="center">
  <img src="https://github.com/Johnteh/realtor-clone-react/blob/main/src/assets/svg/realtor%20clone.png"
       alt="home page"
       width="full"
  >
</p>

This project mission  was to easen the process of finding listings especially in kenya.
Currently the process is very hard and involves dedicating a day or two to find a property for either on sale or to rent. Most people who have tried to undertake this process online make complains about being conned by property owners or fake listings on most of online platforms. 
We intend to bridge the gap by offering authentic listings to the users and bringing legit  business to home owners by bridging this gap.
- have a look at the live project here https://realtor-clone-react-green.vercel.app/ 

## project dependencies
- run `npm install` to install all the dependencies used in this project. 
- can have a look at the dependies in [package.json](./package.json)

## TechStack Used
    
### Front End
- ReactJs
- Tailwind css
#### The structure 
- [main app](./src/App.js) Routing and registering of routes 
- [pages used](./src/pages)
- [components](./src/components/) to maximize code reusability in react
- [hooks](./src/hooks/) custom hooks i used in the project.

### BackEnd
For Backend i went with Firebase\
check out firebase rules i used here [firebase rules](./rules.txt)
1. firebase authentication.
* To authenticate users
* To login users.
2. firestore database to make collections(documents)
* This is a Nosql database. In firebase They are called Collections.
3. firebase storage 
* to store images in my application.

Runs `npm start`` in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
