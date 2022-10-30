import { useEffect, useState } from 'react';

const useMessage = () => {
  const { sendMessage, on } = window.api;
  const [response, setResponse] = useState('');

  const onButtonClick = () => {
    sendMessage('file-system', ['another test']);
  };

  useEffect(() => {
    const unsubscribe = on('file-system', (args) => {
      setResponse(args);
    });

    return () => {
      unsubscribe?.();
    };
  }, []);
};

export default useMessage;
