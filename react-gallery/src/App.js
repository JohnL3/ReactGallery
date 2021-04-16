import css from './App.module.css';
// import NavBarClass from './post-components/NavBarClass';
import SideBar from './post-components/SideBar'
import Footer from './post-components/Footer';
import Content from './post-components/Content';
import NavBarFunc from './post-components/NavBarFunc';

function App() {
  return (
    <div className={css.App}>
        {/* <NavBarClass /> */}
        <NavBarFunc />
        <SideBar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
