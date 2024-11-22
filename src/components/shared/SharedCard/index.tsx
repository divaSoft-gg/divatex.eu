import { Dispatch, ReactNode, SetStateAction } from "react";

export default function SharedCard({
  children,
  setHoveredIndex,
  index,
}: Readonly<{
  children: ReactNode;
  index?: number;
  setHoveredIndex?: Dispatch<SetStateAction<number | null>>;
}>) {
  return (
    <div
      role="presentation"
      onMouseEnter={() => {
        if (setHoveredIndex) {
          setHoveredIndex(index ?? null);
        }
      }}
      onMouseLeave={() => {
        if (setHoveredIndex) {
          setHoveredIndex(null);
        }
      }}
      className="rounded-md border dark:border-0 gap-4 p-6 bg-[#F8FAFC] dark:bg-[#161616]"
    >
      {children}
    </div>
  );
}
