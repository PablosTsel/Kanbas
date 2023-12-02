import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"; // Import FaSignOutAlt icon
import { BsTable } from "react-icons/bs"; // Import BsTable icon
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Signin", "Signup", "table", "Dashboard", "Courses", "Calendar"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Signin: <FaSignInAlt className="wd-icon" />,
    Signup: <FaSignOutAlt className="wd-icon" />, // Add Signout icon
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    table: <BsTable className="wd-icon" />, // Add Table icon
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.toLowerCase()}`}
          className={`list-group-item ${pathname.includes(link.toLowerCase()) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
