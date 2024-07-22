import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
  </svg>
);

function App() {
  const [copied, setCopied] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText('updating...');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }} // Prevent the video from capturing pointer events
      >
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
      </video>
      <button 
        onClick={toggleMute}
        className="absolute top-5 left-5 bg-white p-2 rounded-full z-10"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        )}
      </button>
      <div className="absolute top-5 right-5 md:top-7 md:right-7 flex flex-col items-center z-10">
        <div className="flex flex-row">
          <a href="https://x.com/" className="p-1 md:p-2">
            <img src={Xlogo} alt="Xlogo" className="w-10 h-10 md:w-12 md:h-12 rounded-md" />
          </a>
          <a href="https://t.me/" className="p-1 md:p-2">
            <img src={TG} alt="Tg logo" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>
      </div>
      <img className="absolute bottom-[25%] md:bottom-[15%] w-[100%] md:w-[70%] md:hover:scale-105 transition ease-in-out duration-150 z-10" src="libhd.png" alt="libhd"/>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[60%] md:w-[30%] -mt-[10%]">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            src="dog.png"
            alt="Tunes"
            className="-mt-[7.5%] h-auto border-4 w-full border-blue-700 rounded-md"
          />
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row justify-center bg-slate-100 rounded-xl md:rounded-full z-10 items-center gap-1 md:gap-3 px-5 py-3 max-w-full border-2 border-blue-700">
          <button
            onClick={handleCopy}
            className="text-sm bg-blue-700 md:hover:bg-vlue-500 transition duration-150 ease-in-out text-white py-2 px-4 rounded-full border-2 border-blue-700 z-10 whitespace-nowrap"
          >
            {copied ? 'Copied!' : <CopyIcon />}
          </button>
          <div className="text-xs md:text-xl overflow-x-auto whitespace-nowrap font-custom">
            updating...
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;