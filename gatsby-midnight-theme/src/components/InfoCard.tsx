import React, { CSSProperties } from "react";

import { DEFAULT_THEME } from "../constants";
import { ThemeValue } from "../types";

import { StyleModules } from "../style-modules";
import { capitalize } from "../utils";

const styles = StyleModules.infoCard;

interface InfoCardProps {
  theme?: ThemeValue;
  children: React.ReactNode;
  variant?: "default" | "colorful";
}

export const InfoCard = ({
  children,
  theme = DEFAULT_THEME,
  variant = "default",
}: InfoCardProps) => {
  const className = `${variant}${capitalize(theme)}`;

  return <div className={styles[className]}>{children}</div>;
};
