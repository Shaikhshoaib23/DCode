import { IoShieldCheckmark } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';
import { BsSuitHeartFill } from 'react-icons/bs';

const ServiceCard = ({ color, title, icon, subtitle } ) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism 
            p-3 m-2 cursor-pointer border-2 border-dashed hover:shadow-2xl
            hover:shadow-violet-700/40 mb-6 border-emerald-400
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
            duration-100 " >
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color} `}  >
            {icon}
        </div>
        <div className='ml-5 flex flex-col flex-1 text-bold text-lg text-teal-500'>
            <h1>{title}</h1>
            <p className="mt-1 text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600  md:w-9/12" >{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return(
        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services" >
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 0x-4" >
                <div className="flex-1 flex flex-col justify-start items-start" >
                    <h1 className=" text-3xl sm:text-5xl py-2 text-gradient" >Services that we
                        <br />
                        will always improve
                    </h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard color= 'bg-[#2952E2]'
                    title='Security Guaranteed'
                    icon={<IoShieldCheckmark fontSize={21} className='text-teal-500' />}
                    subtitle="Security is a promise we will always fulfill.Your privacy is your right."
                />
                <ServiceCard color= 'bg-[#4a4681]'
                    title='Best exchange rates you can get on the whole net!'
                    icon={<BiSearchAlt fontSize={21} className='text-teal-500' />}
                    subtitle="Our exchange rates are far better than our competition.So dont think twice!"
                />
                <ServiceCard color= 'bg-[#F84550]'
                    title='Quick Transactions'
                    icon={<BsSuitHeartFill fontSize={21} className='text-teal-500' />}
                    subtitle="We offer lightning fast services to our users.You can always count on us."
                />
            </div>
        </div>
    );
};

export default Services;