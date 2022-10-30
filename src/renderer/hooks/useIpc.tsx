import { useEffect, useState } from 'react';
import type { Channels } from '../../main/preload';

const useIpc = <T,>(
  channelName: Channels
): [
  sendMessage: (args: string[] | string) => void,
  response: T | undefined
] => {
  const { sendMessage: send, on } = window.api;
  const [response, setResponse] = useState<T | undefined>();

  const sendMessage = (args: string[] | string) => {
    if (typeof args === 'string') {
      send(channelName, [args]);
      return;
    }

    send(channelName, args);
  };

  useEffect(() => {
    const unsubscribe = on<T>(channelName, (args) => {
      setResponse(args);
    });

    return () => {
      unsubscribe?.();
    };
  }, []);

  return [sendMessage, response];
};

export default useIpc;
