import Tag from "../assets/icons/Tag";
import { blog } from "../data/blog";
import { useFindItemByName } from "../hooks/useItemFindName";
import { categorias } from "../data/categorias";

const BlogIndividual = () => {
  const blogFind = useFindItemByName(blog, "nombre");

  return (
    <div className="grid grid-cols-[1fr_4fr] gap-10">
      <div>
        <h2 className="font-bold text-[21px]">Blog comments</h2>
        <h2 className="font-bold text-[18px] mb-5 mt-20">Blog tags</h2>


        <ul className="grid lg:grid-cols-2 gap-2">
          {categorias.map((categoria) => (
            <li className="flex font-normal items-center gap-2 text-[12px]" key={categoria.nombre}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler w-[15px] h-[15px] max-w-[15px] min-w-[15px] icon-tabler-tag"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
              </svg>
              <a href="">{categoria.nombre}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto w-full mt-16">
        <img
          className="w-full h-[600px] block object-cover object-center"
          src={blogFind.img}
          alt=""
        />
        <h2 className="text-[20px] font-normal my-5">{blogFind.title}</h2>

        <div className="flex gap-4">
          <span className="text-[13px]">{blogFind.fecha}</span>
          <span className="text-[13px]">{blogFind.nombre}</span>
          <span className="text-[13px]"> {blogFind.comentarios} comments</span>
        </div>

        <p className="my-3 text-[15px] leading-loose">{blogFind.descripcion}</p>

        {/* Mapeo de los tags para renderizarlos */}
        <div className="flex flex-wrap gap-2 mt-4">
          {blogFind.tags.map((tag: string, index: number) => (
            <Tag key={index} label={tag} />
          ))}
        </div>

        <div className="mt-5 flex items-center text-white">
          <a
            className="text-[16px] bg-[#22a7f0] py-2 px-5 font-bold uppercase"
            href="#"
          >
            Previus Post
          </a>
        </div>

        <div className="my-5">{blogFind.comentarios} comments</div>
      </div>
    </div>
  );
};

export default BlogIndividual;