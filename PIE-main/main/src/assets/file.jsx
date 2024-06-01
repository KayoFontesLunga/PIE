/* import { useState } from "react"; */
import { IoMdImages } from "react-icons/io";

function File({handleChange, name}) {
 /*  const [img, setImg] = useState(); */

 /*  const converter64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };
  const objImgs = {
    imgSelct: img,
  }; */
  

  return (
    <>
      <div className="flex flex-col place-items-center m-28">
        <label htmlFor="input" className="flex flex-col">
          <span className=" bg-slate-300 p-40 rounded-md border  border-slate-700"><IoMdImages/></span>
          <input
            type="file"
            id="input"
            className="hidden"
            onChange={handleChange}
            name={name}
          />
        </label>
      </div>
      <div className="flex justify-center">
         
      </div>
    </>
  );
}
export default File;