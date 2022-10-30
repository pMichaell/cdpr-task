import classes from './Canvas.module.css';
import { useEffect } from 'react';
import useIpc from '../../hooks/useIpc';
import type { DirectoryItemType } from '../../../globals';
import DirectoryItem from './directoryItem/DirectoryItem';

const Canvas = () => {
  const [getCurrentPath, currentPath] = useIpc<string>('paths');
  const [getDirContents, dirContents] =
    useIpc<DirectoryItemType[]>('path-contents');

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
        <DirectoryItem name={el.name} type={el.type} />
      ))}
    </div>
  );
};

export default Canvas;
