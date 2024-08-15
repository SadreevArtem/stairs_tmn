import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./infoBlockCard.module.css";
import { clsx } from "clsx";

export type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  button_name?: string;
};

export const InfoBlockCard: FC<Props> = ({ title, description, link, image, button_name }) => {
  return (
    <div
      className={clsx(
        "relative z-10 w-full rounded border border-black group lg:h-[349px]",
        s.container
      )}
    >
      <div className="relative h-[216px] rounded lg:hidden">
        <Image
          className="object-cover rounded"
          src={image}
          alt="background-image"
          fill
        />
      </div>
      <div className="flex flex-col h-full pt-6 px-7 pb-8 lg:py-12 lg:px-11 lg:group-hover:text-white">
        <h4 className='font-sans-inter transition delay-100 text-2xl font-extrabold mb-6 max-lg:text-xl after:transition after:delay-100 after:block after:content-[""] after:w-[213px] after:h-1 after:bg-primary-light lg:group-hover:after:bg-white after:rounded-[3px] after:mt-3 lg:group-hover:text-white'>
          {title}
        </h4>
        <div className="transition delay-100 text-sm mb-8 md:mb-12 lg:mb-0 max-w-[500px] max-lg:text-sm lg:line-clamp-3 lg:group-hover:text-white">
          {description}
        </div>
        {button_name && (
          <div className="mt-auto">
            <Link
              href={link}
              className={clsx(
                "w-full h-[46px] xl:max-w-[282px] lg:text-center lg:leading-[1.2rem] lg:max-w-[200px] sm:max-w-[282px]  px-4 flex justify-center items-center gap-6 border border-link rounded",
                "lg:group-hover:bg-white lg:group-hover:text-black lg:group-hover:border-white transition"
              )}
            >
              <span>{button_name || "Узнать подробнее"}</span>
              <span
                className="w-[40px] h-[1px] bg-primary group-hover:bg-black"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
      <div className={`absolute -z-10 inset-0 ${s.image} max-lg:hidden`}>
        <Image
          className="-z-10 object-cover"
          src={image}
          alt="background-image"
          fill
        />
      </div>
    </div>
  );
};
