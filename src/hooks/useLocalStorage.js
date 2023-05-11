import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setValue(parse(item));
  }, [key]);

  useEffect(() => {
    if (value !== initialState) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [initialState, key, value]);

  return [value, setValue];
};

const parse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
