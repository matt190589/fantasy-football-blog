import { useState } from "react";

export default function Search({ searchTags }) {
  const [allPosts, setAllPosts] = useState([]);

  const filterPosts = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredPosts = allPosts.filter((user) =>
      `${searchTags.tags}`.toLowerCase().includes(value)
    );
    setAllPosts(filteredPosts);
  };

  return (
    <div className="search">
      <div>
        <input
          className="search-box"
          placeholder="Enter team or player"
          onInput={filterPosts}
        />
      </div>
    </div>
  );
}

//Next steps on this function
//Appropriate tags or arrays should be added to the markdown files
//Import these put them into a state on the app page
// Pass the object down and replace the dummy props in the above function
//Send target value down as props
//Adjust the mapping on the results and test filtering
//Add CSS and positioning to the search functionality
