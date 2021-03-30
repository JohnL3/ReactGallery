import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
import MainWindow from './components/MainWindow.js';
import CheckOutBar from './components/CheckOutBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <header><NavBar connected = {true}/></header>
        <section>
            <SideBar />
            <MainWindow greeting = {false} name = "hello"/>
            <CheckOutBar greeting = {false} />
        </section>
      
    </div>
  );
}

export default App;
