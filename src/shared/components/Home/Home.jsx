import React from 'react';
import dash from '/assets/ijcfibook.png';
import right from '/assets/Right.png';
import { Link, useNavigate } from "react-router-dom";
import { FaBookOpen, FaGlobeAmericas, FaUpload } from 'react-icons/fa';
import { ImUpload2 } from 'react-icons/im';


const Home = () => {
  const navigate = useNavigate();

  const researchDomains = [
    'Capital budgeting',
    'Cost of capital',
    'Working capital management',
    'Dividend policy',
    'Liquidity management',
    'Budgetary control',
    'Financial leverage',
    'Profit maximization',
    'Capital structure',
    'Debt financing',
    'Equity financing',
    'Policy Analysis',
    'Portfolio diversification',
    'Asset allocation',
    'Risk-adjusted returns',
    'Mutual funds',
    'Investment horizon',
    'Fundamental analysis',
    'Technical analysis',
    'Derivatives',
    'Market efficiency',
    'Stock valuation',
    'Behavioral finance',
    'Investment appraisal',
    'Ethics in finance',
    'ESG investing',
    'Audit committee',
    'Risk governance',
    'Financial transparency',
    'Sarbanes-Oxley Act',
    'Regulatory compliance',
    'Executive compensation',
    'Agency theory',
    'Shareholder rights',
    'Board of directors',
    'Corporate governance',

  ];

  // Group domains into categories for visual appeal
  const domainCategories = {
    "Corporate Financial Management": researchDomains.slice(0, 12),
    "Investment Strategies and Portfolio Management": researchDomains.slice(12, 24),
    "Corporate Governance and Financial Regulation": researchDomains.slice(24)
  };

  return (
    <div>
      <div>
        <main className="w-full text-justify ">
          <div className='lg:flex justify-evenly items-center gap-5 lg:bg-gradient-to-r bg-gradient-to-b from-[#D9E0D1] via-[#4E7628] to-[#4E7628] p-4 rounded-lg mb-7'>
            <div className='hidden lg:block  '>
              <img src={dash} alt="image" className=' max-w-[150px] max-w-auto  ' />
            </div>
            <div>
              <h1 className="text-xl  lg:text-2xl  mb-3 lg:mb-4 lg:text-white text-[#4E7628] lg:pl-6 poppins-bold">
                Welcome to IJCFI
              </h1>
              <img src={dash} alt="image" className='min-w-[200px] max-w-[250px] mx-auto w-full h-auto mb-3 lg:hidden block ' />
              <p className="  text-white mb-3 lg:mb-4   poppins-medium max-w-[1094px] lg:pl-6">
                The International Journal of Corporate Finance and Investment  is a peer-reviewed academic journal dedicated to advancing knowledge in the fields of corporate finance, investment strategies, and financial management. The journal provides a platform for scholars, researchers, and professionals to share original research, case studies, and theoretical insights. IJCFI aims to bridge the gap between financial theory and practical application in the corporate world. Topics of interest include capital structure, corporate governance, mergers and acquisitions, asset pricing, and investment analysis.                  </p>

              <div className="pl-6 ">
                <Link to="https://www.ijcfi.com/ijcfi/index.php/ijcfi/about/submissions" target="_blank" rel="noopener noreferrer">
                  <button className="hover:text-white poppins-regular hover:bg-[#4E7628] lg:p-1 lg:px-4   py-1 px-2 cursor-pointer text-[#4E7628] border-2 border-[#4E7628] hover:border-2 hover:border-white  transition-duration duration-300 rounded-lg bg-white">
                    <div className="flex justify-between  text-nowrap gap-2 "> Submit Paper <ImUpload2 className="mt-1" /></div>
                  </button>
                </Link>
              </div>
            </div>

          </div>

          <div className='bg-[#FAFAFA] rounded-lg mb-7 border-2 border-[#759457]'>
            <div className='text-center flex flex-col gap-4 mb-4'>
              <h2 className='poppins-bold lg:text-2xl text-xl text-[#4E7628] mt-4'>About the Journal</h2>
              <p className='poppins-regular lg:px-28 px-3 lg:text-center text-justify'><span className='text-[#4E7628] poppins-bold'>The International Journal of Corporate Finance and Investment </span> is committed to publishing high-quality research that explores critical issues in corporate finance, investment analysis, and financial decision-making. Our mission is to support academic excellence and foster innovation by providing a global platform for scholars, professionals, and industry experts. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 lg:px-10 px-3 pt-4'>

              <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>

                <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaBookOpen className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Our Mision</h2></div>
                <div>
                  <p className='poppins-regular'>Our mission is to advance the understanding of corporate finance and investment through the dissemination of innovative research and practical insights. IJCFI aims to bridge academia and industry by promoting high-quality studies that address real-world financial challenges and opportunities.</p>
                </div>
                <div className="px-4 lg:px-0  flex justify-end items-end  ">
                  <button className="bg-[#4E7628] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 cursor-pointer " onClick={() => navigate('/aboutus')}>
                    <div className='flex justify-between gap-3  '>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
              </div>
              <div className='bg-white border-2 border-[#759457] p-4 rounded-lg space-y-4 hover:shadow-xl transition-all duration-300'>

                <div className='flex justify-start gap-3'><div className='rounded-full bg-[#4E7628] p-4'><FaGlobeAmericas className='w-[29px] h-[29px] text-white' /></div><h2 className='poppins-bold text-[#4E7628]  text-xl flex items-center'>Aim  & Scope</h2></div>
                <div>
                  <p className='poppins-regular'>The aim of IJCFI is to promote the advancement of knowledge in corporate finance and investment by publishing high-quality, original research. The journal seeks to foster a deeper understanding of financial strategies, corporate decision-making, and investment practices across global markets.</p>
                </div>
                <div className="px-4 lg:px-0  flex justify-end items-end  ">
                  <button className="bg-[#4E7628] text-white px-4 py-2 rounded-lg  poppins-bold mt-3 cursor-pointer" onClick={() => navigate('/aimscope')}>
                    <div className='flex justify-between gap-3'>  Learn More
                      <img src={right} alt="Submit Icon" />
                    </div>
                  </button>
                </div>
              </div>

              <div></div>
            </div>
          </div>



          {/* Key Research Domains Section */}
          <section className="bg-white border-2 border-[#759457]   rounded-2xl  mb-7 lg:mb-4 w-full  ">

            <h2 className="text-center text-xl poppins-bold mt-4 text-[#4E7628] ">
              Key Research Domains
            </h2>

            <p className="text-center text-base lg:text-xl mb-3 lg:mb-4  text-[#000000] poppins-bold px-4 lg:px-0 mt-4 ">
            The journal covers the following areas of  Corporate Finance and Investment
            </p>
            <div >
              <div>
                {Object.entries(domainCategories).map(([category, domains], index) => (
                  <div key={category} className="mb-6">
                    <h3 className="lg:text-xl text-lg poppins-bold text-[#4E7628] mb-6 px-4 ">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                      {domains.map((domain, i) => (
                        <div
                          key={i}
                          className="flex items-center p-4 bg-[#F0F0F0] rounded-lg shadow-sm hover:shadow-md hover:bg-[#c8e6aa] transition-all duration-300 "
                        >
                          <span className="text-black poppins-regular">{domain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Submission Info Section */}
          <section className="w-full rounded-none lg:rounded-lg text-center">
            <p className=" mb-2 poppins-regular lg:text-base px-4 lg:px-0 text-pretty">
              We publish original research articles, review articles, and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions. Our fast reviewing process is our strength.
            </p>
            <div className="bg-[#4E7628] rounded p-2 mx-4 lg:mx-0">
              <p className="text-white poppins-bold  text-sm lg:text-base">
                The last date for manuscript submission for the next issue is June 22, 2025
              </p>
            </div>
            <p className="text-black mt-2 poppins-regular   px-4 lg:px-0">
              With Warm Regards, <br />
             <span className='text-[#4E7628]'>Editor-in-Chief</span> <br />
              <span className="font-bold">IJCFI</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
