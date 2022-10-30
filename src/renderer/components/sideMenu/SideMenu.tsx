import classes from './SideMenu.module.css';

const SideMenu = () => {
  return (
    <aside className={classes.aside}>
      <ul className={classes.asideList}>
        <li>Desktop</li>
        <li>Downloads</li>
        <li>Documents</li>
      </ul>
    </aside>
  );
};

export default SideMenu;
