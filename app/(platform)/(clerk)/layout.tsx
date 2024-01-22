import { FC, ReactNode } from "react";

const ClerkLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
