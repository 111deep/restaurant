import React from 'react'

const Navbar = ({filterMenu, MenuList}) => {
    return (
        <>
           <nav className="navbar">
                <div className="btn-group">
                    {MenuList.map((curElem, index) => <button className="btn-group__item" key={index} onClick={() => filterMenu(curElem)}>{curElem}</button>)}
                </div>
            </nav> 
        </>
    )
}

export default Navbar;
