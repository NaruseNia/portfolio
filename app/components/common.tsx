import { PropsWithChildren } from "react";

type CardProps = {
  title: string;
};

export const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <div className="z-10">
      <span className="bg-white">{props.title}</span>
      <div className="px-5 py-2 bg-white rounded-lg border-solid border border-black">
        {props.children}
      </div>
    </div>
  );
};
