import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/post",
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setPost(data);
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen w-screen bg-slate-300">
        {post.length === 0 ? (
          <div className="flex flex-col place-items-center py-60 gap-5">
            <h1 className="text-xl font-serif font-bold">
              Você Ainda Não Fez Nenhuma Postagem
            </h1>
            <div className="flex flex-col bg-slate-300 hover:bg-slate-500 w-36 py-2 hover:font-bold text-center">
              <Link to="/post">
                <button>Faça posts aqui</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap px-16 gap-5  ">
            {post.length > 0 &&
              post.map((posts) => (
                <div className=" mt-10 flex-wrap bg-white px-4 pb-14 py-3  text-black  text-center">
                  <img src={posts.img} alt="img" className="h-60 w-80" />
                  <h1 className="">{posts.nome}</h1>
                  
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
export default post;