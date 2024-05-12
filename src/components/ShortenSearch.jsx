import React, { useState, useEffect } from 'react'
import '../App.css'
import brand from "../assets/images/icon-brand-recognition.svg"
import detailed from "../assets/images/icon-detailed-records.svg"
import customizable from "../assets/images/icon-fully-customizable.svg"
import axios, { AxiosHeaders } from 'axios'
import { v4 as uuidv4 } from 'uuid';

const ShortenSearch = () => {
  const [userInputLink, setUserInputLink] = useState("");
  const [userError, setUserError] = useState(null);
  const [shortenLinkArray, setShortenLinkArray] = useState([]);
  // const [isCopied, setIsCopied] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  // useEffect(() => {
  //   console.log("ShortenLinkArray: ", shortenLinkArray);
  // }, [shortenLinkArray])


  const handleChange = (event) => {
    setUserError(false)
    setUserInputLink(event.target.value);
    // console.log(userInputLink);
  }

  const handleClickCopy = async (id) => {
    // console.log(`The copy ID is: ${id}`);

    let linkToCopy = shortenLinkArray.find(item => item.id === id);
    try {
      await navigator.clipboard.writeText(linkToCopy.result_url);
      // console.log('Link copied to clipboard:', linkToCopy.result_url);
    } catch (error) {
      console.error(error);
    }

    const updatedLinks = shortenLinkArray.map(link => {
      if (link.id === id) {
        return {
          ...link,
          copy: "Copied!",
          isCopied: true
        };
      }
      return link
    });

    setShortenLinkArray(updatedLinks);
    // console.log(shortenLinkArray);
    // setIsCopied(true);
  }

  const handleClickShorten = async (event) => {
    // console.log(userInputLink);
    if (userInputLink) {
      // console.log(JSON.stringify(userInputLink))
      let response = await fetch("http://127.0.0.1:3000/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userInputLink: userInputLink }) });
      let link = await response.json();
      let obj = {
        id: uuidv4(),
        result_url: link.result_url,
        original_link: userInputLink,
        copy: "Copy",
        isCopied: false
      }
      // console.log("Response is: ", link);
      setShortenLinkArray([
        ...shortenLinkArray,
        obj
      ]);
      // console.log(shortenLinkArray)
    }
    else {
      setUserError(true)
    }
  }

  return (
    <div className='searchStatContainer bg-[#F0F1F6] w-full mt-20 relative'>
      <div className="searchContainer lg:w-[80%] w-[90%] bg-[#3b3054] bg-[url('./assets/images/bg-shorten-desktop.svg')] absolute left-0 right-0 top-[-56px] mx-auto rounded-md">
        <div className='userInput w-full flex md:flex-row flex-col justify-center items-center gap-3 p-8'>
          <label className='w-[80%] relative' htmlFor="input-links">
            <input onChange={handleChange} value={userInputLink} className={`w-[100%] px-4 py-3 rounded-md outline-none border-2 ${userError ? 'placeholder-red-500 border-red-500' : ''}`} type="text" name="input-links" id="input-links" placeholder='Shorten a link here...' />
          </label>
          <button onClick={handleClickShorten} className='bg-[#2acfcf] hover:bg-[#99E3E4] p-3 rounded-md text-white font-semibold md:w-fit w-[80%]'>Shorten It!</button>
        </div>
      </div>

      <div className="shortenLinksDisplay lg:w-[80%] w-[90%] mx-auto flex flex-col gap-3 lg:pt-[4.5rem] md:pt-[4.5rem] pt-32">

        {shortenLinkArray.map((item) => {

          return (
            <div key={item.id} className="linkContainer w-[100%] bg-white flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between px-6 py-2 rounded-sm text-ellipsis overflow-hidden whitespace-nowrap">
              <p className='link font-medium max-w-[40%] text-ellipsis overflow-hidden'>{item.original_link}</p>
              <div className="shortenLinkandButton flex md:flex-row flex-col items-center gap-4">
                <p className='link font-semibold text-[#2acfcf]'>{item.result_url}</p>
                <button onClick={() => handleClickCopy(item.id)} className={`bg-[#2acfcf] hover:bg-[#99E3E4] px-5 py-1 text-white font-semibold rounded-sm md:w-fit w-[85%] ${item.isCopied ? 'bg-[#3b3054] hover:bg-[#3b3054]' : 'bg-[#2acfcf]'}`}>{item.copy}</button>
              </div>
            </div>)

        })
        }

        {/* <div className="linkContainer w-[100%] bg-red-400 flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between px-6 py-2">
          <p className='link md:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button onClick={handleClickCopy} className='bg-[#2acfcf] hover:bg-[#99E3E4] px-5 py-1 text-white font-semibold rounded-sm md:w-fit w-[85%]'>Copy</button>
        </div> */}
      </div>

      <div className="statContainer">
        <div className="advancedStat md:pt-48 pt-36 md:pb-6 pb-20 text-center">
          <div className="advanceInfo md:w-[40%] w-full mx-auto">
            <h2 className='text-4xl font-bold py-2'>Advanced Statistics</h2>
            <p className='text-[#9e9aa7]'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>
        </div>

        <div className="advancedBrand lg:w-[80%] w-[90%] flex md:flex-row flex-col gap-6 relative mx-auto text-center md:text-left">

          <div className="brandRecognition md:w-[30%] w-full h-fit bg-white px-6 rounded-md z-10">
            <h4 className='text-xl font-semibold pt-16'>Brand Recognition</h4>
            <p className='text-[#9e9aa7] pt-2 pb-6'>Boast your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content.</p>
            <div className="brandImg md:w-16 md:h-16 w-20 h-20 rounded-full bg-[#3b3054] absolute md:top-[-32px] top-[-40px] md:left-auto left-[43%]">
              <img className='md:p-4 p-5' src={brand} alt="" />
            </div>
          </div>

          <div className="detailedRecords md:w-[30%] w-full h-fit bg-white px-6 md:my-10 my-16 rounded-md z-10">
            <h4 className='text-xl font-semibold pt-16'>Detailed Records</h4>
            <p className='text-[#9e9aa7] pt-2 pb-6'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            <div className="brandImg md:w-16 md:h-16 w-20 h-20 rounded-full bg-[#3b3054] absolute md:top-[8px] top-[30%] md:left-auto left-[43%]">
              <img className='md:p-4 p-5' src={detailed} alt="" />
            </div>
          </div>

          <div className="fullyCustomizable md:w-[30%] w-full h-fit bg-white px-6 md:my-20 mb-16 rounded-md z-10">
            <h4 className='text-xl font-semibold pt-16'>Fully Customizable</h4>
            <p className='text-[#9e9aa7] pt-2 pb-6'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            <div className="brandImg md:w-16 md:h-16 w-20 h-20 rounded-full bg-[#3b3054] absolute md:top-[48px] top-[65%] md:left-auto left-[43%]">
              <img className='md:p-4 p-5' src={customizable} alt="" />
            </div>
          </div>

          <div className="blueConnectHorizontal md:block hidden w-[60%] h-2 bg-[#2acfcf] absolute left-0 right-0 bottom-[60%] mx-auto z-0"></div>
          {/* <div className="blueConnectHorizontal md:hidden block w-[8px] h-[88vh] bg-[#2acfcf] absolute left-0 right-0 bottom-[15%] mx-auto z-0"></div> */}

        </div>

      </div>

    </div>
  )
}

export default ShortenSearch
