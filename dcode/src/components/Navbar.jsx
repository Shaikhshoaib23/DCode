import { useState, useContext } from 'react';
import React from 'react'
import { CgMenuOreos } from 'react-icons/cg';
import { IoIosCloseCircle } from 'react-icons/io';
import logo from '../../images/logo.png';
import { TransactionContext } from '../context/TransactionsContext';




const NavbarItem = ({ title, classprops }) => (
        <li className={`mx-4 cursor-pointer ${classprops}`}>
            {title}
        </li>
); 



const NavIcon = ({ icon,text = 'Docs' }) => (
    <div className='cursor-pointer ml-3 navbar-icon group' >
        {icon}

        <span className='nav-tool group-hover:scale-100' >
            {text}
        </span>
    </div>
);

const Navbar = () => {

    //used for logging in
    const { connectWallet, currentAccount } = useContext(TransactionContext);

    //used for mobile nav
    const [toggleMenu, settoggleMenu] = useState(false);
    return(
        <nav className="w-full flex md:justify-left justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-right" >
                <img src={logo} alt="logo" className='w-32 ml-3 cursor-pointers scale-150' />
            </div>
            <ul className="text-teal-500 md:flex hidden list-none flex-row justify-between items-center flex-initial" >
                {["Market", "Exchange", "Tutorials","Wallets"].map((item, index) =>(
                    <NavbarItem key={item + index} title={item}  />
                ))}
                {!currentAccount && ( //if current account exist, button wont appear.
                    <button type="button" onClick={connectWallet} className="pr-1 pl-1 pt-1 pb-1 rounded-xl 
                                                                            mr-3 ml-3 bg-gradient-to-r from-fuchsia-800 
                                                                            to-orange-400 hover:from-red-500 hover:to-purple-500  
                                                                            border-purple-900 hover:border-red-900 py-1 px-3 
                                                                            border-b-4 active:animate-ping  " >
                        Login
                    </button>
                )}
                                                                     
            </ul>
            
            <div className='flex-relative' >
                {toggleMenu
                  ? <IoIosCloseCircle fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => settoggleMenu(false)} />
                  : <CgMenuOreos fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => settoggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                    className='z-10 fixed -top-0 -right-2 p-2 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end round-mg blue-glassmorphism text-white animate-slide-in '
                     >
                        <li className='text-xl w-full my-2'>
                            <IoIosCloseCircle onClick={() => settoggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => 
                            <NavbarItem classprops="my-3 text-lg text-teal-700 underline hover:overline "  key={item + index} title={item}  />
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;