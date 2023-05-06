import { useState, useEffect } from "react";

const useMedia = <T>(queries: string[], values: T[], defaultValue: T): T => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const mediaQueryLists = queries.map((q) => window.matchMedia(q));

    const getValue = () => {
      const index = mediaQueryLists.findIndex((mql) => mql.matches);
      return values?.[index] || defaultValue;
    };

    const handler = () => setValue(getValue);

    setValue(getValue());

    mediaQueryLists.forEach((mql) => mql.addListener(handler));

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    };
  }, [queries, values, defaultValue]);

  return value;
};

export default useMedia;
