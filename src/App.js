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


function App() {

  const [bgclrStrng, setbgClrStrng] = useState("#ff4949"); //For Blinking Missing Button
  const [txtclrStrng, settxtclrStrng] = useState("#ffffff"); //For Blinking Missing Button
  const [progress, setProgress] = useState(0); //For Progress Bar
  const [arrayLength, setArrayLength] = useState(0);

  

  


  useEffect(() => {setArrayLength((adultData.length)-1)}, [arrayLength])



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
                    childImg={childrenData[0].img}
                  />


                  <Details
                    fullName={childrenData[0].fullName}
                    fullInfo={childrenData[0].address}
                    phone={"+91 9011507760"}
                    btnText={"Found? Call Parents"}
                  />


                  <AdultMissingTile
                    missingSince={adultData[arrayLength].missingDate}
                    img={adultData[arrayLength].img}
                    fullName={adultData[arrayLength].fullName}
                    fullInfo={adultData[arrayLength].address}
                    phone={adultData[arrayLength].contactNumber}
                  />


                  {/* {adultData.map((singleAdultObj) => {
                    return(
                      <AdultMissingTile
                    missingSince={singleAdultObj.missingDate}
                    img={singleAdultObj.img}
                    fullName={singleAdultObj.fullName}
                    fullInfo={singleAdultObj.address}
                    phone={singleAdultObj.contactNumber}
                  />

                    )
                  })} */}

                  



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


            



            
          </>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
