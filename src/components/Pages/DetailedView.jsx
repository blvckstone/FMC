import React from "react";
import CallBtn from "../Buttons/CallBtn";
import { useParams } from "react-router-dom";
import childrenData from "../../Data/data";
import adultData from "../../Data/AdultData";

const combinedData = [...childrenData, ...adultData]

function DetailedView() {
  const { postName } = useParams();

  return (
    <>
      {combinedData.map(function (singleObj) {
        if (postName == singleObj.fullName) {
          return (
            <div className="DetailedView div10">
              <div className="bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="object-cover w-full DetailedViewImg"
                    src={singleObj.img}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {singleObj.fullName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {singleObj.address} 
                    
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    
                    {singleObj.contactNumber}
                  </p>
                  <a href="#">
                    {" "}
                    <CallBtn
                      btnText1={"Seen Anywhere? Call Family"}
                      btnPhoneNumber={"9011507760"}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default DetailedView;
