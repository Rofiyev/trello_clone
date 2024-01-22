import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationId = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      <OrganizationSwitcher hidePersonal />
    </div>
  );
};

export default OrganizationId;
