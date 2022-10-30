import classes from './App.module.css';

const App = () => {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes.list}>
          <li>Go back</li>
          <li>Go forward</li>
        </ul>
        <ul className={classes.list}>
          <li>Minimize</li>
          <li>Maximize</li>
          <li>Close</li>
        </ul>
      </header>
      <main>
        <aside></aside>
      </main>
    </>
  );
};

export default App;
