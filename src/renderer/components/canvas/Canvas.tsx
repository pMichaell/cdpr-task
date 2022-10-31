import classes from './Canvas.module.css';
import { useContext } from 'react';
import useIpc from '../../hooks/useIpc';
import { PathContext } from '../../context/PathContext';
import { useNavigate } from 'react-router-dom';
import File from './directoryContent/File';
import Directory from './directoryContent/Directory';
import useDirContents from '../../hooks/useDirContents';

const Canvas = () => {
  const { currentPath } = useContext(PathContext);
  const dirContents = useDirContents(currentPath ?? 'homedir');
  const [, openFile] = useIpc('file-handle');
  const navigate = useNavigate();

  const onDirectoryClick = (directoryName: string) => {
    if (currentPath) {
      navigate(currentPath?.concat('/', directoryName));
    }
  };

  const onFileClick = (fileName: string) => {
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
