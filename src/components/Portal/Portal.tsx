import React from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  containerId: string;
};

const Portal: React.FC<Props> = ({ children, containerId }) => {
  const container = document.getElementById(containerId);
  if (!container) return null;
  return createPortal(children, container);
};
export default Portal;
