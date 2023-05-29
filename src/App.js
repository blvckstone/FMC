import React, { useState, useEffect } from 'react';
import './App.css';
import TitleText from './components/TitleText';
import SearchBar from './components/SearchBar';
import MissingBtn from './components/MissingBtn';
import Details from './components/Details';
import CallBtn from './components/Buttons/CallBtn';


function App(){

  const [bgclrStrng, setbgClrStrng] = useState("#ff4949")
  const [txtclrStrng, settxtclrStrng] = useState("#ffffff")

  useEffect(() => {
    const interval = setInterval(() => {
      setbgClrStrng((prevColor1) => (prevColor1 === "#ff4949" ? "#ffffff" : "#ff4949"));
      settxtclrStrng((prevColor2) => (prevColor2 === "#ffffff" ? "#000000" : "#ffffff")) 
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return(
    <div className="App">
    
        <TitleText 
          text={"Find My Child"}/>

        <SearchBar />

        <MissingBtn 
          text={"Recently Missing"} 
          bgColor={bgclrStrng} 
          txtColor={txtclrStrng}
          childImg={'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>

        <Details 
          titleText={"Emergency Details"}
          info={"At vero eos et accusamus et iusto odio dignissimos ducimus"}
          phone={"+91 9011507760"}
          btnText={"Found? Call Parents"}/>

        
        

        {/* <div className="div5">
          <div className="tile1"><img className='tileImg' src="https://images.unsplash.com/photo-1581841899040-8b5e38bae033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwY2hpbGR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /></div>
          <div className='tileDivText'><h3>Asjad Kamal</h3></div>
          
        </div> */}



        <div className="div6">
          <a href="https://localhost:3000" class="flex  flex-col items-center bg-white  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <button className='missingAdult'>Missing Since 20-05-2022</button>
              <img class="object-cover w-full  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" alt="" />
              
              <div class="flex flex-col justify-between p-4 leading-normal">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John Fredric, Age 25</h5>
                 <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We deeply regret to inform you that this person has been reported missing. Our hearts ache for the uncertainty.</p>
                 <CallBtn btnText1={"Seen Anywhere? Call Family"} btnPhoneNumber={"9011507760"}/>
              </div>
          </a>
        </div>


        <div className="div7">
        <button className="footer">
          Designed & Maintained By Shoeb
        </button>
        </div>

          

        
        

        













    </div>
  );
};


export default App;
