import { cn } from "@/shared/libs";
import React, { memo } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const WrapperGlobal: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <div className='bg-theme-backdrop p-4 h-screen w-screen overflow-hidden'>
      <div
        className={cn(
          "mx-auto size-full rounded-lg border border-theme-stroke bg-theme-background max-w-8xl flex flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(WrapperGlobal);
