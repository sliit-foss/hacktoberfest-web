import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import Layout from "../components/Layout";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <Introduction/>
    </Layout>
  );
};

export default HomePage;
