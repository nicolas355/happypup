import AboutLike from "../assets/icons/AboutLike";
import AboutSearch from "../assets/icons/AboutSearch";
import AboutTruck from "../assets/icons/AboutTruck";

const About = () => {
  return (
    <div>
      <h2 className="font-bold text-center uppercase text-[20px] my-10 ">About Us </h2>

      <h3 className="font-normal my-3 text-2xl">Catering to your requirements, handling your needs with care</h3>

      <p className="tracking-wider">
        Our store is more than just another average online retailer. We sell not
        only top quality products, but give our customers a positive online
        shopping experience. Forget about struggling to do everything at once:
        taking care of the family, running your business, walking your dog,
        cleaning the house, doing the shopping, etc. Purchase the goods you need
        every day or just like in a few clicks or taps, depending on the device
        you use to access the Internet. We work to make your life more
        enjoyable.
      </p>

      <h3 className="font-normal mt-5 mb-5 text-2xl">Store events</h3>

      <div className="grid grid-cols-3 gap-8">
        <div>
        <div className="flex gap-8 justify-center">
            <AboutSearch />
          </div>
          <h3 className="text-center font-normal text-[21px] my-2 ">
            Icon block with text{" "}
          </h3>
          <p className="tracking-wider text-[15px] ">
            We think about the convenience of your choice. Our products are
            supplied with star rating that should help hesitant buyers to take a
            decision. What’s more, you can search our site if you know exactly
            what you are looking for or use a bunch of different filters that
            will considerably save your time and efforts.
          </p>
        </div>

        <div className="">
          <div className="flex justify-center">
            <AboutTruck />
          </div>
          <h3 className="text-center font-normal text-[21px] my-2">Delivery to all regions</h3>
          <p className="tracking-wider text-[15px]">
            We deliver our goods worldwide. No matter where you live, your order
            will be shipped in time and delivered right to your door or to any
            other location you have stated. The packages are handled with utmost
            care, so the ordered products will be handed to you safe and sound,
            just like you expect them to be.
          </p>
        </div>

        <div>
        <div className="flex justify-center">
            <AboutLike />
          </div>
          <h3 className="text-center font-normal text-[21px] my-2">The highest quality of products</h3>
          <p className="text-[15px] tracking-wider">
            We guarantee the highest quality of the products we sell. Several
            decades of successful operation and millions of happy customers let
            us feel certain about that. Besides, all items we sell pass thorough
            quality control, so no characteristics mismatch can escape the eye
            of our professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
