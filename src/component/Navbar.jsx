import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';



function Navbar({ navopen, setnavopen,btnRef }) {
    const activeBox = useRef();
    const lastActiveLink = useRef();
    const navRef = useRef();


    //removing navbar when click outside the navbar
    useEffect(() => {
        console.log(window.innerWidth)
        function handleClickOutside(event) {
            if (
                navopen &&
                window.innerWidth < 567 &&
                navRef.current &&
                !navRef.current.contains(event.target) && //means click navbar pr nhi hua he
                !btnRef.current.contains(event.target) //means close button pr to click nhi kiya
            ) {
                setnavopen(false);
            }
        }

          document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };


    }, [navopen, setnavopen])



    const navItems = [
        {
            label: 'home',
            link: '/',
            className: 'nav-link active',
            ref: lastActiveLink
        }, {
            label: 'About',
            link: '#about', //#about dalne se jese hi hm about pr click krenge to vo hmko about vale component pr lejayega
            className: 'nav-link ',//nut make sure aapne us component ko ek section div me likh kr use id di ho eg:id="work"
        }, {
            label: 'Work',
            link: '#work',
            className: 'nav-link ',
        },

    ]



    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';

    }

    const activeCurrentLink = (event) => {

        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;


        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);
    return (

        <nav
            ref={navRef} className={'navbar  ' + (navopen ? "active" : "")
            }>

            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <Link to={link}
                        onClick={activeCurrentLink}
                        key={key}
                        className={className}
                        ref={ref}>
                        {label}
                    </Link>
                )

                )
            }
            {/* for login */}
            <a href={"login"}
                onClick={activeCurrentLink}
                className=" flex md:hidden  items-center h-9 px-4 font-medium tracking-wide
text-zinc-50/50 hover:text-zinc-50 transition-colors"
            >
                Login
            </a>

            <div className="absolute   bg-zinc-50
  rounded-lg -z-10 transition-[top,left] duration-500"
                ref={activeBox}></div>

        </nav>
    )
}

export default Navbar