
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {

  return (
    <div>
        <div className=' bg-gray-800 w-full h-20'>
            <div className=' flex justify-between p-8 text-white'>
                <Link><h1 className=' text-2xl font-sans font-bold hover:text-purple-700 duration-200 shadow-lg'>Ananda L.R</h1></Link>
                <ul className=' flex space-x-12 text-xl font-sans lg:flex hidden'>
                   <Link to="home" smooth={true} duration={500} offset={-4000}><li className=' hover:text-purple-700  duration-200 '><button>Home</button></li></Link> 
                    <Link to="technology" smooth={true} duration={500}><li className=' hover:text-purple-700  duration-200'><button>Technology</button></li></Link>
                    <Link to="project" smooth={true} duration={500}><li className=' hover:text-purple-700  duration-200'><button>Project</button></li></Link>
                    <Link to="bussines" smooth={true} duration={500}><li className=' hover:text-purple-700  duration-200'><button>Bussines</button></li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
