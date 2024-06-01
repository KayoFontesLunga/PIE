import { useState } from "react";
import File from "./file";
import axios from "axios";
import { Link } from "react-router-dom";
function form() {
  const [nome, setnome] = useState();
  const [img, setImg] = useState();
  const [contador, setContador] = useState(0);
  const converter64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  /* const handleinput = (e) => {
    setPost({...post, [e.target.name]: e.target.value})
    
    /* setSobre({...sobre, [e.target.name]: e.target.value}) }*/

  const post = {
    nome: nome,
    img: img,
  };
  const options = {
    method: "POST",
    url: "http://localhost:3000/post",
    headers: { "Content-Type": "application/json" },
    data: post,
  };
  function prevent(e) {
    e.preventDefault();
    console.log(post);
    axios
      .request(options)
      .then((resp) => {
        console.log(resp);
        location.href = "/get";
      })

      .catch((err) => console.log(err));
  }

  const inputComContador = (e) => {
    setnome(e.target.value);
    setContador(nome.length);
  };

  return (
    <>
      <div className="h-screen w-screen bg-slate-100">
        <form
          onSubmit={prevent}
          className="flex flex-col py-10 place-items-center"
        >
          <div>
            <File handleChange={(e) => converter64(e)} name="img" />
          </div>
          <div className="flex flex-col gap-3 w-96 ">
            <label className="text-center font-semibold ">
              Adcione Um Nome A Sua Foto:
            </label>
            <input
              type="text"
              onChange={(e) => inputComContador(e)}
              className="border border-slate-700 bg-slate-300 px-2 py-3 rounded-md"
              maxLength="21"
              name="nome"
            />
          </div>
          <div className="pl-72">
            <p>{contador}/20</p>
          </div>
          <div className="flex flex-col bg-slate-300 hover:bg-slate-500 w-36 py-2 hover:font-bold text-center">
            <input type="submit" value="postar" />
          </div>
        </form>
      </div>
    </>
  );
}
export default form;
// onChange={(e) => setNome(e.target.value)}
// onChange={(e) => setSobre(e.target.value)}
// handleChange={(e) => converter64(e)} name="img"
