import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrolltoHash } from "@/shared/lib";

export const Header: React.FC = () => {
  

  return (
    <header className={"md:mt-6 mt-2"}>
      <div
        className={
          "container flex items-center justify-between min-h-6 max-md:hidden"
        }
      >
        <Link href='/' className='relative block w-[60px] h-[60px] shrink-0'>
            <Image src='/logo.jpg' fill alt='Логотип' className='w-[140px] h-[140px]' />
          </Link>
          <nav className='flex items-center gap-4'>
            <ul className="flex gap-4">
              <li><div className="header-link" onClick={() => scrolltoHash('price')}>О НАС</div></li>
              <li><div className="header-link" onClick={() => scrolltoHash('gallery')}>ГАЛЕРЕЯ</div></li>
              <li><div className="header-link" onClick={() => scrolltoHash('contacts')}>КОНТАКТЫ</div></li>
            </ul>
          </nav>

      </div>
      <h1 className="md:hidden flex justify-center text-lg">{'МПК "Русь"'}</h1>
      <div className='w-full h-[2px] bg-gray-200 my-2 md:my-6 opacity-50' />
    </header>
  );
};
