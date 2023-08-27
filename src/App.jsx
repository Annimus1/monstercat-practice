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
    <div style={bgImage} 
    className="min-w-screen min-h-screen w-full h-full overflow-x-hidden overflow-y-hidden">
      <div className="h-full backdrop-blur-md bg-[#383838]/50" >
        <div className="h-full z-10">
          
          {/* Header */}
          <Header />

          {/* cover */}
          <section className='text-white h-full w-full px-8 mt-32 md:grid md:grid-cols-2'>

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
                <h1 className="text-4xl font-semibold mt-5 mb-2">Night Visionas</h1>
                <span className="text-xl font-medium text-green-500">Imagine Dragons</span>
              </div>

              <div className=" mt-6 pb-6">
                <a href="#" className=" font-semibold px-2 py-1 border border-green-500 bg-green-500 mr-3 whitespace-nowrap">LISTEN NOW</a>
                <a href="#" className=" font-semibold px-2 py-1 border">SHARE</a>
              </div>
            
            </div>

          </section>
        </div>
      </div>
    </div>
  )
}

export default App
