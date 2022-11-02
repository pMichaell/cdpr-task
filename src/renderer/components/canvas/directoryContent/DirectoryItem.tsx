import directory from 'assets/directory.svg';
import file from 'assets/file.svg';
import type { DirectoryItemType } from '../../../../types';
import classes from './DirectoryItem.module.css';

const DirectoryItem = ({
  name,
  type,
  onDoubleClick,
}: DirectoryItemType & { onDoubleClick: () => void }) => {
  return (
    <button className={classes.directoryItem} onDoubleClick={onDoubleClick}>
      <div className={classes.imgContainer}>
        <img
          src={type === 'file' ? file : directory}
          alt={`${name}+${type}`}
          className={classes.img}
        />
      </div>
      <strong className={classes.name}>{name}</strong>
    </button>
  );
};

export default DirectoryItem;
