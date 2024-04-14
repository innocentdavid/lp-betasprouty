import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="w-full overflow-auto no-scrollbar">
      <div
        className={cn(
          "flex md:block lg:grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `min-w-[300px] max-w-[500px] lg:max-w-full mx-auto w-full mb-5 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-[#EEF0F1] justify-between flex-col space-y-4 shadow-lg ${
          title && "flex"
        }`,
        className
      )}
      style={
        {
          // boxShadow: `
          // rgba(121, 132, 154, 0.8) 0px 8px 20px -6px,
          //   rgba(121, 132, 154, 0.6) 0px 1px 4px -1px,
          //   rgba(121, 132, 154, 0.6) 0px 0px 2px 0px
          //   `,
        }
      }
    >
      {header}
      {title && (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="_font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
