import React from 'react';
import bannerImg from '../../../assests/banner-img.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner-bg mt-5 p-10 rounded-lg'>
            <div className='banner-bg-overlay'></div>
            <div className="">
                <div className="flex flex-col lg:flex-row-reverse z-10">
                    <img src={bannerImg} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='z-10'>
                        <h1 className="text-5xl font-bold text-white">Welcome To Tanjil Ahmed's Portfolio</h1>
                        <p className="py-6 text-white w-96">Hey mate this is me Tanjil, Nice to see you on my Portfolio. I am a professional Web Developer. I can build your web application using React JS, Node Js, MongoDB, etc. I am an expert in HTML, CSS, Bootstrap, Tailwind, React, React-Router, Node JS, Express JS, and Mongo DB. I can build your 100% dynamic website with optimising user experience. Feel free to work with me. </p>
                        <div className='flex items-center'>
                            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download Resume</button>
                            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;