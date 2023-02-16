import SearchIcon from "@mui/icons-material/Search";

export default function Search({ filterPosts }) {
  return (
    <div className="search">
      <div className="search-inputs">
        <input
          placeholder="Enter fantasy player......"
          onInput={filterPosts}
          type="text"
        />
        <div className="search-icon">
          <SearchIcon />
        </div>
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
