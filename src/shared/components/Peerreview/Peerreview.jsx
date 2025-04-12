import React from 'react'
import { Link,} from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijcfibook.png';
import { MdLibraryBooks } from 'react-icons/md';
import { FaHandPointRight } from 'react-icons/fa';

function Peerreview() {

    return (
        <div>
            <div className="text-justify">
                <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
                    <div className='hidden lg:block  '>
                        <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                    </div>
                    <div>
                        <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                        Peer review Process
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        All submitted manuscripts undergo a double-blind peer review process to ensure impartiality and maintain the highest academic standards. The editorial team initially evaluates submissions for relevance, quality, and alignment with the journal's scope. Suitable manuscripts are then sent to expert reviewers in the field, who assess the paper’s methodology, analysis, and contribution to existing literature. Authors are provided with feedback and may be required to revise their work. Final acceptance is based on the reviewers recommendations and the manuscript's overall quality.</p>
                        {/* <div className="pl-6 ">
                            <Link to="" target="_blank" rel="noopener noreferrer">
                                <button className="hover:text-white poppins-regular hover:bg-[#4E7628] lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-[#4E7628] border-2 border-[#4E7628] hover:border-2 hover:border-white  transition-duration duration-300 rounded-lg bg-white">
                                    <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg  mb-7 border-2 border-[#759457]'>
                    <h2 className="text-lg lg:text-xl font-bold text-center mb-4 flex items-center justify-center mt-4">
                        <span className="relative">
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4E7628]"></span>
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Submission Guidelines and Author Rewards</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><MdLibraryBooks className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Requirements</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Submit original, unpublished research related to corporate finance, investment strategies, or financial market analysis.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Manuscripts should follow the journal's formatting guidelines and include abstract, keywords, methodology, and references.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors must ensure ethical research practices, disclose conflicts of interest, and comply with submission policies.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Manuscripts undergo double-blind peer review, requiring authors to address reviewer feedback for potential revisions.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaHandPointRight  className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Benefits</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Gain global exposure by publishing research, reaching academic professionals, industry experts, and policymakers in finance.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Enhance professional recognition and credibility through high-impact publications in a respected academic finance journal.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Increase citation opportunities, contributing to the advancement of corporate finance and investment knowledge worldwide.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Receive constructive feedback from experts, helping improve research quality and fostering future collaborative opportunities.</p>
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
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Research Article</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Presents original research with a clear focus on corporate finance, investment strategies, financial markets, or related financial theories and models.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Utilizes empirical data, quantitative analysis, or case studies to explore contemporary issues in corporate finance, investment, or financial management.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Contributes to advancing academic understanding, providing new insights into the dynamics of financial markets, corporate strategies, and investment practices.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Includes a well-structured methodology, comprehensive analysis, and clear conclusions that offer practical implications for finance professionals and researchers.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Review Article</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Provides a comprehensive synthesis of existing research, identifying key trends, challenges, and gaps in corporate finance and investment literature.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Analyzes theoretical frameworks, methodologies, and key findings from multiple studies to offer a holistic view of financial practices.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Highlights emerging trends, future research directions, and practical implications for industry professionals and policymakers in corporate finance and investment.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Evaluates current theories, models, and practices, offering critical insights into their strengths, weaknesses, and potential for further exploration.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg poppins-bold text-center mb-8 text-[#4E7628]">Technical Article</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Focuses on advanced quantitative models, algorithms, or computational methods used to address corporate finance and investment problems in-depth.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Provides detailed analysis of financial data, including mathematical proofs, algorithms, and statistical models applied in real-world financial situations.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Explores cutting-edge tools and technologies, such as machine learning, AI, and blockchain, for improving corporate financial strategies and investment decisions.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Includes practical applications, simulations, or case studies demonstrating the effectiveness of technical approaches in corporate finance and investment management.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Peerreview