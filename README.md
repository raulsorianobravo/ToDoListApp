# ToDoList

## About The Project

This project is a ToDo web application that request information to the API Rest of ToDoListApiNET.
The app let users create, modify and delete tasks

[![Watch the video](https://raw.githubusercontent.com/raulsorianobravo/ToDoListApp/main/public/init.jpg)](https://raw.githubusercontent.com/raulsorianobravo/ToDoListApp/main/public/0130.mp4)



### Built With
This app is developed in React and Javascript.
* [![React][React.js]][React-url]
  
## Getting Started

### Prerequisites

- Visual Studio Code
- Node.JS

### Installation

- Install the IDE as the standard version for your system
- Install Node.js
- Use Vite (example) to create the project
  ```
    npm create vite@latest
  ```
  ```
  npm i uuid
  npm i -- save @fortawesome/fontawesome-svg-core
  npm i -- save @fortawesome/free-solid-svg-icons
  npm i -- save @fortawesome/free-regular-svg-icons
  npm i -- save @fortawesome/react-fontawesome@latest
  ```

### Development and debug
- Clone the repository and check that all the dependencies are correctly added.
- Start the app in dev mode

```
  npm run dev

> todolistapp@0.0.0 dev
> vite


  VITE v6.0.11  ready in 149 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

- Test the app open the URL indicated

### Production Environment

Deploy the app in a server with Node.Js

## Usage

[![Product Name Screen Shot][product-screenshot]]()

  
At start verify if there are task in the storage

### Add
- Create a new task with the data inserted in the fields of the formulary
- The new task is showed in the list.

[![Product Name Screen Shot][add]]()

### Delete
- The user can delete the task selectec
### Edit
- The user can edit the values of the task.

[![Product Name Screen Shot][mod]]()

### Close
- The user can check the task and mark as completed

[![Product Name Screen Shot][comp]]()


### ToDoModel

## Roadmap

## License
N/A

## Contact

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[product-screenshot]: public/init.jpg
[add]: public/addItem.jpg
[mod]: public/modify.jpg
[comp]: public/complete.jpg



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

