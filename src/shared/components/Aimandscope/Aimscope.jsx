import React from 'react'
import { Link,} from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijcfibook.png';
import { LuTarget } from 'react-icons/lu';
import { AiOutlineAim } from 'react-icons/ai';

function Aimscope() {

    return (
        <div>
            <div className="text-justify">
                <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
                    <div className='hidden lg:block  '>
                        <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                    </div>
                    <div>
                        <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                            Aim and Scope
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        The International Journal of Corporate Finance and Investment  aims to advance the field of finance by publishing high-quality, peer-reviewed research focused on corporate financial practices and investment strategies. The journal seeks to provide a platform for academics, practitioners, and policymakers to exchange insights on current financial issues and innovations. Its scope includes a wide range of topics such as capital markets, corporate governance, financial risk management, and portfolio analysis. IJCFI encourages interdisciplinary approaches and global perspectives that contribute to both theory and practice.</p>
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
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Corporate Finance and Investment</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><AiOutlineAim className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Aim</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Promote high-quality research in corporate finance and investment to support academic and practical financial advancements.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Encourage innovative financial models, theories, and practices applicable in real-world corporate and investment settings.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular"> Provide a global platform for knowledge exchange among researchers, professionals, and policymakers in financial domains.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Foster ethical, transparent, and responsible research contributing to sustainable financial decision-making and strategic investments.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><LuTarget className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Scope</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Examine corporate finance theories, investment strategies, financial markets, and risk management practices globally.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Publish empirical studies, theoretical models, case studies, and financial analysis in corporate finance.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Finance professionals, academics, investors, policymakers, and researchers interested in corporate finance and investments.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Strict peer review process ensuring high-quality, impactful articles addressing contemporary corporate finance and investment trends.</p>
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
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Research Areas</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Research on capital structure, dividend policy, working capital management, and financial planning strategies in both emerging and developed markets.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Studies covering asset pricing, portfolio theory, investment strategies, risk-return trade-offs, and behavioral finance in domestic and international financial markets.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Analysis of merger strategies, acquisition valuation, corporate governance impacts, and post-merger performance evaluations across diverse sectors and regions.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Exploration of environmental, social, and sustainable investment practices, green bonds, and their effects on corporate performance and investor behavior.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Global Perspectives</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Encourages comparative studies on corporate finance practices across different countries, highlighting regional trends, challenges, and regulatory frameworks.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Promotes cross-border investment research, including multinational corporation financial strategies and international capital flow dynamics.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Supports analysis of global financial crises, policy responses, and their long-term impact on corporate finance and investment decisions worldwide.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Welcomes diverse economic perspectives, showcasing emerging market developments and their influence on global corporate finance and investment patterns.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg poppins-bold text-center mb-8 text-[#4E7628]">Emerging Topics of Interest</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Fintech innovations in corporate finance, including blockchain applications, digital assets, and AI-driven financial decision-making tools.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Impact of climate change and sustainability on corporate financial policies, investment decisions, and long-term value creation strategies.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Role of decentralized finance (DeFi) in reshaping traditional corporate financing and investment models in a globalized economy.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Influence of geopolitical risks and global economic shifts on corporate capital allocation, investment strategies, and financial resilience planning.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Aimscope