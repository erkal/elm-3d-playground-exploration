import type { Readable, Writable } from "stream";

type ReadStream = Readable & {
  isTTY: boolean;
  setRawMode: (mode: boolean) => void;
};

type WriteStream = Writable & {
  isTTY: boolean;
};

export default function elmToolingCli(
  args: Array<string>,
  options?: {
    cwd?: string;
    env?: Record<string, string | undefined>;
    stdin?: ReadStream;
    stdout?: WriteStream;
    stderr?: WriteStream;
  }
): Promise<number>;
