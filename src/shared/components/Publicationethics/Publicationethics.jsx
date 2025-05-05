import React from 'react'
import { Link,} from "react-router-dom";
import { ImUpload2 } from 'react-icons/im';
import dash from '/assets/ijcfibook.png';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdSmsFailed } from 'react-icons/md';

function Publicationethics() {

    return (
        <div>
            <div className="text-justify">
                <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
                    <div className='hidden lg:block  '>
                        <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
                    </div>
                    <div>
                        <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                        Publications Ethics
                        </h1>
                        <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
                        <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                        The International Journal of Corporate Finance and Investment adheres to the highest standards of publication ethics. Authors must submit original, unpublished work, and plagiarism is strictly prohibited. All sources must be properly cited, and conflicts of interest should be disclosed. Manuscripts must be based on ethical research practices, with appropriate consent for studies involving human or animal subjects. The journal follows a double-blind peer review process to ensure impartiality, and any unethical conduct may lead to retraction of published articles.</p>
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
                            <span className="relative z-10 poppins-bold text-[#4E7628]">Ethical Standards and Manuscript Evaluation</span>
                        </span>
                    </h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><GiArchiveResearch  className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Research Integrity</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Authors must submit original research, ensuring all data is accurate, transparent, and free from manipulation.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Proper citation and acknowledgment of sources are required to avoid plagiarism and uphold intellectual property rights.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Ethical research practices must be followed, including obtaining consent for studies involving human or animal subjects.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Authors must disclose any potential conflicts of interest that could influence the outcomes or interpretation of research.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>
                            <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><MdSmsFailed   className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Fail Review Process</h2></div>
                            <div className="space-y-3">
                                <div className="flex items-start ">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2 "></div>
                                    </div>
                                    <p className="poppins-regular">Manuscripts failing to meet academic standards or ethical guidelines will be rejected during the review process.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Papers with insufficient data, flawed methodology, or unaddressed ethical concerns will not proceed to publication.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Reviewers provide constructive feedback, but major issues may prevent resubmission or further consideration of the manuscript.</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-1.5 h-1.5 bg-[#4E7628] rounded-full mr-2"></div>
                                    </div>
                                    <p className="poppins-regular">Manuscripts with plagiarism or data manipulation will be immediately rejected, maintaining the integrity of the journal.</p>
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
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Open Access Policy</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">All published articles are freely accessible to readers worldwide, ensuring global dissemination and enhancing research visibility in corporate finance.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Authors retain copyright of their work while granting the journal the right to publish and distribute their articles openly.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Open access ensures that articles are immediately available for download, promoting the rapid sharing of research and knowledge.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">The journal encourages authors to share their work widely, supporting academic collaboration and advancing discussions in corporate finance and investment.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg  poppins-bold text-center mb-8 text-[#4E7628]">Creative Common License</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">All published articles are licensed under a Creative Commons license, allowing free sharing, use, and redistribution with proper attribution.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Authors retain the copyright of their work, granting the journal permission to distribute and share their research freely.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">The Creative Commons license ensures that published research is accessible, fostering knowledge sharing and collaboration within the academic community.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Readers can freely access, distribute, and use published articles, provided proper attribution is given to the original authors and journal.</p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h2 className="lg:text-2xl text-lg poppins-bold text-center mb-8 text-[#4E7628]">Community Standards</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">Authors must uphold high ethical standards, ensuring that their research is original, unbiased, and free from plagiarism or fabrication.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">The journal promotes respectful communication, encouraging authors, reviewers, and editors to engage constructively in discussions, feedback, and decision-making.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">All submitted content must comply with applicable laws, regulations, and ethical guidelines, particularly regarding human and animal research.</p>
                            </div>
                            <div className="flex items-start">
                            <div className="flex-shrink-0 p-2  bg-[#759457] rounded-full shadow-md mr-4">
                                    <div className="w-2 h-2  bg-white rounded-full"></div>
                                </div>
                                <p className="poppins-regular">The journal fosters diversity and inclusivity, welcoming contributions from authors with varied backgrounds, experiences, and perspectives in finance and investment.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Publicationethics