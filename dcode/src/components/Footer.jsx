import logo from '../../images/logo.png';
import { CgMail } from 'react-icons/cg'

const Footer = () => {
    return(
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer" >
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4" >
                <div className='flex flex-[0.5] justify-center items-center ' >
                    <img src={logo} alt="logo" className="scale-50 top-0" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-cyan-700 text-lg text-center mx-2  cursor-pointer hover:underline hover:text-xl transition-all" >Market</p>
                    <p className="text-cyan-700 text-lg text-center mx-2 cursor-pointer hover:underline hover:text-xl transition-all " >Exchange</p>
                    <p className="text-cyan-700 text-lg text-center mx-2 cursor-pointer hover:underline hover:text-xl transition-all " >Tutorials</p>
                    <p className="text-cyan-700 text-lg text-center mx-2 cursor-pointer hover:underline hover:text-xl transition-all " >Wallet</p>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center mt-5" >
                <p className="text-cyan-500 text-base text-md text-center" >Know more about the developer @</p>
                <div className='flex flex-row justify-start items-center mt-1'>
                    <CgMail fontSize={30} className='bg-gradient-to-r from-cyan-500 to-fuchsia-600 mr-3 border-0 rounded-3xl' />
                    <span className="text-purple-500  text-lg text-center" >shaikh.shoaib2345@gmail.com</span> 
                    
                </div>
                         
            </div>
            <div className='sm:w-[90%] w-full h-[0.25px] bg-emerald-700 mt-5' />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3 " >
                <p className=" bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-cyan-600 text-md text-center" >@DCode™</p>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-cyan-600 text-md text-center" >All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;