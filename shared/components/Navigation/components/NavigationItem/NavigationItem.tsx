import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  Item: {
    text: string;
    src: string;
    href: string;
  };
};

export const NavigationItem: FC<Props> = ({ Item }) => {
  return (
    <>
      <Link className="flex flex-col items-center gap-2" href={Item.href}>
        <div className="w-[100px] h-[100px] rounded-full bg-[#bda070] relative">
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={60}
            height={60}
            src={Item.src}
            alt=""
          />
        </div>
        <p>{Item.text}</p>
      </Link>
    </>
  );
};
