import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const blogId = useLocation().pathname.split("/")[2];

  console.log(blogId);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog/${blogId}`).then((res) => {
      setBlogs(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs`).then((res) => {
      setRelatedBlogs(res.data);
    });
  }, []);

  return (
    <div className="my-20 mx-auto max-w-7xl">
      <div className="">
        <h1 className="text-slate-700 fint-bold flex justify-start ms-5 text-4xl">
          {blogs.title}
        </h1>
      </div>
      <div className="">
        <p className="text-slate-500 ms-5 text-lg">{blogs.introduction}</p>
        <p className="">{Blog.createdAt}</p>
      </div>

      <div className="">
        <p className="text-slate-500 ms-5 my-10 text-lg">{blogs.content}</p>

        <p className="text-slate-500 ms-5 my-10 text-lg">
          {blogs.bulletPoints}
        </p>

        <p className="text-slate-500 ms-5 my-10 text-lg">
          {blogs.refrenceLinks}
        </p>
      </div>

      <div className="my-10">
        <h1 className="text-slate-700 font-bold flex justify-start ms-5 my-4 text-xl">
          COMMENTS
        </h1>
        <div className="">
          <div className="">
            <div className="px-4">
              <h1 className="text-slate-500 fint-bold flex justify-start ms-5 text-sm">
                @User Name
              </h1>
              <p className="text-slate-500 ms-5 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, doloribus, quae, voluptate eaque quidem quos quas
                repudiandae autem accusamus dolorum. Quisquam, doloremque
                voluptatem. Quisquam, doloremque voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-slate-700 font-bold flex justify-start ms-5 my-4 text-4xl">
          RELATED BLOGS
        </h1>
        <div className="flex flex-wrap gap-8">
          {relatedBlogs
            .filter((blog) => blog._id !== blogId)
            .map((blog) => {
              return <Card key={blog._id} blog={blog} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Blog;
