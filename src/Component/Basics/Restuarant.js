import React, { useState }  from 'react'
import Menu from './Menu';
import MenuData from './menuApi';
import Navbar from './Navbar';

const uniqueList = [...new Set(MenuData.map((curElem) => curElem.category)), "All"];
// console.log(uniqueList);
const Restuarant = () => {
    const [MenuDatas, setMenuDatas] = useState(MenuData);
    const [MenuList, setMenuList] = useState(uniqueList);
    const filterMenu = (category) => {
        if(category === "All"){
            setMenuDatas(MenuData);
            return;
        }
        const filterData = MenuData.filter((curElem) => curElem.category === category );
        setMenuDatas(filterData);
    }
    return (
        <div>
            <Navbar filterMenu={filterMenu} MenuList={MenuList}/>
            <Menu menuData={MenuDatas}/>
        </div>
    )
}

export default Restuarant;
