import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type props = {
    id:number;
    title: string;
    contents:string;
    image:string;
    link:string;
}

const ResearchItem = ({id, title, contents, image, link}: props) => {
  return (
    <>
    <Link className="hidden sm:block" key={id} to={link} onClick={() => {
        window.scrollTo(0, 0)
      }}>
    {id % 2 == 0 ? (<div key={id} className="grid grid-cols-3 mb-24">
                        {/* Intro Card */}
                        <motion.div className='flex justify-center items-center relative z-10'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 },
                        }}
                       >
                            <div 
                                    className="text-green-50 
                                                bg-polyu-primary 
                                                bg-opacity-90 
                                                rounded-lg 
                                                shadow-2xl 
                                                w-96 
                                                h-72 
                                                p-8
                                                absolute
                                                left-24
                                                "
                                                
                                    >
                                    <div className="text-3xl font-bold mb-2">{title}</div>
                                    <div className="text-xl font-thin">{contents}</div>
                            </div>
                        </motion.div>

                        {/* RA Image */}
                        <motion.img className="col-span-2 shadow-2xl" src={new URL(`/${image}`, import.meta.url).href} alt="ra1" initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 150 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    />
                    </div>): (  <div id="research-area-container" className="grid grid-cols-3 mb-24">

                                    {/* RA Image */}
                                    <motion.img className="col-span-2 shadow-2xl" src={new URL(`/${image}`, import.meta.url).href} alt="ra1" initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{ duration: 1 }}
                                                variants={{
                                                    hidden: { opacity: 0, x: 150 },
                                                    visible: { opacity: 1, x: 0 },
                                                }}
                                                />
                                    {/* Intro Card */}
                                    <motion.div className='flex justify-center items-center relative z-10'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -150 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    >
                                        <div 
                                            className="text-green-50 
                                                    bg-polyu-primary 
                                                        bg-opacity-90 
                                                        rounded-lg 
                                                        shadow-2xl 
                                                        w-96 
                                                        h-72 
                                                        p-8
                                                        absolute
                                                        right-24
                                                        z-10"
                                            >
                                            <div className="text-3xl font-bold mb-2">{title}</div>
                                            <div className="text-xl font-thin">{contents}</div>
                                        </div>
                                    </motion.div>


                                </div>
                        )}

    </Link>

    <Link className="block sm:hidden" key={id} to={link} onClick={() => {
        window.scrollTo(0, 0)
      }}>
        <div key={id} className="flex flex-col mb-24">
                        {/* Intro Card */}
                        <motion.div className='flex justify-center items-center relative z-10'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 },
                        }}
                       >
                            <div 
                                    className="text-green-50 
                                                bg-polyu-primary 
                                             
                                                rounded-lg 
                                                shadow-2xl 
                                                w-full 
                                                text-center
                                                "
                                                
                                    >
                                    {/* RA Image */}
                                    <div className="bg-white"> <img className="mb-4" src={new URL(`/${image}`, import.meta.url).href} alt="ra1" /></div>
                                  
                                    <div className="px-6 text-lg font-bold mb-2">
                                        <div className="text-lg font-bold mb-2">{title}</div>
                                        <div className="text-sm font-thin">{contents}</div>
                                    </div>
                                 
                                    
                            </div>
                        </motion.div>

                        
                    </div>
    </Link>
    </>
  )
  
}

export default ResearchItem


