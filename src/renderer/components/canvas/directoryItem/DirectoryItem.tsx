import classes from './DirectoryItem.module.css';
import type { DirectoryItemType } from '../../../../globals';
import file from 'assets/file.svg';
import directory from 'assets/directory.svg';

const DirectoryItem = ({ name, type }: DirectoryItemType) => {
  return (
    <button className={classes.directoryItem}>
      <div>
        <img src={type === 'file' ? file : directory} alt="directory item" />
      </div>
      <strong>{name}</strong>
    </button>
  );
};

export default DirectoryItem;
