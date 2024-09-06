import React from "react";

function BoardingPage() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/My Resume.pdf'; 
    link.download = 'My Resume.pdf';
    link.click();
  }

  const handleMail = () => {
    window.location.href = 'mailto:vardhansachin08@gmail.com';
  };

  return (
    <>
      <div className="bg-white font-mono pb-8">
        <h1 className="flex justify-center text-black text-xl pt-3">
          Hello, I'am Sachin Vardhan
        </h1>
        <div className="w-full h-auto flex flex-wrap justify-evenly pt-11">
          <div className="h-auto w-[40%] bg-black text-white rounded-2xl flex flex-col gap-2 justify-center items-center p-14">
            <img
              className="h-24 w-24 rounded-full"
              src="./src/assets/SachinVardhan.jpg"
            />
            <h1>Sachin Vardhan</h1>
            <p>
              Android Dev | Web Dev | Leetcode | Codeforces (max-958) | Codechef
              2 Star
            </p>
            <div className="flex gap-5 text-sm">
              <a href="https://www.linkedin.com/in/sachin-vardhan-06/">
                <button className="bg-blue-700 rounded-md p-1 hover:bg-white hover:text-blue-700 ">
                  Linkdin
                </button>
              </a>
              <button onClick={handleDownload}  className="bg-blue-700 rounded-md p-1  hover:bg-white hover:text-blue-700 ">
                Resume
              </button>
            </div>
          </div>
          <div className="h-auto w-[40%] bg-black text-white flex flex-col justify-center items-center p-14 rounded-xl gap-2">
            <p className="text-sm">
              3rd Year,Computer Science and Engineering (2026)
            </p>
            <p className="text-sm">Greater Noida</p>
            <div className="flex gap-2 flex-wrap">
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                Problem Solving
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                C++
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                Python
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                JavaScript
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                React Js
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                Flutter
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                Dart
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                Algoritism
              </button>
              <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                Data Structure
              </button>
            </div>
            <div className="flex justify-row gap-x-5 pt-5">
              <a href="https://www.linkedin.com/in/sachin-vardhan-06/">
                <img
                  className="h-8 w-8"
                  src="https://imgs.search.brave.com/SQsaFNKXL9x2pacICOrPpnY5c1-Eee1Vf0jOmntInaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                  alt=""
                />
              </a>
              <a href="https://github.com/SachinVardhan06">
                <img
                  className="h-8 w-8"
                  src="https://imgs.search.brave.com/fFJ8rDRdI_-CJdRcnXLSNoYfYOEXyBSg9igJC7Ic2jQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi0xMDI0eDk5/NC00aDVzZG1rby5w/bmc"
                  alt=""
                />
              </a>
              <a href="https://x.com/SachinVardhan06">
                <img
                  className="h-8 w-8"
                  src="https://imgs.search.brave.com/xF_BwBz-bpV5b0nhz_Od9qtC1iJ84jzayiOAH_pBJ54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2VU/dEZ1VmVLVHdxVEQ0/MlBZTUxXdUEtMzIw/LTgwLmpwZw"
                  alt=""
                />
              </a>
              <a href="" onClick={handleMail}>
                <img
                  className="h-8 w-8 rounded-lg"
                  src="https://static.vecteezy.com/system/resources/previews/000/554/663/original/envelope-icon-vector-illustration.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-6 font-mono">
        <div className="bg-black w-[87%] h-auto rounded-2xl text-white justify-center p-5">
          <h1 className="text-white flex flex-wrap justify-center p-2">
            Coding
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-24 justify-center">
              <div className="flex gap-2">
                <img
                  className="h-6 w-6"
                  src="./src/assets/LeetCode_logo.png"
                  alt=""
                />
                <a href="">
                  <h1>Leetcode:</h1>
                </a>
              </div>
              <ul className="list-disc">
                <li>Maximum Rating 1390</li>
                <li>Solved <span className="text-blue-600">350+</span> problems</li>
              </ul>
            </div>
            <div className="flex flex-row gap-24 justify-center">
              <div className="flex gap-2">
                <img
                  className="h-6 w-6"
                  src="./src/assets/codeforces1.png"
                  alt=""
                />
                <a href="">
                  <h1>Codeforces:</h1>
                </a>
              </div>
              <ul className="list-disc">
                <li>Newbie Maximum Ratings 948</li>
                <li>Solved <span className="text-blue-600">100+</span> problems</li>
              </ul>
            </div>
            <div className="flex flex-row gap-24 justify-center">
              <div className="flex gap-2">
                <img className="h-6 w-6" src="./src/assets/codech.png" alt="" />
                <a href="">
                  <h1>CodeChef:</h1>
                </a>
              </div>
              <ul className="list-disc">
                <li>2 Star Maximum Ratings <span className="text-blue-600">1410</span></li>
                <li>Solved <span className="text-blue-600">150+</span> problems</li>
                <li>Achieved Global rank 781</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-6 font-mono">
        <div className="bg-black w-[87%] h-auto rounded-2xl text-white justify-center pb-5">
          <h1 className="flex justify-center pb-5 pt-3">Academic</h1>
          <div className="text-sm flex flex-wrap flex-row justify-evenly gap-3">
            <p>B.Tech (CSE-AIML)</p>
            <img src="" alt="" />
            <p>Noida Institute of Engineering and Technology</p>
            <p>8.39</p>
            <p>Nov 22 - Current</p>
          </div>
          <div className="text-sm flex flex-wrap flex-row justify-evenly">
            <p>10+2 (PCM) </p>
            <img src="" alt="" />
            <p>Priyanka Modern School, Dhampur</p>
            <p>78%</p>
            <p>Apr 18 - Jun 20</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-7 font-mono gap-3">
        <div className="bg-black w-[87%] h-auto rounded-2xl text-white flex flex-col pb-5">
          <h1 className="flex justify-center pt-3 pb-3">Projects</h1>
          <div className="flex flex-col gap-5 pl-16 pr-16">
            <div className="flex justify-between items-center w-full gap-3">
              <p>Temples Of Bharat</p>
              <a href="https://www.amazon.in/Sachin-Vardhan-Temples-of-Bharat/dp/B0CLKVNV8F/" className="hover:underline hover:text-blue-600">
                Code
              </a>
              <div className="flex gap-2">
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  Flutter
                </button>
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  Dart
                </button>
              </div>
              <a href="https://www.amazon.in/Sachin-Vardhan-Temples-of-Bharat/dp/B0CLKVNV8F/" className="hover:underline hover:text-blue-600">
                Live
              </a>
              <p>Jan 2024</p>
            </div>

            <div className="flex justify-between items-center w-full gap-3">
              <p>AI Store</p>
              <a href="https://github.com/SachinVardhan06/AI-Store" className="hover:underline hover:text-blue-600">
                Code
              </a>
              <div className="flex gap-2">
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  Flutter
                </button>
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  Dart
                </button>
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  API
                </button>
              </div>
              <a href="https://github.com/SachinVardhan06/AI-Store" className="hover:underline hover:text-blue-600">
                Live
              </a>
              <p>Mar 2024</p>
            </div>

            <div className="flex justify-between items-center w-full gap-3">
              <p>Periodic Table</p>
              <a href="https://github.com/SachinVardhan06/Periodic-Table-App" className="undhover:underline hover:text-blue-600">
                Code
              </a>
              <div className="flex gap-2">
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  HTML
                </button>
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  CSS
                </button>
                <button className="text-xs bg-blue-700 cursor-none p-[3px] rounded-md">
                  Javascript
                </button>
              </div>
              <a href="https://sachinvardhan06.github.io/Periodic-Table-App/" className="uhover:underline hover:text-blue-600">
                Live
              </a>
              <p>Aug 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-mono pb-3">
        <h1>
          Made By <span className="hover:text-blue-800"><a  href="https://www.linkedin.com/in/sachin-vardhan-06/">Sachin Vardhan</a></span>
        </h1>
      </div>
    </>
  );
}

export default BoardingPage;
