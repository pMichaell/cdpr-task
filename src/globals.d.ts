import { Channels } from './main/preload';

declare global {
  interface Window {
    api: {
      sendMessage(channel: Channels, args: string[]): void;
      on(
        channel: Channels,
        func: (...args: string[]) => void
      ): (() => void) | undefined;
      once(channel: Channels, func: (...args: string[]) => void): void;
    };
  }
}

export {};
