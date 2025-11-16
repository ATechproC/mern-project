import React from "react";
import { Link, Outlet } from "react-router";
import { assets } from "../../assets/assets_frontend/assets";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {

    const links = [
        {
            "id": 1,
            "to": "/home",
            "pageName": "Home",
            "isCurrentPage": true
        },
        {
            "id": 2,
            "to": "/doctors",
            "pageName": "Doctors",
            "isCurrentPage": false
        },
        {
            "id": 3,
            "to": "/about",
            "pageName": "About",
            "isCurrentPage": false
        },
        {
            "id": 4,
            "to": "/contact",
            "pageName": "Contact",
            "isCurrentPage": false
        }
    ]

    const [linksState, setLinksState] = useState(links);

    const changeLinksState = (id) => {
        
        const links = [...linksState];
        
        let newLinksState = [];
        for (let i = 0; i < links.length; i++) {
            if (i === id - 1) {
                newLinksState[newLinksState.length] = { ...links[i], isCurrentPage : true };
            } else {
                newLinksState[newLinksState.length] = { ...links[i], isCurrentPage : false };
            }
        }

        setLinksState(newLinksState);
    }

    return <>
        <nav className="px-5 flex-between">
            <div className="cursor-pointer w-[180px] overflow-hidden">
                <img
                    className="object-contain w-full"
                    src={assets.logo}
                    draggable={false}
                />
            </div>
            <ul className="gap-5 text-md flex-between">
                {
                    linksState.map(({ id, to, pageName, isCurrentPage }) => {
                        return <Link
                            onClick={() => changeLinksState(id)}
                            className={`${isCurrentPage ? "border-b-2 border-blue-500" : ""}`}
                            key={id} to={to}>{pageName}</Link>
                    })
                }
                <button className="border-gray-400 border-[1px] text-sm rounded-2xl py-[2px] px-[10px]">Admin panel</button>
            </ul>
            <div className="gap-3 flex-items">
                <div className="w-[45px] h-[45px] rounded-full overflow-hidden cursor-pointer">
                    <img
                        className="w-full h-full"
                        src={assets.upload_area}
                        draggable={false}
                    />
                </div>
                <IoIosArrowDown className="cursor-pointer" />
            </div>
        </nav>
        <Outlet />
    </>
};

export default NavBar;
