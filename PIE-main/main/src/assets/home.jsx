import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import  {  Typewriter }  from  'react-simple-typewriter'
function home (){
   
   return (
     <>
       <div className="h-screen w-screen bg-slate-100 px-28">
         <div className="flex">
           <div className=" flex flex-col gap-9 py-72 px-60">
             <h1 className="font-bold text-6xl font-serif ">
               Boas vindos ao <span className="">GALLERY</span>
             </h1>
             <p className="text-slate-800 text-xl font-serif">
               <Typewriter
                 words={[
                   "Adicione, veja e reveja seus preciosos momentos registrados aqui,enriquecendo sua vida com lembranças que ganham valor a cada revisitada.",
                 ]}
                 typeSpeed={80}
               />
             </p>
             <div className="flex flex-col bg-slate-300 hover:bg-slate-500 w-36 py-2 hover:font-bold text-center ">
               <Link to="/get">
                 <motion.button
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                 >
                   Minhas Fotos
                 </motion.button>
               </Link>
             </div>
           </div>
           <div className="flex flex-col  my-28 gap-10 px-28">
             <motion.div
               animate={{ x: -28 }}
               
               className="pr-7 w-96"
             >
               <img src={Img1} alt="img1" />
             </motion.div>
             <motion.div animate={{ x: 28 }} className="pl-7 w-96">
               <img src={Img2} alt="img2" />
             </motion.div>
             <motion.div animate={{ x: -28 }} className="pr-7 w-96">
               <img src={Img3} alt="img3" />{" "}
             </motion.div>
           </div>
         </div>
       </div>
     </>
   );
}
export default home

//h-screen w-screen bg-slate-100 font-serif flex
//<h1 className="font-bold text-6xl px-20 ">Boas vindas ao <span className="">GALLERY</span></h1>
// <p className='text-slate-800'>Adicione, veja e reveja seus preciosos momentos registrados aqui,<br /> enriquecendo sua vida com lembranças que ganham valor a cada revisitada.</p>
{
  /* Adicione, veja e reveja seus preciosos momentos registrados aqui,
               <br /> enriquecendo sua vida com lembranças que ganham valor a
               cada revisitada. */
}