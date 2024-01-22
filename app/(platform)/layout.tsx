import { FC, ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};
export default PlatformLayout;
