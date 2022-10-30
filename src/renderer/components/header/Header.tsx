import classes from './Header.module.css';

const Header = () => {
  return (
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
  );
};

export default Header;
