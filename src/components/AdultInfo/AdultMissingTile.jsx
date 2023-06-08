import React from 'react';
import CallBtn from '../Buttons/CallBtn';

function AdultMissingTile(props){
    return(

        <div className="div6">
        <a href="#" className="flex flex-col bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <button className="missingAdult">{props.missingSince}</button>
          <div className="image-container">
            <img className="object-cover w-full h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.img} alt="" />
          </div>
          <div className="flex flex-col adultTextDiv p-4 leading-normal">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.fullName}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.fullInfo}</p>
            <CallBtn btnText1={"Seen Anywhere? Call Family"} btnPhoneNumber={props.phone}/>
          </div>
        </a>
      </div>
      


    );
};

export default AdultMissingTile;







{/* <div className="div6">
            <a href="#" className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <button className="missingAdult">{props.missingSince}</button>
            <img className="object-cover w-full h-full md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.img} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.fullName}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.fullInfo}</p>
            <CallBtn btnText1={"Seen Anywhere? Call Family"} btnPhoneNumber={props.phone}/>
        </div>
            </a>
    </div> */}