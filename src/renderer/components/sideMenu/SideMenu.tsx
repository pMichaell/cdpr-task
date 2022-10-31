import classes from './SideMenu.module.css';
import { useContext } from 'react';
import { PathContext } from '../../context/PathContext';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const { currentPath } = useContext(PathContext);
  const navigate = useNavigate();

  const onClick = (destination: string) => {
    navigate(destination);
  };

  const isActive = (location: string) => {
    return currentPath?.toLowerCase()?.includes(location.toLowerCase());
  };

  return (
    <aside className={classes.aside}>
      <ul className={classes.asideList}>
        <li>
          <button
            onClick={() => onClick('Desktop')}
            className={clsx(isActive('Desktop') && classes.active)}
          >
            Desktop
          </button>
        </li>
        <li>
          <button
            onClick={() => onClick('Downloads')}
            className={clsx(isActive('Downloads') && classes.active)}
          >
            Downloads
          </button>
        </li>
        <li>
          <button
            onClick={() => onClick('Documents')}
            className={clsx(isActive('Documents') && classes.active)}
          >
            Documents
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
