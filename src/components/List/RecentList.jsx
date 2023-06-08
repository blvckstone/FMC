import React from 'react';
import SingleListItem from './SingleListItem';


function RecentList(props){

    

    return(

        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">

            <SingleListItem 
                missingSince={props.missingSince} 
                fullName={props.fullName} 
                phone={props.phone} 
                address={props.address}
                state={props.state}
                missingDate={props.missingDate}
                img={props.img}
                status={props.status}/>
            
        </ul>
   

    );
};


export default RecentList;