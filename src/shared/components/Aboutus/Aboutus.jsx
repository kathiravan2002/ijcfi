import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijcfibook.png';
import { LuAward, LuFileCheck, LuTarget, LuUsers } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';

function Aboutus() {


    const navigate = useNavigate();


    return (
        <div>
            <div className="text-justify">
                <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
                    <div className='hidden lg:block  '>
                        <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                    </div>
                    <div>
                        <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                            About us
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                            The International Journal of Corporate Finance and Investment  is a peer-reviewed academic journal dedicated to publishing innovative research in the fields of corporate finance, investment, and financial strategy. We aim to provide a global platform for researchers, practitioners, and policymakers to exchange ideas and advance financial knowledge. Our journal focuses on both theoretical and empirical studies that address contemporary issues in corporate financial management and investment practices. IJCFI is committed to maintaining high academic standards and fostering impactful scholarly communication.</p>
                        <div className="pl-6 ">
                            <Link to="https://www.ijcfi.com/ijcfi/index.php/ijcfi/about/submissions" target="_blank" rel="noopener noreferrer">
                                <button className="hover:text-white poppins-regular hover:bg-[#4E7628] lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-[#4E7628] border-2 border-[#4E7628] hover:border-2 hover:border-white  transition-duration duration-300 rounded-lg bg-white">
                                    <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg  mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Our Key Pillars</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><LuTarget className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Scope</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Covers topics such as capital structure, financial decision-making, dividend policy, and working capital management.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Includes portfolio management, asset pricing, risk-return evaluation, and investment strategies across various asset classes.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular"> Focuses on board structures, shareholder rights, regulatory compliance, and ethical practices in financial management.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Explores fintech, market efficiency, behavioral finance, and the impact of emerging technologies on corporate finance.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><LuAward className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Mission</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Promote quality research in corporate finance and investment to advance knowledge and academic excellence globally.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Bridge academic theory with real-world financial practices through innovative, practical, and impactful research publications.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Encourage ethical standards, transparency, and responsible financial behavior in corporate and investment decision-making processes.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Facilitate global collaboration among scholars, professionals, and policymakers to address evolving financial and investment challenges.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><LuFileCheck className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Publication Ethics</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Authors must submit original work, properly cited, and free from plagiarism or duplicate content issues.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">All listed authors should contribute significantly to the research and disclose any potential conflicts transparently.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Submitted manuscripts undergo a double-blind peer review to ensure fairness, accuracy, and academic integrity.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Research must follow ethical standards, with required approvals for studies involving human or animal subjects.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><LuUsers className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Audience</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Academic researchers seeking to publish and access advanced studies in corporate finance and investment fields.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Financial professionals interested in applying research-based insights to corporate decision-making and investment strategies.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Policy makers looking for evidence-based research to support financial regulations and economic development initiatives.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Graduate students aiming to enhance their knowledge through current research and emerging financial trends.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <section className="mb-8">
                    <div className="rounded-lg p-8 shadow-lg border-2 border-[#759457]">
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Submission Guidelines</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Authors should ensure their manuscript is original, unpublished, and not under review elsewhere.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Submissions must adhere to the journal's formatting and referencing guidelines, available on the website.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Manuscripts should include an abstract, keywords, and a brief cover letter outlining research significance.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">All submissions undergo a double-blind peer review process to ensure quality and relevance.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/authorguidelinespage')}
                                className="group relative overflow-hidden px-8 py-3 bg-[#4E7628] rounded-lg text-white poppins-medium  cursor-pointer "
                            >
                                <span className="relative z-10 flex items-center">
                                    View Complete Guidelines
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

export default Aboutus