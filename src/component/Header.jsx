import React, { useRef, useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
   const btnRef = useRef();
    const [navopen, setnavopen] = useState(false);
    return (
        <header className="w-full h-20 fixed top-0 left-0 flex 
    items-center z-40 ">

            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between
     items-center md:px-6 " >

                {/* logo */}
                <h1 className='text-white'>logo</h1>
                
                {/* navbars */}
                <div className="relative md:justify-self-center">
                    <button ref={btnRef}
                        className=' w-10 md:hidden h-10 grid place-items-center bg-gray-200
  rounded-xl ring-inset ring-1 ring-zinc-50/[0.02]
  backdrop-blur-2xl hover:bg-gray-400 duration-150 transition-[transform,backdrop-color] active:scale-95'
                        onClick={() => setnavopen((prev) => !prev)}>

                        <span className="material-symbols-rounded md:hidden">
                            {navopen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navopen={navopen} setnavopen={setnavopen} btnRef={btnRef} />
                </div>

                {/* login */}

                <a 
                href="/login"
                className='btn btn-secondary max-md:hidden
                md:justify-end'>login</a>
            </div>


        </header>
    )
}

export default Header