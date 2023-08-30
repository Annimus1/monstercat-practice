import FooterMedia from "./FooterMedia";


function Footer() {
  return (
    <footer className="text-white mt-4 px-8 lg:px-28">
        <hr />
        <div className="flex flex-col gap-4 mb-7 md:flex-row md:mt-6 lg:justify-between items-center">
            <p className="font-mono mt-6 lg:pb-6">2011 - 2023 © Monstercat, All Rights Reserved</p>
            <FooterMedia />
        </div>

        <div className="flex flex-col items-center md:mt-16">
            <p className="text-sm text-center w-full mb-6">We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish),
              Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
            <p className="text-sm text-center w-full mb-12 lg:mb-32">We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
        </div>
    </footer>
  )
}

export default Footer
