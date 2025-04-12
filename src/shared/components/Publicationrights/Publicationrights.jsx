import React from 'react'
import dash from '/assets/ijcfibook.png';
import { FaArrowRight, FaRegCopyright} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GiBookCover } from 'react-icons/gi';

function publicationrights() {
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
                        Publication Rights Policy
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        The International Journal of Corporate Finance and Investment adheres to a strict publication rights policy, ensuring authors retain copyright under a Creative Commons license. Authors grant the journal the right to publish their work, making it openly accessible to the global academic community. The journal ensures proper attribution of authorship and permits others to share, adapt, and reuse the content with proper citation. Authors are encouraged to retain rights for reuse and distribution in their personal or institutional archives. The policy upholds transparency, academic integrity, and the dissemination of high-quality research.</p>
                     
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg  mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Copyright and Author Benefits</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaRegCopyright    className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Copyright Policy</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Authors retain copyright for their work but grant the journal a license to publish and distribute.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">The journal uses a Creative Commons license, allowing free access and proper attribution for all content.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors are permitted to reuse their work in institutional repositories with proper citation and acknowledgment.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">The journal ensures all content complies with copyright laws, maintaining transparency and ethical publishing standards.</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><GiBookCover     className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Key Benefits</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Authors gain global visibility by publishing high-quality research in the fields of finance and investment.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Open access ensures widespread dissemination, increasing citations and academic recognition for published authors’ work.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">The peer-review process enhances manuscript quality, providing constructive feedback from experts in the finance field.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors benefit from prompt publication, allowing timely dissemination of research findings to the international academic community.
</p>
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
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Rights Management</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Authors retain copyright to their work but grant the journal exclusive rights for distribution, publication, and dissemination of the article.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">The journal publishes under a Creative Commons license, allowing free access, reuse, and redistribution with proper attribution to authors.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Authors may reuse their work in other publications or repositories with appropriate citation and acknowledgment of the original publication.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">The journal ensures all published content complies with copyright laws, protecting both authors' rights and maintaining academic integrity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/authorguidelinespage')}
                                className="group relative overflow-hidden px-8 py-3 bg-[#4E7628] rounded-lg text-white poppins-medium  cursor-pointer "
                            >
                                <span className="relative z-10 flex items-center">
                                    View Author Instruction
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

export default publicationrights