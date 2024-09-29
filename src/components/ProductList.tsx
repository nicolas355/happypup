import { productosPopulares } from "../data/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-center font-bold text-[18px] uppercase mb-4">
        Popular products
      </h2>
      <div className="grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-8">
        {productosPopulares.map((populateProduct) => (
          <ProductCard key={populateProduct.id} product={populateProduct} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;