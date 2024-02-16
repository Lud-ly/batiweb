import { IconType } from "react-icons";

export interface ProjectCardProps {
  Icon: IconType;
  title: string;
  href: string;
  about: string;
  imgpath: string;
}

export interface ViewLinkProps {
  linkTilte1: string;
  linkPath1: string;
}

export interface ArrowBackProps {
  iSize: number;
}
export interface ProjectFeatureProps {
  id: string;
  name: string;
  description: string;
  image_path: string;
}

export type Category = "FLUTTER" | "SYMFONY" | "PHP" | "JS" | "TWIG";
