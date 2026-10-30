/*
 * File: app/page.tsx
 * Author: Pinhung Chiang
 * Date: October 30, 2026
 * This file displays the application's single page.
 * It receives no props and does not keep its own state.
 * StudentPortal handles the student list and all interactive sections.
 * The shared layout supplies the navigation and footer around this page.
 * It returns the portal in place of the original Next.js starter content.
 */

import StudentPortal from "@/components/StudentPortal";

// Display the student portal at the root route.
const Home = () => {
  return <StudentPortal />;
};

export default Home;
