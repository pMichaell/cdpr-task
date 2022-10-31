import classes from './Canvas.module.css';
import { useContext, useEffect } from 'react';
import useIpc from '../../hooks/useIpc';
import type { DirectoryItemType } from '../../../globals';
import { PathContext } from '../../context/PathContext';
import { useNavigate } from 'react-router-dom';
import File from './directoryContent/File';
import Directory from './directoryContent/Directory';

const Canvas = () => {
  const { currentPath } = useContext(PathContext);
  const [dirContents, getDirContents] =
    useIpc<DirectoryItemType[]>('path-contents');
  const [, openFile] = useIpc('file-handle');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath) {
      getDirContents(currentPath);
    }
  }, [currentPath]);

  const onDirectoryClick = (directoryName: string) => {
    if (currentPath) {
      navigate(currentPath?.concat('/', directoryName));
    }
  };

  const onFileClick = (fileName: string) => {
    console.log(fileName);
    const pathToFile = currentPath?.concat('/', fileName);
    if (pathToFile) {
      openFile(pathToFile);
    }
  };

  return (
    <div className={classes.canvas}>
      {dirContents?.map((el) => {
        if (el.type === 'file') {
          return (
            <File
              key={el.name}
              name={el.name}
              onDoubleClick={() => onFileClick(el.name)}
            />
          );
        }

        return (
          <Directory
            key={el.name}
            name={el.name}
            onClick={() => onDirectoryClick(el.name)}
          />
        );
      })}
    </div>
  );
};

export default Canvas;
