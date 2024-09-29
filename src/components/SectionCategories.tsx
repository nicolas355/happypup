
import Collections from "./Collections";
import Categories from "./Categories";

const SectionCategories = () => {

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_4fr] gap-9  ">
      <Categories/>


          <Collections/>
  

    </div>
  );
};

export default SectionCategories;
