import { FC, ReactNode } from "react";
import { Navbar } from "./_components/Navbar";

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
