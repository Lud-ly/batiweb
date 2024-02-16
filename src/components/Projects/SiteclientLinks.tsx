import React from "react";
import { ViewLinkProps } from "~/types/types";
import ViewLink from "./components/ViewLink";

export default function SiteClientLinks() {
  const linkDataSiteClient: ViewLinkProps[] = [
    {
      linkTilte1: "Voir le site client ",
      linkPath1: "http://198.244.231.59/",
    },
  ];
  return (
    <>
      {linkDataSiteClient.map((link, index) => (
        <ViewLink key={index} {...link} />
      ))}
    </>
  );
}
