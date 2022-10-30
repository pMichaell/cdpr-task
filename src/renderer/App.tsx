import classes from './App.module.css';
import Canvas from './components/canvas/Canvas';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <SideMenu />
        <Canvas />
      </main>
    </>
  );
};

export default App;
