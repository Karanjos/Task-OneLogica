import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center my-5 border-b border-slate-700 shadow-teal-100 shadow-md pb-5 px-20">
        <h1 className="text-3xl font-bold ms-5 text-slate-600">
          Add Your Blog
        </h1>
        <div style={{}}>
          <Link
            to="create-blog"
            style={{
              textDecoration: "none",
              listStyleType: "none",
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              color: "white",
              backgroundColor: "teal",
            }}
          >
            Create Blog
          </Link>
        </div>
      </div>
      <h1 className="text-3xl font-bold ms-5 my-10 text-slate-600">
        Featured Products
      </h1>
      <div className="flex justify-center items-center gap-16 flex-wrap mb-20">
        {blogs &&
          blogs.map((blog) => {
            return <Card key={blog._id} blog={blog} />;
          })}
      </div>
    </div>
  );
};
export default Home;
