export const makeApiURL = (path: string) => {
  const baseURL = import.meta.env?.VITE_API_URL as string;
  return `${baseURL}${path}`;
}