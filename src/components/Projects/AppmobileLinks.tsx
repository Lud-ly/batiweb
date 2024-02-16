import React from "react";
import { ViewLinkProps } from "~/types/types";
import ViewLink from "./components/ViewLink";

export default function AppMobileLinks() {
  const linkDataMobile: ViewLinkProps[] = [
    {
      linkTilte1: "Télécharger l'apk de test",
      linkPath1: "http://198.244.231.59/",
    },
  ];
  return (
    <>
      {linkDataMobile.map((link, index) => (
        <ViewLink key={index} {...link} />
      ))}
    </>
  );
}
