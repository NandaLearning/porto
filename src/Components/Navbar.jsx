
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <div className=' bg-gray-800 w-full h-20'>
            <div className=' flex justify-between p-8 text-white'>
                <Link><h1 className=' text-2xl font-sans font-bold hover:text-purple-700 duration-200 shadow-lg'>Ananda L.R</h1></Link>
                <ul className=' flex space-x-12 text-xl font-sans lg:flex hidden'>
                   <Link><li className=' hover:text-purple-700  duration-200 '>Home</li></Link> 
                    <Link><li className=' hover:text-purple-700  duration-200'>Technology</li></Link>
                    <Link><li className=' hover:text-purple-700  duration-200'>Project</li></Link>
                    <Link><li className=' hover:text-purple-700  duration-200'>Bussines</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
