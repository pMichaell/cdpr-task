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
    navigate('/home');
  }, []);

  useEffect(() => {
    if (location.pathname !== '/home') {
      changePath(location.pathname);
      return;
    }

    changePath('homedir');
  }, [location]);

  return (
    <PathContext.Provider value={{ currentPath }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathContextProvider;
