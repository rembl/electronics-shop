import Slider from "../components/Slider";
import Products from "./Products"; // здесь будут все товары

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
