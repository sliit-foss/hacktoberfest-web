import Banner from "../components/Banner";
import Connect from "../components/Connect";
import Introduction from "../components/Introduction";
import Layout from "../components/Layout";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Stats from "../components/Stats";
import WhoCanJoin from "../components/WhoCanJoin";

const HomePage = () => {
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
