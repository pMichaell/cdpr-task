import classes from './Canvas.module.css';
import { useEffect } from 'react';
import useIpc from '../../hooks/useIpc';

const Canvas = () => {
  const [getCurrentPath, currentPath] = useIpc('paths');
  const [getDirContents, dirContents] = useIpc('path-contents');

  useEffect(() => {
    getCurrentPath([]);
  }, []);

  useEffect(() => {
    getDirContents([currentPath]);
  }, [currentPath]);

  useEffect(() => {
    console.log(dirContents);
  }, [dirContents]);

  return <div className={classes.canvas}></div>;
};

export default Canvas;
