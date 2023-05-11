// import { useEffect, useState } from "react";

// export function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const jsonValue = localStorage.getItem(key);
//     if (jsonValue != null) return JSON.parse(jsonValue);

//     if (typeof initialValue === "function") {
//       return initialValue();
//     } else {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }
import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setValue(parse(item));
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const parse = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
