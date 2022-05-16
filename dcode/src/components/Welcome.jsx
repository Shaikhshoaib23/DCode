import React, { useContext } from 'react';
import { BsCollectionPlay } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { TransactionContext } from '../context/TransactionsContext';
import { shortenAddress } from '../utilities/shortenAddress';
import { Loader } from './';


const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[2.5px] text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-xl p-2 outline-none bg-transparent text-teal-600 border-none text-md white-glassmorphism'   
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);
    


    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }

    return(
        <div className="flex w-full justify-center" >
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4" >
                <div className="flex flex-1 justify-start flex-col mf:mr-10" >
                    <h1 className='text-3xl text-teal-500 sm:text-5xl text-gradient py-1 text-d' >
                        Send
                        <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-2 ml-1 before:bg-gradient-to-r from-emerald-300 to-red-500 relative inline-block">
                            <span className="relative text-white">Cryptos</span>
                        </span><br /> across the world
                    </h1>
                    <p className='text-left mt-8 text-teal-600 font-light md:w-9/12 w-11/12 text-base animate-bounce ' >
                        Explore the crypto World! Buy and sell cryptocurrencies easily on DCode.
                    </p>
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#5c76d6] p-3 rounded-full cursor-pointer hover:bg-[#9333ea] "
                        >
                            <p className="text-black-500 text-base font-bold">Connect Wallet</p>
                        </button>
                    )}

                    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10' >
                        <div className={`rounded-tl-2xl ${commonStyles} border-blue-500 active:animate-ping`} >
                            Reliabilty
                        </div>
                        <div className={`${commonStyles} border-purple-700 active:animate-bounce`}>Security</div>
                        <div className={`${commonStyles} md:rounded-tr-2xl border-red-400 active:animate-spin `}>Ethereum</div>
                        <div className={`${commonStyles} md:rounded-bl-2xl border-rose-500 active:animate-spin`}>Web 3.0</div>
                        <div className={`${commonStyles} border-violet-300 active:animate-bounce`}>Low Fees</div>
                        <div className={`${commonStyles} rounded-br-2xl border-lime-500 active:animate-ping`}>BlockChain Tech</div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10' >
                    <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 hover:card-shadow eth-card white-glassmorphism' >
                        <div className='flex justify-between flex-col w-full h-full' >
                            <div className='flex justify-between items-start' >
                                <div className='w-10 h-10 border-2 border-teal-500 flex justify-center items-center rounded-full' >
                                    <SiEthereum fontSize={24} color='#1c3f40' className='rotate' />
                                </div>
                                <BsFillInfoCircleFill fontSize={22} color='#1c3f40'/>
                            </div>
                            <div>
                                <p className='text-emerald-900 font-semibold text-sm' >
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className='text-teal-800 font-bold text-lg mt-1' >
                                    Ethereum
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='p-10 mt-3 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism border-4 rounded-3xl border-x-red-600 border-double border-y-purple-700 ' >
                        <Input placeholder='Address To' name='addressTo' type='text' handleChange={handleChange} />
                        <Input placeholder='Amount (in ETH)' name='amount' type='number' handleChange={handleChange} />
                        <Input placeholder='Keywords (Gif)' name='keyword' type='text' handleChange={handleChange} />
                        <Input placeholder='Enter a message' name='message' type='text' handleChange={handleChange} />

                        <div className='h-[1px] w-full bg-gray-400 my-2' />
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                            type='button'
                            onClick={handleSubmit}
                            className='text-teal-600 w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer '
                            >
                                Send Now!
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;