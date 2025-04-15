import React from 'react'
import { Link,} from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijcfibook.png';
import { FaCube, FaRegCopyright } from 'react-icons/fa';

function Copyrightform() {

    return (
        <div>
            <div className="text-justify">
                <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
                    <div className='hidden lg:block  '>
                        <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                    </div>
                    <div>
                        <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                        Copyright Declaration
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        By submitting a manuscript to the International Journal of Corporate Finance and Investment, authors affirm that the work is original and does not infringe upon the copyrights of others. Authors retain the copyright to their work but grant the journal exclusive rights to publish and distribute the article in all formats and media. All submitted articles will be peer-reviewed, and upon acceptance, authors agree to abide by the journal’s publishing policies. The journal reserves the right to edit and modify the manuscript for clarity, length, and style.</p>
                        {/* <div className="pl-6 ">
                            <Link to="" target="_blank" rel="noopener noreferrer">
                                <button className="hover:text-white poppins-regular hover:bg-[#4E7628] lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-[#4E7628] border-2 border-[#4E7628] hover:border-2 hover:border-white  transition-duration duration-300 rounded-lg bg-white">
                                    <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Publication Policies and Author Responsibilities</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaRegCopyright  className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Copyright Declaration</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">I/We __________ the author(s) of the research paper/article entitled __________ authorize you to publish the above mentioned paper/article in IJCFI. By submitting this declaration, the author(s) confirm their agreement to the following terms and conditions regarding the publication of their research work.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaRegCopyright   className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Author Agreement </h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">This agreement outlines the terms and conditions for publication, ensuring the protection of both the author's rights and the journal's interests. The author(s) maintain their copyright while granting the journal the necessary rights to publish and distribute the work.</p>
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
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Publication Rights</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">I/We will not publish the above-mentioned contribution anywhere else without the prior written permission of the publisher, unless it has been substantially changed.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Content Warranty</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">I/ We declare and warrants that his/her/their contribution is original, except for such excerpts from copyrighted works as may be included with the permission of the copyright holder and author thereof, that it contains no libelous statements, and does not infringe on any copyright, trademark, patent, statutory right, or propriety right of others.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg poppins-bold text-center mb-8 text-[#4E7628]">Legal Compliance</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">The Author warrants the right to enter into this Agreement and that the Article contains no libelous or unlawful statements, harmful instructions, and does not violate any rights or privacy of others.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Copyrightform