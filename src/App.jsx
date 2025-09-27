import Cover from "./components/Cover";
import Stream from "./components/Stream";
import TrackList from "./components/TrackList";
import Header from "./components/header";
import Newsletter from "./components/Newsletter";
import Footer from "./Footer";

function App() {
  const bgImage = {
    backgroundImage:`url('/Night_Vision.jpg')`, 
    backgroundRepeat:"no-repeat" , 
    backgroundSize: 'contain',
    backgroundPositionX: 'center'
  }

  return (
    <div  className="min-w-screen min-h-screen w-full h-full overflow-x-hidden overflow-y-hidden relative bg-black">
      <div style={bgImage} className="bg-black" >
        <div className="z-10 h-auto backdrop-blur-md">
          
          {/* Header */}
          <Header/>

          {/* cover */}
          <Cover />

          {/* stream */}
          <Stream />

          {/* Track list */}
          <TrackList />

          {/* Video */}
          <section className="text-white px-8 pt-8 pb-2 lg:px-28">
            <h2 className="font-[Raleway] text-2xl font-semibold pb-8">Music Video</h2>

            <iframe className="w-full h-[300px] md:h-[400px] lg:h-[600px] mb-6" src="https://www.youtube.com/embed/mWRsgZuwf_8?si=vXvf5Pj9z0JwpXMq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </section>

          {/* newsletter */}
          <Newsletter />

          {/* Footer */}
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default App
