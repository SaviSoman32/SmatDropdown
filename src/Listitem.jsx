import React from 'react';

const Listitem = (props) => {
    const [showItems, setShowItems] = React.useState([5]);
    const [toggled, setToggled] = React.useState(false);
    const selectItem = val => {
        props.onSelectedItem(val);            
    };
    const handleItems = () => {
        const dataLength = props.data.length;
        setShowItems(dataLength);
        setToggled(value => !value)
    };
    const user = localStorage.getItem('user');
    const privilege = localStorage.getItem('privilege');
    const countryCount = props.data.length - showItems;
    const addBtn = (privilege === 'true' && user !== null) ? '' : 'hide';
  return (
    <div>
        <ul className="country-list">
            {(props.data.length > 0) ? props.data.map(((item, index) => {
                if(index < showItems) {
                    return <li key={index} onClick={() => selectItem(item)}>{item}</li>
                }     
            }
        )) : (<><li>"{props.search}" not found</li><button className={`add-new-item ${addBtn}`}>Add & Select</button></>)}
        </ul>
        <span className={"more-items " + (toggled || props.search ? 'hide' : '')} onClick={handleItems}>{countryCount} more...</span>
    </div>
  );
};

export default Listitem;