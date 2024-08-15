import React, { FC } from "react";
import { clsx } from "clsx";
import { InfoBlockCard } from "./components/InfoBlockCard";
import { TCardProps } from "./types";

type Props = { blocks: TCardProps[]; className?: string };

export const InfoCards: FC<Props> = ({ blocks, className = "" }) => {
  return (
    <div className={clsx("flex gap-8 lg:gap-6 max-lg:flex-col", className)}>
      {blocks?.map((el, idx) => {
        return el.title ? (
          <InfoBlockCard
            title={el.title}
            description={el.description}
            link={el.link}
            image={el.image}
            button_name={el.button_name}
            key={idx}
          />
        ) : null;
      })}
    </div>
  );
};
