import { FC, ReactNode } from "react";
import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
