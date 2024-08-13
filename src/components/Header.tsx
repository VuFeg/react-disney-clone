import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import avatar from "./../assets/images/avatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { ReactNode } from "react";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  interface Menu {
    name: string;
    icon: ReactNode;
  }

  const menu: Menu[] = [
    {
      name: "HOME",
      icon: <HiHome />,
    },
    {
      name: "SEARCH",
      icon: <HiMagnifyingGlass />,
    },
    {
      name: "LIST",
      icon: <HiPlus />,
    },
    {
      name: "ORIGINALS",
      icon: <HiStar />,
    },
    {
      name: "MOVIES",
      icon: <HiPlayCircle />,
    },
    {
      name: "SERIES",
      icon: <HiTv />,
    },
  ];

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} alt="logo" className="w-20 md:w-28 object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden flex gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name="" icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name="" icon={<HiDotsVertical />} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} icon={item.icon} />
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img src={avatar} alt="" className="w-10 rounded-full" />
    </div>
  );
};
