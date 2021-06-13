import React, { FC } from "react";

import { StyleModules } from "../style-modules";

const styles = StyleModules.avatar;

export const Avatar: FC = () => {
  return <img className={styles.avatar} src="/images/avatar.jpg" alt="" />;
};
