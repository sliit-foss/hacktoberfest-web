import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
    </Layout>
  );
};

export default HomePage;
