import React from 'react';
import { Link } from 'react-router-dom';

function SingleListItem(props){










    return(
    // <Link to="/about">
    <div className="RecentList div6">
        
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">{props.fullName}</h5>
                    <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-[#05a081]">
                    {props.state}
                    </a>
                </div>
           <div class="flow-root">

                <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">

                        <div class="flex-shrink-0">
                            <img class="w-12 h-12 rounded-full" src={props.img} alt="image"/>
                        </div>

                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {props.address}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {props.phone}
                            </p>
                        </div>

                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {props.missingDate}
                        </div>

                    </div>
                </li>

           </div>
        </div>



    </div>
    // </Link>

    );
};

export default SingleListItem;