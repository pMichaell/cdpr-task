import classes from './DirectoryItem.module.css';
import type { DirectoryItemType } from '../../../../globals';
import file from 'assets/file.svg';
import directory from 'assets/directory.svg';

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
          alt={`${name}${type}`}
          className={classes.img}
        />
      </div>
      <strong className={classes.name}>{name}</strong>
    </button>
  );
};

export default DirectoryItem;
