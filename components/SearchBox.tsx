import React from "react";

const SearchBox = ({searchChange, placeholder}) => {
    return (
        <div>
            <input 
                type="search" 
                placeholder={`Vyhledat ${placeholder}`} 
                className="ba b--green br2 bw1 pa2 mb2"
                onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;

