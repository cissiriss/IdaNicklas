import { HeadingEnum } from "../types/enums";

interface HeadingProps {
  children?: React.ReactNode;
  type: HeadingEnum;
  id: string;
}
export const Heading = ({ type, id, children }: HeadingProps) => {
  switch (type) {
    case HeadingEnum.section:
      return (
        <h2 id={id} className="font-windsong text-5xl text-center mb-4">
          {children}
        </h2>
      );
    case HeadingEnum.subSection:
      return (
        <h3 id={id} className="font-windsong text-3xl mb-2 text-center">
          {children}
        </h3>
      );
    default:
      return null;
  }
};
