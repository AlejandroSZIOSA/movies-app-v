import React from "react";
import styles from "./Messages.module.css";

type Props = {
  children: React.ReactNode;
};

const Messages: React.FC<Props> = ({ children }) => {
  return <div className={styles.messagesRootContainer}>{children}</div>;
};

export default Messages;
