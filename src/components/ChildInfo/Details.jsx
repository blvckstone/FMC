import React from 'react';
import CallBtn from '../Buttons/CallBtn';


function Details(props){
    return(
        
        
        <div className="div9">
            <a href="#" className="block  p-4 bg-white  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.fullName}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.fullInfo}</p>
            <h6 className="mb-1 mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.phone}</h6>
            <CallBtn btnText1={props.btnText} btnPhoneNumber={props.phone}/> 
            </a>

        </div>
    );
};

export default Details;