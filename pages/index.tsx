import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import Connect from "../components/Connect";
import Introduction from "../components/Introduction";
import Layout from "../components/Layout";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Stats from "../components/Stats";
import WhoCanJoin from "../components/WhoCanJoin";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1200 });
  }, []);

  return (
    <Layout>
      <Navbar />
      <Banner />
      <Introduction />
      <Stats />
      <WhoCanJoin />
      <Connect />
      <Footer />
    </Layout>
  );
};

export default HomePage;
