import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function footer (){
    return(
        <>
            <footer className='flex-col text-center bg-white py-7 gap-4 w-screen '>
                <ul className='inline-flex place-items-center text-white gap-5 '>
                <li className='text-black'>
                <a href="https://www.facebook.com/jenermilhomem.neto/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                </li>
                <li className='text-black'>
                <a href="https://www.instagram.com/jener_milhomem1213/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </li>
                <li className='text-black '>
                <a href="https://www.linkedin.com/in/jener-milhomem-7209872a9/?trk=opento_sprofile_goalscard" target="_blank" rel=""><FaLinkedin /></a>
                </li>
                </ul>
                <p className='text-black'><span className='text-black'>GALLERY</span> &copy;2024</p>
            </footer>
        </>
    )
}
export default footer