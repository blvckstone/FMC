import React from "react";
import childrenData from '../../data';
import RecentList from "../List/RecentList";


function ViewAllList(){

    





    return(
        <>
                {childrenData.map(function(singleData){

                    return( 

                    
                        
                        <RecentList 
                            missingSince={"Just Now"} 
                            fullName={singleData.fullName} 
                            phone={singleData.contactNumber} 
                            address={singleData.address}
                            state={singleData.state}
                            missingDate={singleData.missingDate}
                            img={singleData.img}
                            status={false}/>
                        
                    
             
             
                    ) 
            }
           )
          }
     </>
    );
};

export default ViewAllList;