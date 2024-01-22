import { FC, ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const MarketingLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
