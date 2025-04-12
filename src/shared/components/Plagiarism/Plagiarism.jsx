import React from 'react'
import dash from '/assets/ijcfibook.png';
import { FaArrowRight} from 'react-icons/fa';
import { AiFillDatabase, AiOutlineAim } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Plagiarism() {
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
                            Plagiarism
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        The International Journal of Corporate Finance and Investment adheres to strict anti-plagiarism policies to maintain academic integrity. All submitted manuscripts are screened for originality using advanced plagiarism detection tools. Any form of plagiarism, including self-plagiarism, is strictly prohibited and will result in immediate rejection of the manuscript. Authors are required to properly cite all sources and give appropriate credit to previous works. The journal aims to uphold transparency, credibility, and the ethical standards of academic publishing in corporate finance and investment.</p>
                     
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Plagiarism and Research Integrity</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><AiFillDatabase className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Types of Plagiarism</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Direct Plagiarism: Copying text verbatim from a source without proper citation or acknowledgment.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Self-Plagiarism: Reusing one’s own previously published work or parts of it without citation or permission.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Mosaic Plagiarism: Borrowing phrases or ideas from a source and blending them into one's own work without proper citation.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Accidental Plagiarism: Unintentional failure to properly cite sources or paraphrase correctly, often due to lack of awareness or knowledge.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Paraphrasing Plagiarism: Rewriting someone else's ideas or text in one’s own words without proper attribution.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><AiOutlineAim  className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Definition and Scope</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Plagiarism is the unethical act of using another’s work or ideas without proper acknowledgment or citation.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">It includes copying text, data, figures, or ideas without permission or giving credit to sources.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Self-plagiarism occurs when authors reuse their own previously published work without citing the original publication.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Plagiarism undermines academic integrity, diminishing the credibility and value of scholarly research within finance and investment.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">The scope covers all forms of intellectual theft, including written content, data, images, and ideas.</p>
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
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Detection and Consequences</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Plagiarism detection tools, including advanced software, are used to identify copied text and data within submitted manuscripts.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Manuscripts are screened for originality, ensuring all sources are properly cited and that no intellectual theft occurs.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Authors found guilty of plagiarism face immediate rejection, withdrawal of publications, and a permanent ban from future submissions.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">The journal takes plagiarism seriously, aiming to maintain academic integrity and uphold the credibility of published research in finance.</p>
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

export default Plagiarism