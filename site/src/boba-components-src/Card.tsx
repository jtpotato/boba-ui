// Essentially the chip component
"use client"

import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import "./BobaGlass.css"

type CardProps = {
  logo?: ReactNode;
};

function Card(props: PropsWithChildren<CardProps>) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--mouse-x", -1000000 + "px");
    cardRef.current.style.setProperty("--mouse-y", -1000000 + "px");

    // set top left coordinates css variables
    function saveMousePos(e: MouseEvent) {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty("--mouse-x", x + "px");
        cardRef.current.style.setProperty("--mouse-y", y + "px");
      }
    }

    window.addEventListener("mousemove", saveMousePos);
  }, []);

  return (
    <>
      <div className="boba-glass p-4" ref={cardRef}>
        {props.logo ? props.logo : <></>}
        {props.children}
      </div>
    </>
  );
}

export default Card;
