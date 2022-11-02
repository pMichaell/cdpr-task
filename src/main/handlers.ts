import { readdir, stat } from 'node:fs/promises';
import path from 'path';
import type { DirectoryItemType } from '../types';

const getFileInfo = async (
  receivedPath: string,
  fileName: string
): Promise<DirectoryItemType> => {
  const stats = await stat(path.join(receivedPath, fileName));
  return { name: fileName, type: stats.isFile() ? 'file' : 'dir' };
};

export const retrieveDirectoryContents = async (receivedPath: string) => {
  let contents: DirectoryItemType[] = [];

  try {
    const files = await readdir(receivedPath);

    const promises: Array<Promise<DirectoryItemType>> = [];

    for (const fileName of files) {
      promises.push(getFileInfo(receivedPath, fileName));
    }

    contents = await Promise.all(promises);
  } catch (err) {
    console.error(err);
  }

  return contents;
};
