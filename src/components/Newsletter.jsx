import React from 'react'

function Newsletter() {
  const styles = `font-[Raleway] font-semibold text-lg`

  return (
    <section className="text-white px-8 mt-8 pb-4 lg:px-28">
            <hr className="border border-gray-400"/>
            <div className="md:grid md:grid-cols-3 md:pt-8 md:px-8 lg:px-0">
              <ul className="flex flex-col gap-1">
                <li>
                  <a className={styles} href="https://www.monstercat.com/about">ABOUT MONSTERCAT</a>
                </li>
                
                <li>
                  <a className={styles} href="https://www.monstercat.com/contact-us">CONTACT US</a>
                </li>
                
                <li>
                  <a className={styles} href="https://www.monstercat.com/careers">CARREER</a>
                </li>
                
                <li>
                  <a className={styles} href="https://www.monstercat.com/news">NEWS</a>
                </li>
                
                <li>
                  <a className={styles} href="https://www.monstercat.com/press">PRESS</a>
                </li>
              </ul>

              <ul className="flex flex-col gap-1 mt-2 md:mt-0 mb-10">
                <li>
                  <a className={styles} href="https://www.monstercat.com/terms-of-service">TERMS OF SERVICE</a>
                </li>

                <li>
                  <a className={styles} href="https://www.monstercat.com/privacy-policy">PRIVACY POLICY</a>
                </li>
              </ul>

              <div className="pb-3">
                <h3 className="font-[Raleway] text-lg font-semibold text-gray-400 mb-3">MONSTERCAT NEWS</h3>

                <p className="font-[Raleway] text-md text-white mb-3 italic lg:mt-4">Don't miss a thing, stay up to date with the latest news from us.</p>

                <form className="w-full h-8 flex items-center border-b border-gray-700 lg:mt-6 pb-2">
                  <input type="text" placeholder="Enter email" className="text-xl h-6 outline-none bg-black p-2" />
                  <input type="button" value="->" className="px-8 py-1 mb-1 hover:bg-white hover:text-black duration-100 "/>
                </form>
              </div>

            </div>
          </section>
  )
}

export default Newsletter
