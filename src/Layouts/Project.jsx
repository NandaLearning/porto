const Project = () => {

  return (
    <div className=' mt-40 p-4 mx-10' id="project">
        <div className='grid md:flex'>
            <h1 className=' text-white text-4xl md:text-6xl font-bold font-sans'>Project that i<br></br> has been <a className=' text-purple-700'>done</a></h1>
            <img src='scribble.png' className=' w-32'></img>
        </div>

        <div className=' p-10 grid lg:flex justify-between space-x-5 md:space-y-0 space-y-12'>
            <img src='myquran.PNG' className=' rounded-lg shadow-purple-700 shadow-xl w-[600px]  md:w-[500px]'></img>
            <div className=' text-white '>
            <p className=' text-lg'>Web Developer</p>
            <h1 className=' text-2xl md:text-4xl font-bold'>myQuran Project & PWA</h1>
            <p className=' text-sm md:text-lg mt-5'>smasalsaspaldsjdskdoksdksdlp</p>

            </div>
        </div>
        


    </div>
  )
}

export default Project
