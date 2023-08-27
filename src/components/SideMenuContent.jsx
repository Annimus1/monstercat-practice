import Dropdown from "./Dropdown"

function SideMenuContent() {
  const musicInfo = {
    label:"MUSIC",
    links:[
      {
        text:"OUR MUSIC",
        src:"https://www.monstercat.com/music"
      },
      {
        text:"INSTINCT",
        src:"https://www.monstercat.com/instinct"
      },
      {
        text:"UNCAGED",
        src:"https://www.monstercat.com/uncaged"
      },
      {
        text:"SILK",
        src:"https://www.monstercat.com/silk"
      }
    ]
  }

  const programmingInfo = {
    label:"PROGRAMMING",
    links:[
      {
        text:"MONSTERCAT TV",
        src:"https://www.monstercat.com/monstercat-tv"
      },
      {
        text:"CALL OF THE WILD",
        src:"https://www.monstercat.com/call-of-the-wild"
      },
      {
        text:"SILK SHOWCASE",
        src:"https://www.monstercat.com/silk-showcase"
      },
      {
        text:"UPCOMING SHOWS",
        src:"https://www.monstercat.com/monstercat-tv/upcoming"
      }
    ]
  }


  const eventInfo = {
    label:"EVENTS",
    links:[
      {
        text:"MONSTERCAT EVENTS EXPERIENCE",
        src:"https://www.monstercat.com/events"
      },
      {
        text:"UPCOMING EVENTS",
        src:"https://www.monstercat.com/events/upcoming"
      }
    ]
  }

  const aboutInfo = {
    label:"ABOUT",
    links:[
      {
        text:"ABOUT MONSTERCAT",
        src:"https://www.monstercat.com/about"
      },
      {
        text:"DIVERSITY & INCLUSION",
        src:"https://www.monstercat.com/diversity-and-inclusion"
      },
      {
        text:"CODE OF ETHICS",
        src:"https://www.monstercat.com/code-of-ethics"
      },
      {
        text:"ENVIRONMENTAL",
        src:"https://www.monstercat.com/environmental"
      },
      {
        text:"CONTACT US",
        src:"https://www.monstercat.com/contact-us"
      }
    ]
  }


  return (
    <div className="flex flex-col gap-3 h-[400px] max-h-[400px] overflow-y-scroll mb-5">
        <Dropdown label={musicInfo.label} links={musicInfo.links}/>
        <a className="text-lg font-bold" href="https://www.monstercat.com/artists">ARTIST</a>
        <Dropdown label={aboutInfo.label} links={aboutInfo.links} />
        <a className='text-lg font-bold' href="https://www.monstercat.com/news">NEWS</a>
        <Dropdown label={eventInfo.label} links={eventInfo.links} />
        <Dropdown label={programmingInfo.label} links={programmingInfo.links} />
        <a className='text-lg font-bold' href="https://www.monstercat.com/gold">GOLD</a>
        <a className='text-lg font-bold' href="https://www.monstercat.com/partnerships">PARTNERS</a>
        <a className='text-lg font-bold' href="https://www.monstercat.com/press">PRESS</a>
        <a className='text-lg font-bold' href="https://www.monstercat.com/player">PLAYER</a>
        <a className='text-lg font-bold' href="https://shop.monstercat.com/">SHOP</a>
        <a className='text-lg font-bold' href="https://www.monstercat.com/lost-civ">LOST CIVILIZATION</a>
    </div>
  )
}

export default SideMenuContent
