import React from "react";
import ViewLink from "./components/ViewLink";
import { ViewLinkProps } from "~/types/types";

export default function BackofficeLinks() {
  const linkDataBackoffice: ViewLinkProps[] = [
    {
      linkTilte1: "Voir le Backoffice",
      linkPath1: "http://198.244.231.59/admin",
    },
  ];
  return (
    <>
      {linkDataBackoffice.map((link, index) => (
        <ViewLink key={index} {...link} />
      ))}
    </>
  );
}
