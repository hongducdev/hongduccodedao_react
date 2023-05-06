import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";

function useDarkMode(): [boolean, (value: boolean) => void] {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "dark-mode-enabled",
    false
  );
  const prefersDarkMode = usePrefersDarkMode();
  const enabled = enabledState ?? prefersDarkMode;
  useEffect(() => {
    const className = "dark";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);
  return [enabled, setEnabledState];
}

function usePrefersDarkMode(): boolean {
  return useMedia<boolean>(["(prefers-color-scheme: dark)"], [true], false);
}

export default useDarkMode;