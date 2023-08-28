import Track from "./Track"
import data from '../assets/Playlist'

function TrackList() {
  return (
    <section className="text-white px-8 pt-8 pb-2 md:px-10 md:pb-6 md:pt-10 lg:px-28 bg-black">

      <h2 className=" font-[Raleway] font-semibold text-xl md:text-3xl mb-6 md:mb-10">Track List</h2>

      <table>
        <tbody>
          {
            data[0].songs.map((song)=> <Track key={song.id} song={song} artist={data[0].artist} />)
          }
        </tbody>
      </table>

    </section>
  )
}

export default TrackList
