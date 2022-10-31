import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <ul className={classes.headerList}>
        <li>
          <button onClick={() => navigate(-1)}>Go back</button>
        </li>
        <li>
          <button onClick={() => navigate(1)}>Go forward</button>
        </li>
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
