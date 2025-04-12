import React from 'react'
import dash from '/assets/ijcfibook.png';
import { FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RiContactsBook2Fill } from 'react-icons/ri';

function Correction() {
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
                        Journal Correction Policy
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        The International Journal of Corporate Finance and Investment is committed to ensuring the accuracy and integrity of the academic record. If errors are identified in published articles, the journal will issue corrections, retractions, or updates as necessary. Authors and readers are encouraged to report any mistakes promptly to the editorial office. Minor errors that do not affect the study’s conclusions will result in a correction notice. Major issues impacting the validity of findings may lead to retraction or republication. All corrections are made transparently and in accordance with COPE guidelines.</p>
                     
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Version of Record and Correction Guidelines</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><RiContactsBook2Fill   className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Version of Record (VoR)</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">The "Version of Record" (VoR) is the final, authoritative published version of a manuscript.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Once published, the VoR becomes the definitive reference, assigned a DOI for easy citation.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Any corrections or updates will reference the VoR, ensuring consistency in the academic record.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">The VoR is considered the official version for citation, publication, and future scholarly work reference.</p>
                                </div>
                            
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><RiContactsBook2Fill    className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Correction Criteria</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Minor errors, such as typographical mistakes, will be corrected through an erratum or correction notice.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Major errors affecting the study's conclusions or data integrity may result in article retraction or republication.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors are encouraged to notify the editorial team of any identified errors or inconsistencies promptly.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Corrections are made transparently and in compliance with COPE guidelines to ensure academic integrity and accuracy.</p>
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
                            <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Correction Process</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">Authors or readers identify errors in published articles, which are reported to the journal’s editorial office for review and verification.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">The editorial team reviews the reported issues, assessing the severity of the error and determining whether a correction is required.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">If a correction is needed, the authors are contacted to provide clarification or revised content for publication.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                        <div className="w-2 h-2  bg-white rounded-full"></div>
                                    </div>
                                    <p className="poppins-regular">After approval, the correction is published as an erratum or retraction, with full transparency regarding the issue's nature.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/editorial')}
                                className="group relative overflow-hidden px-8 py-3 bg-[#4E7628] rounded-lg text-white poppins-medium  cursor-pointer "
                            >
                                <span className="relative z-10 flex items-center">
                                    Contact Editorial Team
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

export default Correction