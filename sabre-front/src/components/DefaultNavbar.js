import { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import logo from "../assets/img/SabreCyber.png";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <div className="flex items-center gap-5 text-2xl">
            <img src={logo} alt="Tigre" className="w-20 rounded" />
            <NavbarBrand color={'orange'}>SabreCyber</NavbarBrand>
          </div>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink
                href="https://material-tailwind.com/documentation/quick-start?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon family="font-awesome" name="fab fa-hotjar" size="2xl" />
                &nbsp;Sites Clientes
              </NavLink>
              <NavLink
                href="https://material-tailwind.com/components?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon family="font-awesome" name="fab fa-instagram" size="2xl" />
                &nbsp;Instagram
              </NavLink>
              <div className="text-white">
                {/* <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon name="view_carousel" size="2xl" color="white" />
                      <span className="ml-2">Templates</span>
                    </div>
                  }
                  ripple="light"
                >
                  <Link to="/">
                    <DropdownItem color="lightBlue">Landing</DropdownItem>
                  </Link>
                  <Link to="/profile">
                    <DropdownItem color="lightBlue">Profile</DropdownItem>
                  </Link>
                  <Link to="/login">
                    <DropdownItem color="lightBlue">Login</DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem color="lightBlue">Register</DropdownItem>
                  </Link>
                </Dropdown> */}
              </div>
              <NavLink
                href="https://api.whatsapp.com/send?phone=54992041970&text=Quero%20divulgar%20meu%20negocio%20online"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon family="font-awesome" name="fab fa-whatsapp" size="xl" />
                &nbsp;Whatsapp
              </NavLink>
              <a
                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                target="_blank"
                rel="noreferrer"
              >
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
