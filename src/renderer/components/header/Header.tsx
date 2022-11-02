import { useNavigate } from 'react-router-dom';
import type { FrameEvent } from '../../../main/main';
import useIpc from '../../hooks/useIpc';
import classes from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [, sendFrameEvent] = useIpc('frame-events');

  const onClick = (event: FrameEvent) => {
    sendFrameEvent(event);
  };

  return (
    <header className={classes.header}>
      <ul className={classes.headerList}>
        <li>
          <button onClick={() => navigate(-1)} className={classes.headerButton}>
            Go back
          </button>
        </li>
        <li>
          <button onClick={() => navigate(1)} className={classes.headerButton}>
            Go forward
          </button>
        </li>
      </ul>
      <h2>CDPR Task</h2>
      <ul className={classes.headerList}>
        <li>
          <button
            onClick={() => onClick('minimize')}
            className={classes.headerButton}
          >
            Minimize
          </button>
        </li>
        <li>
          <button
            onClick={() => onClick('maximize')}
            className={classes.headerButton}
          >
            Maximize
          </button>
        </li>
        <li>
          <button
            onClick={() => onClick('close')}
            className={classes.headerButton}
          >
            Close
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
