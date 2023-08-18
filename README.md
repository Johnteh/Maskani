<h1 align="center">Mali safi :house:</h1>
<p align="center">Realtor clone</p>

<p align="center">
  <img src="https://github.com/Johnteh/realtor-clone-react/blob/main/src/assets/svg/realtor%20clone.png"
       alt="home page"
       width="full"
  >
</p>

This project mission  was to easen the process of finding listings especially in kenya.\
Currently the process is very hard and involves dedicating a day or two to find a property for either on sale or to rent.\ Most people who have tried to undertake this process online make complains about being conned by property owners or fake listings on most of online platforms.\
We intend to bridge the gap by offering authentic listings to the users and bringing legit  business to home owners by bridging this gap.
- have a look at the live project here https://realtor-clone-react-green.vercel.app/ 

## project dependencies :family:
- run `npm install` to install all the dependencies used in this project. 
- can have a look at the dependies in [package.json](./package.json)

## TechStack Used :anchor:
    
### Front End :tv:
- ReactJs
- Tailwind css
#### The structure :open_file_folder:
- [main app](./src/App.js) Routing and registering of routes 
- [pages used](./src/pages)
- [components](./src/components/) to maximize code reusability in react
- [hooks](./src/hooks/) custom hooks i used in the project.

### BackEnd :computer:
For Backend i went with Firebase\
check out firebase rules i used here [firebase rules](./rules.txt)
#### Structure. :open_file_folder:
1. firebase authentication.
* To authenticate users
* To login users.
2. firestore database to make collections(documents)
* This is a Nosql database. 
3. firebase storage 
* to store images in my application.

Run `npm start` in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Author :black_nib:

- **John miiri** - <[@miirijohn08@gmail.com](https://github.com/Johnteh)>

## License :lock:

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
