import Canvas from './components/canvas/Canvas';
import Header from './components/header/Header';
import SideMenu from './components/sideMenu/SideMenu';
import PathContextProvider from './context/PathContext';
import classes from './App.module.css';

const App = () => {
  return (
    <>
      <PathContextProvider>
        <Header />
        <main className={classes.main}>
          <SideMenu />
          <Canvas />
        </main>
      </PathContextProvider>
    </>
  );
};

export default App;
