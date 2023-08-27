import { useState } from 'react'

function Dropdown(props) {
  const [ clicked, setClicked ] = useState(false);
  const clickHandler = () => setClicked(!clicked);

  return (
    <section>
      <h3 className='text-lg font-bold cursor-pointer relative' onClick={clickHandler} >
        {props.label}
        <span className={`absolute ${clicked? 'rotate-90':'rotate-0'} ml-2 text-sm `}>{'>'}</span>
      </h3>
      <ul className={`${clicked? 'flex':'hidden' } flex-col text-gray-400 font-semibold pl-2 `}>
        {props.links.map( (link) => <a key={link.text} className="hover:text-white" href={link.src}>{link.text}</a>)}
      </ul>    
    </section>
  )
}

export default Dropdown

