import useIpc from './useIpc';
import { useEffect } from 'react';
import type { DirectoryItemType } from '../../globals';

const useDirContents = (currentPath: string) => {
  const [dirContents, getDirContents] =
    useIpc<DirectoryItemType[]>('directory-contents');

  useEffect(() => {
    if (currentPath) {
      getDirContents(currentPath);
    }
  }, [currentPath]);

  useEffect(() => {
    const interval = setInterval(() => {
      getDirContents(currentPath);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPath]);

  return dirContents;
};

export default useDirContents;
