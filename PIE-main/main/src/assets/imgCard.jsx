import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function imgcard({ id, img, comentario, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };
  return (
    <>
    
    </>
  );
}
export default imgcard;
