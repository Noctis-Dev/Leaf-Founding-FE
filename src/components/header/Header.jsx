import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { Account } from './account/Account';
import logo from "../../assets/img/LogitoGod.svg"
import senal from "../../assets/img/chart-bar.svg"
import separator from "../../assets/img/linea.png"
const Header = ({ isAccountVisible }) => {
  return (
    <Navbar fluid={true} rounded={true} style={{ backgroundColor: "#1F2A37" }} className='rounded-none'>
      <Navbar.Brand href="#" className="ml-[50px]">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="LeefProject Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-green-500">
          Leaf Founding
        </span>
      </Navbar.Brand>

      <Navbar.Collapse  className='ml-[-550px]'>
        <Navbar.Link href="/create-project" className="text-white">
          Crear proyecto
        </Navbar.Link>
        <Navbar.Link href="/home" className="text-white">
          Inicio
        </Navbar.Link>
        <Navbar.Link href="/all" className="text-white">
          Todos los proyectos 
        </Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2items-right ">
        <Account/>
        <Navbar.Toggle />
      </div>

      
    </Navbar>
  );
};

export default Header;