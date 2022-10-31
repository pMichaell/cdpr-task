import classes from './App.module.css';
import Canvas from './components/canvas/Canvas';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';
import PathContextProvider from './context/PathContext';

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
