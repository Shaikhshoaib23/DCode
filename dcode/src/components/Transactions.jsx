import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionsContext";
import dummyData from '../utilities/dummyData'
import { shortenAddress } from "../utilities/shortenAddress";
import useFetch from '../hooks/useFetch';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword })

    return(
        <div className="bg-[#160d2c] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-2xl hover:shadow-2xl hover:shadow-indigo-800/40 border-4 border-purple-600 border-dashed hover:border-dotted
            ">
                <div className="flex flex-col items-center w-full mt-3" >
                    <div className="w-full mb-6 p-2" >
                        <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener noreferrer' >
                            <p className="text-teal-500 text-base" >From: {shortenAddress(addressFrom)}</p>
                        </a>
                        <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
                            <p className="text-purple-600 text-base" >To: {shortenAddress(addressTo)}</p>
                        </a>
                        <p className="text-teal-500 text-base">Amount: {amount} ETH </p>
                        {message && (
                            <>
                                <br />
                                <p className="text-teal-500 text-base" >Message: {message}</p>   
                            </>
                        )}
                        
                    </div>
                        <img src={gifUrl || url} alt="gif" className="w-full h-64 2x:h-96 rounded-lg shadow-2xl object-cover mb-8 " />
                        <div className="bg-teal-400 p-3 py-1 border-teal-800 border-b-4 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                            <p className="text-fuchsia-900 font-bold" >{timestamp}</p>
                        </div>
                </div>
        </div>
    )
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
        return(
            <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions" >
                <div className="flex flex-col md:p-12 py-12 px-4" >
                    { currentAccount ? (
                       <h3 className="text-teal-500 text-3xl text-center my-2 underline" >
                        Latest Transactions
                        </h3>
                    ) : (
                        <h3 className="text-teal-500 text-3xl text-center my-2 underline" >Connect your wallet to see your transactions</h3>
                    )}
                    <div className="flex flex-wrap justify-center items-center mt-10">
                        {transactions.reverse().map((transaction, i) => (
                            <TransactionCard key={i} {...transaction} />
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default Transactions;