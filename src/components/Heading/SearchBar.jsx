import React, { useState } from 'react';
import childrenData from '../../data';
import RecentList from '../List/RecentList';

function SearchBar(props) {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  

  function handleChange(event) {
    const searchQuery = event.target.value;
    
    // searchForQuery(searchQuery);

    if (searchQuery.length >= 3) {
      searchForQuery(searchQuery);
    } else {
      setFilteredData([]);
    }
  }

  function searchForQuery(searchQuery) {
    // Check if the search query has at least 3 characters
    if (searchQuery.length >= 3) {
      const filtered = childrenData.filter(function (data) {
        const fullName = data.fullName.toLowerCase();
        const contNumber = data.contactNumber;
        let query = searchQuery.toLowerCase();
        
        // Compare the strings character by character
        for (let i = 0; i < query.length; i++) {
          if (fullName[i] !== query[i]) {
            return false;
          }
        }
        
        return true;
      });
      setFilteredData(filtered);
    } else {
      
      setFilteredData([]);
    }
  }

 

  return (
    <div className="div1">
      <h1>{value}</h1>
      <input
        type="text"
        onChange={handleChange}
        id="search"
        className="inp1"
        placeholder="Searching for..."
      />

      {
        filteredData.map((data) => (
          <RecentList
            key={data.fullName}
            missingSince={"Just Now"}
            fullName={data.fullName}
            phone={data.contactNumber}
            address={data.address}
            state={data.state}
            missingDate={data.missingDate}
            img={
              "https://images.unsplash.com/photo-1581841899040-8b5e38bae033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwY2hpbGR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            }
            status={false}
          />
        ))
      }
    </div>
  );
}

export default SearchBar;
