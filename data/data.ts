import { ProjectCardProps } from "~/types/types";
import { CgWebsite } from "react-icons/cg";
import { MdDashboardCustomize, MdOutlinePhoneIphone } from "react-icons/md";

export const services: ProjectCardProps[] = [
  {
    Icon: MdOutlinePhoneIphone,
    title: "APP MOBILE PRO",
    about: "Application pour faciliter la productivité des collaborateurs.",
    href: "/mobile-page",
    imgpath: "/images/light_mobile/bkpromobile.png",
  },
  {
    Icon: CgWebsite,
    title: "SITE & ESPACE CLIENT",
    about: "Site web vitrine de l'artisan et espace pour les clients.",
    href: "/site-client-page",
    imgpath: "/images/site_client/bkprococlient.png",
  },
  {
    Icon: MdDashboardCustomize,
    title: "LOGICIEL ADMIN WEB ",
    about: "Interface d'administration et de gestion, API REST.",
    href: "/backoffice-page",
    imgpath: "/images/backoffice/card_back_bkpro.png",
  },
];

export const description: string =
  "Site vitrine BKPro et espace client interactif.";
