import { ReactNode } from "react";

type _Props = {
  title: string;
  description?: string;
  children?: ReactNode;
  active: boolean;
  closed?: boolean;
  action?: () => void;
  isMultipleSelect?: boolean;
};

const Answer = ({
  title,
  description,
  children,
  active,
  closed,
  action,
  isMultipleSelect = false,
}: _Props) => {
  return (
    <>
      {!closed || typeof closed === undefined ? (
        <div className={"flex flex-col items-center justify-start gap-4"}>
          <div className={"rounded-3xl overflow-clip relative h-64 w-56"}>
            {children}
          </div>
          <div
            className={`px-4 flex flex-col items-start justify-center transition-all duration-400 delay-200 ease-in-out ${isMultipleSelect ? "" : "-mx-4"} ${active ? "opacity-100" : "opacity-30 select-none pointer-events-none"}`}
          >
            <h3 className={"font-bold text-2xl"}>{title}</h3>
            {description && (
              <p className={"text-sm font-light"}>{description}</p>
            )}
          </div>
        </div>
      ) : (
        <>
          {action && (
            <button
              className={
                "rounded-2xl border-4 border-marabunta-cyan w-full text-center py-4 font-bold transition-all duration text-lg"
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
