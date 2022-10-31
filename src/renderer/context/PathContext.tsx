import type { ReactNode } from 'react';
import { createContext, useEffect } from 'react';
import useIpc from '../hooks/useIpc';
import { useLocation, useNavigate } from 'react-router-dom';

type PathContextType = {
  currentPath?: string;
};

export const PathContext = createContext<PathContextType>({
  currentPath: '',
});

const PathContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentPath, changePath] = useIpc<string>('paths');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set Path to homedir on startup
    navigate('Home');
  }, []);

  useEffect(() => {
    if (location.pathname !== '/Home') {
      changePath(location.pathname);
      return;
    }

    changePath('Home');
  }, [location]);

  // TODO fix this below

  return (
    <PathContext.Provider value={{ currentPath }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathContextProvider;
