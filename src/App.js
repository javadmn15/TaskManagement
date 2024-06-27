import logo from './logo.svg';
import './App.css';
import './variables.css';
import Home from './pages/home/Home';
// import { createTheme } from '@mui/material/styles';


import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  typography: {
    h1:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 40,
    },
    h2:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 35,
    },
    h3:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 30,
    },
    h4:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 25,
    },
    h5:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 20,
    },
    h6:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 18,
    },
    span:{
      fontFamily: ['Poppins'],
      color: "white",
      fontSize: 14,
    },
    p:{
      fontFamily: ['Poppins'],
      color: "#aeadb1",
      fontSize: 12,
    },
    


    button: {
      fontFamily: ['Poppins'],
      fontSize: 16,
      fontWeight: 400,
    },
  },
  palette: {
    mode: 'dark',
  },
});


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>