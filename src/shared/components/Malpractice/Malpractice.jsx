import React from 'react'
import dash from '/assets/ijcfibook.png';
import { FaArrowRight, FaHandPointRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Malpractice() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="text-justify">
                <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
                    <div className='hidden lg:block  '>
                        <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                    </div>
                    <div>
                        <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                        Malpractice Policy
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        The International Journal of Corporate Finance and Investment is committed to maintaining the highest standards of publication ethics. Any form of academic misconduct, including plagiarism, data falsification, inappropriate authorship, or unethical research practices, is strictly prohibited. All submissions are carefully reviewed for compliance with ethical guidelines, and suspected cases of malpractice are thoroughly investigated. If malpractice is confirmed, appropriate actions such as rejection, retraction, or author sanctions will be taken. </p>
                     
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg  mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Ethical Responsibilities in Scholarly Publishing</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaHandPointRight  className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Author's Responsibilities</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Authors must submit original work, properly citing all sources and avoiding any form of plagiarism.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">All listed co-authors should significantly contribute and approve the final version before submission.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors must disclose any conflicts of interest that may affect interpretation or outcome of the research.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors should respond to peer review comments respectfully and revise manuscripts according to editorial and reviewer feedback.</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaHandPointRight   className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Editor's Responsibilities</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Editors ensure fair, unbiased manuscript review based solely on scholarly merit, originality, and journal relevance.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Editors maintain confidentiality of submissions and uphold integrity throughout the peer review and publication process.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Editors manage conflicts of interest and handle ethical concerns, including plagiarism and research misconduct, responsibly.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Editors provide timely communication with authors, reviewers, and stakeholders to ensure an efficient publication workflow.</p>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <section className="mb-8">
                    <div className="rounded-lg p-8 shadow-lg border-2 border-[#759457]">
                        <div>
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Reviewer's Responsibilities</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Reviewers must provide objective, constructive, and timely feedback to help authors improve the quality and clarity of their manuscripts.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Reviewers should maintain confidentiality and must not share, discuss, or use the manuscript content for personal advantage.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Reviewers must disclose any conflicts of interest that could influence their review of the assigned manuscript’s content.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Reviewers are expected to identify ethical issues, including plagiarism or data fabrication, and report them to the editorial board.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/authorguidelinespage')}
                                className="group relative overflow-hidden px-8 py-3 bg-[#4E7628] rounded-lg text-white poppins-medium  cursor-pointer "
                            >
                                <span className="relative z-10 flex items-center">
                                    View  Guidelines
                                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#4E7628] to-[#63a823] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Malpractice