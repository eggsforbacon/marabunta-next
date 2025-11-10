import { ReactNode } from "react";

type _Props = {
  title: string;
  description?: string;
  children?: ReactNode;
  active: boolean;
  closed?: boolean;
  action?: () => void;
  isMultipleSelect?: boolean;
  isSimpleView?: boolean;
  onClick?: () => void;
};

const Answer = ({
  title,
  description,
  children,
  active,
  closed,
  action,
  isMultipleSelect = false,
  isSimpleView = false,
  onClick,
}: _Props) => {
  return (
    <>
      {!closed ? (
        <div
          className="flex flex-col items-center justify-start gap-4"
          onClick={isSimpleView ? onClick : undefined}
        >
          <div
            className={`
              rounded-3xl overflow-clip relative w-full md:w-72 lg:w-80 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.6)]
              transition-all duration-300 group

              ${isSimpleView
                ? 'h-48 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/15'
                : 'h-56'
              }

              ${active && (isSimpleView || isMultipleSelect) ? "ring-4 ring-marabunta-red/60" : "ring-0"}

              ${isSimpleView ? "cursor-pointer" : ""}
              ${!active && isSimpleView ? "hover:border-white/30" : ""}
            `}
          >

            {children}

            {isSimpleView && (
              <div className="h-full w-full">

              </div>
            )}
          </div>

          <div
            className={`
              px-4 flex flex-col justify-center transition-all duration-300 ease-in-out 
              ${isMultipleSelect ? "" : "-mx-4"}

              ${isSimpleView ? 'items-center text-center' : 'items-start'}
            `}
          >
            <h3 className={`font-bold text-lg md:text-2xl ${active ? "opacity-100" : "opacity-30 select-none pointer-events-none"}`}>{title}</h3>
            {description && (
              <p className={`text-sm font-light ${active ? "opacity-90" : "opacity-30 select-none pointer-events-none"}`}>{description}</p>
            )}
          </div>
        </div>
      ) : (
        <>
          {action && (
            <button
              className={
                `rounded-2xl border-2 w-full text-left px-6 py-4 font-semibold transition-all duration-200 text-lg
                ${active
                  ? "bg-marabunta-red/90 border-marabunta-red text-white shadow-[0_0_20px_rgba(255,0,60,0.5)]"
                  : "bg-white/5 border-white/15 hover:border-white/30 hover:bg-white/10"
                }`
              }
              onClick={action}
            >
              {title}
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Answer;