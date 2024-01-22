import React, { useState, useEffect } from 'react';
import CardTech from '../Components/cardTech/CardTech';
import axios from 'axios';

const Technology = () => {
  const [data, setData] = useState([]);
  const [cari, setCari] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(term) ||
      item.desk.toLowerCase().includes(term)
    );
    setCari(filteredData);
  };

  return (
    <div className='mx-10 p-4 mt-20'>
      <h1 className=' text-4xl md:text-6xl text-white font-bold'>my <a className=' text-purple-700'>Technology</a> using</h1>
      <div className='mt-8 space-y-6 text-lg font-sans text-white'>
        <p>Search code snippet</p>
        <input
          onChange={handleSearch}
          value={searchTerm}
          className=' hover:shadow-purple-700 shadow-lg duration-200 w-full h-16 rounded-lg bg-gray-700 p-4 text-xl'
          placeholder='Search Technology'
        ></input>

        <div className='flex flex-wrap gap-9 justify-center items-center'>
          {(searchTerm ? cari : data).map((item) => (
            <div key={item.id}>
              <CardTech title={item.title} desk={item.desk} image1={item.image1} image2={item.image2} image3={item.image3} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
