export default function getExecutable(options: {
  name: string;
  version: string;
  cwd?: string;
  env?: Record<string, string | undefined>;
  onProgress: (percentage: number) => void;
}): Promise<string>;
