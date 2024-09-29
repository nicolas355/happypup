import { brands } from "../data/brand"
const Brands = () => {

    console.log(brands)


  return (
    <div>
      

      <h2 className="text-center font-bold leading-3 uppercase">brands

          <div className="flex-wrap md:flex-nowrap flex   justify-between mt-10 mb-10">
            
        {brands.map((brand)=>(
              <div className="  hover:opacity-65 cursor-pointer transition-opacity  duration-700">
              
                <img src={brand.img} alt="" />
              
              </div>


        ))}
          </div>

      </h2>


    </div>
  )
}

export default Brands
