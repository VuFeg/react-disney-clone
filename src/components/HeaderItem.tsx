import React, { ReactNode } from "react";

export const HeaderItem = ({
  name,
  icon,
}: {
  name: string;
  icon: ReactNode;
}) => {
  return (
    <div
      className="flex items-center gap-3 text-white font-semibold text-base cursor-pointer hover:underline
      underline-offset-8 md:hover:-translate-y-1 transition ease-in-out duration-200 mb-2 md:mb-0"
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};
