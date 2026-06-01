import React from "react";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import Messages from "../Messages/Messages";

type Props<T> = {
  loading: boolean;
  error?: string | null;
  spinnerPosition: "center" | "default";
  data: T[] | null | undefined;
  emptyMessage: string;
  children: (data: T[]) => React.ReactNode;
};

const AsyncStateOperations = <T,>({
  loading,
  error,
  data,
  emptyMessage,
  spinnerPosition,
  children,
}: Props<T>) => {
  if (loading) return <SpinnerLoader spinnerPosition={spinnerPosition} />;

  if (error) {
    return <Messages>{error}</Messages>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <Messages>{emptyMessage}</Messages>;
  }

  return <>{children(data)}</>;
};

export default AsyncStateOperations;
