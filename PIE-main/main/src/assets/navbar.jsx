/* import { Link } from "react-router-dom"
function navbar (){
    return (
      <>
        <div className="flex px-16 py-6 text-center justify-between justify-around bg-white font-serif">
          <div className="text-black text-2xl px-3 py-3">
            <Link to="/">
              <span className="font-serif font-bold">GALLERY</span>
            </Link>
          </div>
          <div className="flex gap-10 text-black text-2xl">
            <div className="font-serif font-bold hover:text-black px-3 py-3 rounded-sm">
              <Link to="/criadores">Criadores</Link>
            </div>
            <div className="font-serif font-bold hover:text-black px-4 py-3 rounded-sm">
              <Link to="/post">Poste Fotos</Link>
            </div>
            <div className=" font-serif font-bold hover:text-black px-4 py-3 rounded-sm">
              <Link to="/get">
                <span className="font-serif font-bold">Minhas Fotos</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
export default navbar */
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white font-serif">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-6">
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <Link to="/" className="text-black text-2xl font-bold">
            GALLERY
          </Link>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 text-black text-xl">
          <Link
            to="/criadores"
            className="font-bold hover:text-gray-700 px-3 py-2 rounded-sm"
          >
            Criadores
          </Link>
          <Link
            to="/post"
            className="font-bold hover:text-gray-700 px-3 py-2 rounded-sm"
          >
            Poste Fotos
          </Link>
          <Link
            to="/get"
            className="font-bold hover:text-gray-700 px-3 py-2 rounded-sm"
          >
            Minhas Fotos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;