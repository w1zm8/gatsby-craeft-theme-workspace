import React from "react";
import { useTheme, useUtterancesComments } from "../core";

export const Comments = () => {
  const { theme } = useTheme();
  const options = {
    repo: process.env.UTTERANCES_REPO || "",
    "issue-term": process.env.UTTERANCES_ISSUE_TERM || "",
    label: process.env.UTTERANCES_LABEL || "",
    id: process.env.UTTERANCES_ID || "",
  };
  const { commentBlockRef } = useUtterancesComments({
    options: {
      theme,
      ...options,
    },
  });

  return (
    <>
      <h3 className="monospace text-center bold">Comments 💬</h3>
      <div ref={commentBlockRef} />
    </>
  );
};
