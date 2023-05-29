import React from 'react';
import CallBtn from './Buttons/CallBtn';


function Details(props){
    return(
        
        <div className="div4"> 
            <h2 className="DetailsHeading">{props.titleText}</h2>
            <p className="DetailsInfo">{props.info}</p>
            <p className="phonetext"><strong>{props.phone}</strong></p>
             <CallBtn btnText1={props.btnText} btnPhoneNumber={props.phone}/> 
             
             
            {/* To use custome button and number pass props here as shown below*/}
            {/* <CallBtn btnText1={"Call Parents"} btnPhoneNumber={"9011507760"} */}
        </div>
    );
};

export default Details;