import Cover from "./components/Cover";
import Stream from "./components/Stream";
import TrackList from "./components/TrackList";
import Header from "./components/header";

// reference https://www.frontendpractice.com/projects/monstercat

function App() {
  const imgUrl = 'https://th.bing.com/th/id/R.8863a420e0de711cf4d2286b14ca70a0?rik=CLF5QdUigGbwfg&riu=http%3a%2f%2fimg2-ak.lst.fm%2fi%2fu%2far0%2fecae82853b784726c7e2c4e2ba55a4fd&ehk=OtDvAyDAYkqsGWv5xFhZAPrPjdfUz4S5KOB8TGxcOr4%3d&risl=&pid=ImgRaw&r=0'

  const bgImage = {
    backgroundImage:`url(${imgUrl})`, 
    backgroundRepeat:"no-repeat" , 
    objectFit:"contain",
    backgroundSize: '100%',
    backgroundPositionX: 'center'
  }

  return (
    <div  className="min-w-screen min-h-screen w-full h-full overflow-x-hidden overflow-y-hidden relative">
      <div style={bgImage} className="bg-black" >
        <div className="z-10 h-full backdrop-blur-md">
          
          {/* Header */}
          <Header/>

          {/* cover */}
          <Cover />

          {/* stream */}
          <Stream />

          {/* Track list */}
          <TrackList />
          
          
        </div>
      </div>
    </div>
  )
}

export default App
