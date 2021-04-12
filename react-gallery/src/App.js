import NavBar from './components/NavBar.js';
import NavBarSimple from './components/NavBarSimple.js';
import SideBar from './components/SideBar.js';
import MainWindow from './components/MainWindow.js';
import MainWindowFunction from './components/MainWindowFunction.js';
import CheckOutBar from './components/CheckOutBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <header><NavBar connected = {true}/></header>
        {/* <header><NavBarSimple /></header> */}
        <section>
            <SideBar />
            {/* <MainWindow greeting = {false} name = "hello"/> */}
            <MainWindowFunction greeting = {false} name = "hello"/>
            {/* <CheckOutBar /> */}
        </section>
      
    </div>
  );
}

export default App;
