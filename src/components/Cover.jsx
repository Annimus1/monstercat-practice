import { useState, useEffect } from "react"
import data from "../assets/Playlist";

function Cover() {

  const imgUrl = 'https://th.bing.com/th/id/R.8863a420e0de711cf4d2286b14ca70a0?rik=CLF5QdUigGbwfg&riu=http%3a%2f%2fimg2-ak.lst.fm%2fi%2fu%2far0%2fecae82853b784726c7e2c4e2ba55a4fd&ehk=OtDvAyDAYkqsGWv5xFhZAPrPjdfUz4S5KOB8TGxcOr4%3d&risl=&pid=ImgRaw&r=0'
  const [playing, setPlaying] = useState(false);
  const choice = () => (Math.floor(Math.random() * data[0].songs.length));
  const [audio] = useState(new Audio(data[0].songs[choice()].source));

  function handleClick() {
    if (playing && audio) {
      // play the first song 
      audio.pause();
      setPlaying(!playing);
    } else {
      setPlaying(!playing);
      audio.play();
    }
  }

  useEffect(()=>{
    audio.addEventListener('ended', ()=>{
      setPlaying(false);
    })
  },[])

  return (
    <section className='text-white h-full w-full px-8 mt-32 pb-2 md:grid md:grid-cols-2 bg-gradient-to-b from-transparent to-black'>

      <div className="w-full h-auto">
        <img
          src={imgUrl} loading="lazy" alt="Album cover"
          className="w-full h-auto max-w-[460px] md:w-[400px] mx-auto"
        />

        <div className="md:absolute lg:-rotate-90 lg:-translate-x-10 lg:-translate-y-36 transition-all">
          <span className="text-lg font-semibold italic text-green-500 pr-2">Instinct</span>
          <span className="text-2xl pr-2">-</span>
          <span className="italic font-thin">Released Feb 20, 2021</span>
        </div>
      </div>

      <div className="md:flex md:flex-col md:h-auto md:mx-auto md:justify-center lg:mx-0">

        <div className=" md:pb-20">
          <h1 className="font-[Raleway] text-4xl lg:text-6xl md:text-4xl font-semibold mt-5 mb-2">Night Visionas</h1>
          <span className="font-[Raleway] text-xl font-medium text-green-500">Imagine Dragons</span>
        </div>

        <div className=" mt-6 pb-6 flex flex-col md:block gap-4">
          <button className=" font-[Raleway] whitespace-nowrap font-semibold px-4 py-3 border border-green-500 bg-green-500"
            onClick={() => { handleClick() }}>
            {playing ? <svg className="inline fill-white mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z" /></svg> :
              <svg className="inline fill-white mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /><path d="m9 17 8-5-8-5z" /></svg>
            }
            <span>PLAY A RANDOM SONG </span>
          </button>

          <a href="#" className=" font-[Raleway] whitespace-nowrap font-semibold px-4 py-3 border w-32 md:ml-5">
            <svg className="inline fill-white mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z" /></svg>
            <span>SHARE</span></a>
        </div>

      </div>

    </section>
  )
}

export default Cover
