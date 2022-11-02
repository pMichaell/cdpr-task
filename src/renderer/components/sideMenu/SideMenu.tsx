import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { PathContext } from '../../context/PathContext';
import classes from './SideMenu.module.css';

const SideMenu = () => {
  const { currentPath } = useContext(PathContext);
  const changeDirectory = useNavigate();

  const onClick = (destination: string) => {
    changeDirectory(destination);
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
            className={clsx(
              classes.sideMenuButton,
              isActive('Desktop') && classes.active
            )}
          >
            Desktop
          </button>
        </li>
        <li>
          <button
            onClick={() => onClick('Downloads')}
            className={clsx(
              classes.sideMenuButton,
              isActive('Downloads') && classes.active
            )}
          >
            Downloads
          </button>
        </li>
        <li>
          <button
            onClick={() => onClick('Documents')}
            className={clsx(
              classes.sideMenuButton,
              isActive('Documents') && classes.active
            )}
          >
            Documents
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
