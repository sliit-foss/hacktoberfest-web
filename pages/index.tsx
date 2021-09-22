import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import Layout from "../components/Layout";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <Introduction />
      <Footer />
    </Layout>
  );
};

export default HomePage;
