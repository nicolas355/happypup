import Banners from "../components/Banners";
import Brands from "../components/Brands";
import SectionCategories from "../components/SectionCategories";

import LatestBlog from "../components/LatestBlog";
import Newlleters from "../components/Newlleters";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";


const Home = () => {




 


console.log(name)
  return (
    <>
      <div>
    

        <div className="container content">
          <Slider />

          <section className="mt-7">
            <SectionCategories />
          </section>

          <main className="mt-7">
            <ProductList />
          </main>

          <section className="banner">
            <Banners />
          </section>

          <section>
            <Brands />
          </section>

          <section>
            <LatestBlog />
          </section>

          <section>
            <Newlleters />
          </section>

         
        </div>
      </div>



      
    </>
  );
};

export default Home;
