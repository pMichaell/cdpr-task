import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import type { DirectoryItemType } from '../../../types';
import { PathContext } from '../../context/PathContext';
import useDirContents from '../../hooks/useDirContents';
import useIpc from '../../hooks/useIpc';
import DirectoryItem from './directoryContent/DirectoryItem';
import classes from './Canvas.module.css';

const Canvas = () => {
  const { currentPath } = useContext(PathContext);
  const dirContents = useDirContents(currentPath ?? 'homedir');
  const [, openFile] = useIpc('file-handle');
  const changeDirectory = useNavigate();

  const onDirectoryClick = (directoryName: string) => {
    if (currentPath) {
      changeDirectory(currentPath?.concat('/', directoryName));
    }
  };

  const onFileClick = (fileName: string) => {
    if (currentPath) {
      openFile([currentPath, fileName]);
    }
  };

  const onItemDoubleClick = (
    itemName: string,
    type: DirectoryItemType['type']
  ) => {
    if (type === 'file') {
      onFileClick(itemName);
    } else {
      onDirectoryClick(itemName);
    }
  };

  return (
    <div className={classes.canvas}>
      {dirContents?.map((item) => (
        <DirectoryItem
          key={`${item.name}+${item.type}`}
          name={item.name}
          type={item.type}
          onDoubleClick={() => onItemDoubleClick(item.name, item.type)}
        />
      ))}
    </div>
  );
};

export default Canvas;
