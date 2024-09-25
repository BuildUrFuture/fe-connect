import feConnect from '../../assets/images/svg/FELOGOS.svg';
import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';




function Header() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"TRANSMISSÕES",link:"/transmissoes"},
        {name:"EQUIPES",link:"/equipes"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 w-20 h-min'>
                <img src={feConnect} alt="Logo FE Connect" className='w-full h-full'/>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link["name"]}>
                        <NavLink to={link.link} className={({ isActive }) => 
                                                            `text-gray hover:text-transparent transition duration-1000 ease-in-out bg-clip-text hover:bg-gradient-to-r from-fe-purple to-fe-pink` + 
                                                            (isActive ? 'bg-clip-text bg-gradient-to-r from-fe-purple to-fe-pink text-transparent' : '')}
                        >
                            {link.name}
                        </NavLink>
                    </li>))
                }
                <NavLink to={"/login"} className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Entrar</NavLink>
            </ul>
           </div>
        </div>
    )
}

export default Header;