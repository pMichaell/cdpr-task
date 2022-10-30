import type { Channels } from './main/preload';

declare global {
  interface Window {
    api: {
      sendMessage(channel: Channels, args: string[]): void;
      on<T>(
        channel: Channels,
        func: (...args: T[]) => void
      ): (() => void) | undefined;
      once(channel: Channels, func: (...args: string[]) => void): void;
    };
  }
}

export type DirContent = { name: string; type: 'dir' | 'file' };
