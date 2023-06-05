import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './css/App.css';
import TitleText from './components/Heading/TitleText';
import SearchBar from './components/Heading/SearchBar';
import MissingBtn from './components/ChildInfo/MissingBtn';
import Details from './components/ChildInfo/Details';
import RecentList from './components/List/RecentList';
import AdultMissingTile from './components/AdultInfo/AdultMissingTile';
import childrenData from './data';
import ViewAllList from './components/Pages/ViewAllList';




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
    <>
    
    
     <div className="App"> 

                <TitleText text={"Find My Child"}/>

                <SearchBar />

                <Routes><>
      
        
    

                  <Route path='/' element={<>
                    <MissingBtn 
                      text={"Recently Missing"} 
                      bgColor={bgclrStrng} 
                      txtColor={txtclrStrng}
                      childImg={'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
          
          
                    <Details 
                      fullName={childrenData[0].fullName}
                      fullInfo={childrenData[0].address}
                      phone={"+91 9011507760"}
                      btnText={"Found? Call Parents"}/>
            
                    <AdultMissingTile 
                      missingSince={"Missing Since 20-05-2022"} 
                      img={"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"} 
                      fullName={"John Fredric, Age 25"} 
                      fullInfo={"We deeply regret to inform you that this person has been reported missing. Our hearts ache for the uncertainty."} 
                      phone={"9011507760"}/>


                    
            
            
            
                  </>}></Route>



          

              
                <Route path='/list' element={
                 <ViewAllList />
                }></Route>
              
              
              
              

      </>
      </Routes>
    </div> 
    

    
  </>
  );
};


export default App;
