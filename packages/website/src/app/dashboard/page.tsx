import { WebAppPage } from "@/components/templates/WebAppPage/WebAppPage";
import { Routes } from "@/data/routes";

const Dashboard = () => {
  return <WebAppPage currentPage={Routes.dashboard} />;
};

export const runtime = 'edge';

export default Dashboard;
