import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from './Listitem';
import AddUser from './Adduser';

const Dropdown = () => {
  const [toggled, setToggled] = React.useState(false);
  const handleToggle = () => setToggled(value => !value);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const countries = ['Singapore', 'Malaysia', 'Indonesia', 'Philippines', 'Thailand', 'India', 'SriLanka', 'Lebanon', 'Myanmar'];

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = countries.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleItem = val => {
    setSearchTerm(val);
  };
  return (
    <div className="custom-select-wrapper">
      <AddUser />
      <div className={"custom-select " + (toggled ? 'open' : '')}>
        <div className="custom-select__trigger" onClick={handleToggle}><span>Tesla</span>
            <div className="arrow"></div>
        </div>
        <div className="custom-options">
            <div className="main form-group has-search">
              <span className="fa fa-search form-control-feedback"><SearchIcon /></span>
              <input type="text" className="search-control" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            </div>
            <ListItem data={searchResults} onSelectedItem={handleItem} search={searchTerm}/>
        </div>
     </div>
    </div>
  );
};

export default Dropdown;