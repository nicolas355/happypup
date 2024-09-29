import { blog } from "../data/blog";
import { NavLink } from "react-router-dom";


const Blog = () => {
    return (
        <div className="my-10">
            {blog.map((blogs) => (
                <div className="grid grid-cols-2 items-center " key={blogs.id}>
                    <div>
                        <img className="w-[350px] mx-auto h-[350px] object-center object-cover" src={blogs.img} alt="" />
                    </div>

                    <div className="my-5">
                        <h2 className="font-bold text-[20px]">{blogs.title}</h2>
                        <p className="leading-loose">{blogs.descripcion}</p>
                        <p className="uppercase font-bold text-black">
                            {blogs.fecha} <span className="text-[#22a7f0] ml-2 leading-loose">{blogs.comentarios} <span className="uppercase">comments</span></span>
                        </p>

                        <div className="block my-5">
                            <NavLink to={`/blog/${blogs.nombre}`}>
                                <span className="bg-[#22a7f0] font-bold text-white py-2 px-6 text-[20px]">READ MORE</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blog;