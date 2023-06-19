import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function AddDataAdmin(props){
   
    // const [file, setFile] = useState(null);

    // const submitData = async (e) => {
    //   e.preventDefault();
  
    //   const formData = new FormData();
    //   formData.append('file', file);
  
    //   try {
    //     const response = await axios.post('http://localhost:3001', formData);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  
    // const handleFileChange = (e) => {
    //   setFile(e.target.files[0]);
    // };

    return(
        <div className="AddDataAdmin div13">

            
            <form method='post' action='http://192.168.0.72:3001' encType="multipart/form-data">

                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white addMisingChild">{props.formTitle}<span className='admin'>{props.formUser}</span></label>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Child's Full Name</label>
                    <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Full Name" name='fullName' required/>
                </div>
                <div class="mb-6">
                    
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Child's Full Address</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter full address of child..." name='address' required></textarea>

                </div>
                <div class="mb-6">
                    
                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                    <div class="flex">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        +91
                    </span>
                    <input type="number" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact Person's Phone Number" name='contactNumber' required/>
                    </div>

                </div>
                <div className="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Child's Photo</label>
                    <input class="block  cursor-pointer p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-describedby="user_avatar_help" id="user_avatar" type="file" name='image' accept="image/*" download="filename" required/>
                    <div class="mt-3 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Please upload recently taken and clear picture that clearly shows the child's face.</div>

                </div>

                <button type="submit" class="text-white mt-4 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Child</button>
            </form>


        </div>
    );
};

export default AddDataAdmin;