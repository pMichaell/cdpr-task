import { useEffect, useState } from 'react';
import type { Channels } from '../../main/preload';

const useIpc = (
  channelName: Channels
): [sendMessage: (args: string[]) => void, response: string] => {
  const { sendMessage: send, on } = window.api;
  const [response, setResponse] = useState('');

  const sendMessage = (args: string[]) => {
    send(channelName, args);
  };

  useEffect(() => {
    const unsubscribe = on(channelName, (args) => {
      setResponse(args);
    });

    return () => {
      unsubscribe?.();
    };
  }, []);

  return [sendMessage, response];
};

export default useIpc;
