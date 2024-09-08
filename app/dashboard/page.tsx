import React from "react";
import Layout from "../layout";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MiddleSection } from "@/components/MiddleSection";

const Dashboard = () => (
  <Layout>
    <Header />
    <Sidebar />
    <MiddleSection />
    <Footer />
  </Layout>
);

export default Dashboard;
