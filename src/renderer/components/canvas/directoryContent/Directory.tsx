import directory from 'assets/directory.svg';
import classes from './DirectoryContent.module.css';

const Directory = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={classes.directoryItem}>
      <div>
        <img src={directory} alt={`${name} directory`} />
      </div>
      <strong>{name}</strong>
    </button>
  );
};

export default Directory;
