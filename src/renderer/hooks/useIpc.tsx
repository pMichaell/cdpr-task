import { useCallback, useEffect, useState } from 'react';
import type { Channels } from '../../main/preload';

const useIpc = <T,>(
  channelName: Channels
): [
  response: T | undefined,
  sendMessage: (args: string[] | string) => void
] => {
  const { sendMessage: send, on } = window.api;
  const [response, setResponse] = useState<T | undefined>();

  const sendMessage = useCallback((args: string[] | string) => {
    if (typeof args === 'string') {
      send(channelName, [args]);
      return;
    }

    send(channelName, args);
  }, []);

  useEffect(() => {
    const unsubscribe = on<T>(channelName, (args) => {
      setResponse(args);
    });

    return () => {
      unsubscribe?.();
    };
  }, []);

  return [response, sendMessage];
};

export default useIpc;
