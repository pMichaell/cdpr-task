import classes from './Canvas.module.css';
import { useEffect } from 'react';
import useIpc from '../../hooks/useIpc';
import type { DirContent } from '../../../globals';

const Canvas = () => {
  const [getCurrentPath, currentPath] = useIpc<string>('paths');
  const [getDirContents, dirContents] = useIpc<DirContent[]>('path-contents');

  useEffect(() => {
    getCurrentPath([]);
  }, []);

  useEffect(() => {
    if (currentPath) {
      getDirContents(currentPath);
    }
  }, [currentPath]);

  useEffect(() => {
    console.log(dirContents);
  }, [dirContents]);

  return (
    <div className={classes.canvas}>
      {dirContents?.map((el) => (
        <p key={el.type + el.name}>
          <small>{el.type}</small> {el.name}
        </p>
      ))}
    </div>
  );
};

export default Canvas;
