import classes from './DirectoryContent.module.css';
import file from 'assets/file.svg';

const File = ({
  name,
  onDoubleClick,
}: {
  name: string;
  onDoubleClick: () => void;
}) => {
  return (
    <button onDoubleClick={onDoubleClick} className={classes.directoryItem}>
      <div>
        <img src={file} alt={`${name} directory`} />
      </div>
      <strong>{name}</strong>
    </button>
  );
};

export default File;
