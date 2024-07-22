import { redirect } from 'next/navigation';

export const redirectedTo = async (path: string) => {
  await redirect(path);
};
