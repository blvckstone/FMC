import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./css/App.css";
import TitleText from "./components/Heading/TitleText";
import SearchBar from "./components/Heading/SearchBar";
import MissingBtn from "./components/ChildInfo/MissingBtn";
import Details from "./components/ChildInfo/Details";
import AdultMissingTile from "./components/AdultInfo/AdultMissingTile";
import childrenData from "./Data/data";
import RecentList from "./components/List/RecentList";
import DetailedView from "./components/Pages/DetailedView";
import BackHome from "./components/Buttons/BackHome";
import adultData from "./Data/AdultData";
import AddDataAdmin from "./forms/AddDataAdmin";


function App() {

  const [bgclrStrng, setbgClrStrng] = useState("#ff4949"); //For Blinking Missing Button
  const [txtclrStrng, settxtclrStrng] = useState("#ffffff"); //For Blinking Missing Button
  const [progress, setProgress] = useState(0); //For Progress Bar
  const [childrenArrayLength, setChildArrayLength] = useState(0);
  const [adultArrayLength, setAdultArrayLength] = useState(0);
  const currentDate = new Date().getFullYear();
  

  

  


  useEffect(() => {setChildArrayLength((childrenData.length)-1)}, [childrenArrayLength])
  useEffect(() => {setAdultArrayLength((adultData.length)-1)}, [adultArrayLength])



  useEffect(() => {
    //For Progress Bar
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 70);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);




  useEffect(() => {
    //For Blinking Missing Button
    const interval = setInterval(() => {
      setbgClrStrng((prevColor1) =>
        prevColor1 === "#ff4949" ? "#ffffff" : "#ff4949"
      );
      settxtclrStrng((prevColor2) =>
        prevColor2 === "#ffffff" ? "#000000" : "#ffffff"
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (
     <> {/*Added for wrap all html element into single parent element*/}

    {/* -----------------------------------------It will always render that's why not in route------------------------------- */}

       <div className="App"> 
        <LoadingBar
          color="#f11946"
          progress={progress}
          style={{ marginTop: "-15px" }}
        />

        <TitleText text={"Find My Child"} />

        <SearchBar />

    {/*----------------------------------------First Home Routes Here "/" Render all These when go to home--------------------------------------------- */}

        <Routes>
          <>
            <Route path="/" element={<>
              
                  <LoadingBar
                    color="#f11946"
                    progress={progress}
                    style={{ marginTop: "-15px" }}
                  />

                  <MissingBtn
                    text={"Recently Missing"}
                    bgColor={bgclrStrng}
                    txtColor={txtclrStrng}
                    childImg={childrenData[childrenArrayLength].img}
                  />


                  <Details
                    fullName={childrenData[childrenArrayLength].fullName}
                    fullInfo={childrenData[childrenArrayLength].address}
                    phone={childrenData[childrenArrayLength].contactNumber}
                    btnText={"Found? Call Parents"}
                  />


                  <AdultMissingTile
                    missingSince={adultData[adultArrayLength].missingDate}
                    img={adultData[adultArrayLength].img}
                    fullName={adultData[adultArrayLength].fullName}
                    fullInfo={adultData[adultArrayLength].address}
                    phone={adultData[adultArrayLength].contactNumber}
                  />



                  



                </>} 
            ></Route>


  {/*----------------------------------------List Routes Here "/list" Render all These when go to /list--------------------------------------------- */}


            <Route path="/childList" element={<>
              
              
                
                  <LoadingBar
                    color="#f11946"
                    progress={progress}
                    style={{ marginTop: "-15px" }}
                    key="childList" //for loading bar not working when we add  it twice so we added this
                  />


                  {childrenData.map(function (singleData) {
                    return (
                      <RecentList
                        missingSince={"Just Now"}
                        fullName={singleData.fullName}
                        phone={singleData.contactNumber}
                        address={singleData.address}
                        state={singleData.state}
                        missingDate={singleData.missingDate}
                        img={singleData.img}
                        status={false}
                      />
                    );
                  })}
                  <BackHome />
                </>
              }
            ></Route>



            <Route path="/adultList" element={<>
              
              
                
              <LoadingBar
                color="#f11946"
                progress={progress}
                style={{ marginTop: "-15px" }}
                key="adultList" //for loading bar not working when we add  it twice so we added this
              />


              {adultData.map(function (singleAdultObj) {
                return (
                  <RecentList
                    missingSince={"Just Now"}
                    fullName={singleAdultObj.fullName}
                    phone={singleAdultObj.contactNumber}
                    address={singleAdultObj.address}
                    state={singleAdultObj.state}
                    missingDate={singleAdultObj.missingDate}
                    img={singleAdultObj.img}
                    status={false}
                  />
                );
              })}
              <BackHome />
              </>
            }
            ></Route>





            <Route path={"/:postName"} element={<>
              
              
                
                  <LoadingBar
                    color="#f11946"
                    progress={progress}
                    style={{ marginTop: "-15px" }}
                    key="details" //for loading bar not working when we add  it twice so we added this
                  />

                  <DetailedView />
                  <BackHome />

                </>}
              
            ></Route>







            <Route path={"/childList/:postName"} element={<>
              
              
                
              <LoadingBar
                color="#f11946"
                progress={progress}
                style={{ marginTop: "-15px" }}
                key="details" //for loading bar not working when we add  it twice so we added this
              />

              <DetailedView />
              <BackHome />

            </>}
          
            ></Route>



            <Route path={"/adultList/:postName"} element={<>
              
              
                
              <LoadingBar
                color="#f11946"
                progress={progress}
                style={{ marginTop: "-15px" }}
                key="details" //for loading bar not working when we add  it twice so we added this
              />

              <DetailedView />
              <BackHome />

              </>}
          
            ></Route>


            <Route path="/add" element={<>

              <LoadingBar
                color="#f11946"
                progress={progress}
                style={{ marginTop: "-15px" }}
                key="add" //for loading bar not working when we add  it twice so we added this
              />

            <AddDataAdmin 
            formTitle={"Add Missing Child"}
            formUser={"Admin"}
            />
            
            
            
            
            </>}>
            </Route>


            



            
          </>
        </Routes>

        <footer className="div12"><p>{currentDate} &copy; <span id="currentYear"></span>  All rights reserved | گمشدہ بچوں کی تلاش گروپ<br/> Developed By Shoeb</p></footer>
        
      </div>
    </>
  );
}

export default App;
