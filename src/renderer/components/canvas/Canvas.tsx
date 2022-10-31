import classes from './Canvas.module.css';
import { useContext, useEffect } from 'react';
import useIpc from '../../hooks/useIpc';
import type { DirectoryItemType } from '../../../globals';
import DirectoryItem from './directoryItem/DirectoryItem';
import { PathContext } from '../../context/PathContext';

const Canvas = () => {
  const { currentPath } = useContext(PathContext);
  const [dirContents, getDirContents] =
    useIpc<DirectoryItemType[]>('path-contents');

  useEffect(() => {
    if (currentPath) {
      getDirContents(currentPath);
    }
  }, [currentPath]);

  useEffect(() => {
    // Console.log(dirContents);
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
