export const isDarkModeEnabled = (): boolean => {
  if (
    typeof window !== "undefined" &&
    typeof window.matchMedia !== "undefined"
  ) {
    const mediaQueryString = "(prefers-color-scheme: dark)";

    return window.matchMedia(mediaQueryString).matches;
  }

  return false;
};
