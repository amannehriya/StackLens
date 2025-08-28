import React, { useContext, useEffect, useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './context/AuthContext';


function Navbar({ navopen, setnavopen,btnRef }) {
    const activeBox = useRef();
    const lastActiveLink = useRef();
    const navRef = useRef();
const { SetIsAuthenticated, isAuthenticated, myData } = useContext(AuthContext)
const navigate = useNavigate();

    //removing navbar when click outside the navbar
    useEffect(() => {
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





const handleLogout = ()=>{
    fetch('http://localhost:3000/user/logout',{
        credentials:'include'
    }).then(res=>{
        SetIsAuthenticated(false)
        toast("logout successful")
        console.log("user logout",res.clone().json())
    })
    .catch((err)=>{
        console.log("error while logout",err)
    })

    navigate('/user/login');
}

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';

    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {

        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }
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

    
    return (

        <nav
            ref={navRef} className={'navbar  ' + (navopen ?"active" : "")
            }>

            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <Link
                    to={link}
                       className={className}
                        onClick={activeCurrentLink}
                        key={key}
                       ref={ref}>
                        {label}
                    </Link>
                )

                )
            }
            {/* for login */}
            <button
                onClick={handleLogout}
                className=" flex md:hidden  items-center h-9 px-4 font-medium tracking-wide
text-zinc-50/50 hover:text-zinc-50 transition-colors"
            >
               Logout
            </button>

            <div className="absolute   bg-zinc-50
  rounded-lg -z-10 transition-[top,left] duration-500"
                ref={activeBox}></div>

        </nav>
    )
}

export default Navbar