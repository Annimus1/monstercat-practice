import { useState, useEffect } from "react"


function Track({song, artist}) {

  const [ play, setPlay ] = useState(false);
  const [ audio ] = useState(new Audio(song.source));

  const handler = ()=>{
    if(play){
      audio.pause();
    }else{
      console.log(audio)
      audio.play()
    }

    setPlay(!play)
  }

  const playIcon = <svg onClick={handler} className='fill-white h-8 w-auto hover:fill-green-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"/></svg>
  const pauseIcon =<svg onClick={handler} className='fill-white h-8 w-auto hover:fill-green-600' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M8 7h3v10H8zm5 0h3v10h-3z"/></svg>

  useEffect(() => {
    audio.addEventListener('ended', () => setPlay(false));
    return () => {
      audio.removeEventListener('ended', () => setPlay(false));
    };
  }, []);

  return (
    <tr className="w-full min-h-[30px] md:w-full">
      
      {/* ID / number of the song  */}
      <td className="p-4">{song.id}</td>
      
      <td className="p-2">
        {/* if paused => show playIcon */}
        { 
          play? pauseIcon : playIcon
        }
      </td>
      

      {/* Name of the song & artist name */}
      <td className="w-56 md:w-[1000px] lg:text-xl">
        <h2 className="font-[Raleway] font-semibold pl-2">{song.name}</h2>
        <p className="pl-2 text-sm text-green-700">{artist}</p>
      </td>
      
      {/* Song's length  */}
      <td className="p-2">
        <p>{song.length}</p>
      </td>
      
      {/* Share logo */}
      <td className="p-2">
        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"/></svg>
      </td>
    
    </tr>
  )
}

export default Track 