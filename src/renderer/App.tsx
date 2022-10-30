import classes from './App.module.css';

const App = () => {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes.headerList}>
          <li>Go back</li>
          <li>Go forward</li>
        </ul>
        <h2>CDPR Task</h2>
        <ul className={classes.headerList}>
          <li>Minimize</li>
          <li>Maximize</li>
          <li>Close</li>
        </ul>
      </header>
      <main className={classes.main}>
        <aside className={classes.aside}>
          <ul className={classes.asideList}>
            <li>Desktop</li>
            <li>Downloads</li>
            <li>Documents</li>
          </ul>
        </aside>
        <div className={classes.canvas}>

        </div>
      </main>
    </>
  );
};

export default App;
