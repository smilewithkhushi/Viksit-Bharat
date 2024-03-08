"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function PrimaryNavbar() {
  const menuItems = [

    { name: "Ideas", href: "#ideas" },
    { name: "Gallery", href: "#gallery" },
    { name: "Videos", href: "#videos" },
    { name: "Pledge", href: "#pledge" },
  ];

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  
  return (
    <Navbar disableAnimation className="sm:w-full md:w-2/3 px-4 bg-white shadow-xl rounded-3xl m-4 md:mx-4 text-sky-600">
     
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className=" sm:hidden  pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-2xl text-orange">Viksit <span className="text-green">Bharat</span></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" hidden sm:flex gap-10" justify="center">
        <NavbarBrand>
        <p className="font-bold text-2xl text-orange">Viksit <span className="text-green">Bharat</span></p>
         </NavbarBrand>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-blue"
              href={item.href}
              // size="lg"
              onClick={() => scrolltoHash(`${item.href}`)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-transparent text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" href={item.href} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
