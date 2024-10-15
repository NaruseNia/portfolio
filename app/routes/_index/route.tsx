import type { MetaFunction } from "@remix-run/cloudflare";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [scope, animate] = useAnimate();

  const colorFade = ["#ffb3fb", "#ff3672", "#54263a"];

  useEffect(() => {
    animate(
      ".chr",
      { opacity: [0, 1], color: colorFade },
      { duration: 0.5, delay: stagger(0.1), ease: "easeOut" }
    );
    animate(
      ".links > li",
      { x: [20, 0], opacity: [0, 1], color: colorFade },
      { duration: 2, delay: stagger(0.1), ease: [0.0, 0.9, 0.1, 1] }
    );
    animate(
      ".skills > p",
      { y: [20, 0], opacity: [0, 1], color: colorFade },
      { duration: 2, delay: stagger(0.1), ease: [0.0, 0.9, 0.1, 1] }
    );
    animate(".logo", { opacity: [0, 1] }, { duration: 1 });
    animate(
      ".logo-u",
      { opacity: [0, 1], fill: colorFade },
      { duration: 1, delay: 0.2 }
    );
    animate(".logo-d", { opacity: [0, 1], fill: colorFade }, { duration: 1 });
  }, []);

  const chars = (str: string) => {
    return str.split("").map((char) => (
      <span key={`chr_${char}`} className="chr">
        {char}
      </span>
    ));
  };

  return (
    <div
      ref={scope}
      className="bg-white flex h-screen items-center justify-center overflow-x-hidden px-[10%]"
    >
      <div className="w-1/2">
        <h1 className="text-9xl">
          <p>{chars("Naruse")}</p>
          <p>{chars("Nia")}</p>
        </h1>
        <div className="font-bold skills">
          <p>Video Creator</p>
          <p>Graphic Designer</p>
          <p>Composer</p>
          <p>Programmer</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <ul className="links font-bold text-xl text-right">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/works">Works</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/socials">Socials</a>
          </li>
        </ul>
      </div>
      <div className="absolute logo">
        <svg
          className="logo-svg"
          width={64 * 2}
          height={50 * 2}
          viewBox="0 0 64 50"
        >
          <path
            className="logo-u"
            d="M34.9506 11.8139L43.1938 19.9073L52.3406 10.9282V21.0063H64V6.10352e-05H46.9831L34.9506 11.8139Z"
          />
          <path
            className="logo-d"
            d="M9.84055 50C12.394 50 14.8964 49.0198 16.7808 47.1682L28.3266 35.8323L20.0819 27.7374L11.658 36.0083V12.3405L46.3797 46.4312C49.3412 49.3403 53.7572 50.2018 57.6267 48.6277C61.4976 47.0537 63.9971 43.379 63.9971 39.2665V26.0146H52.3377V36.0927L18.8139 3.17533C15.6499 0.0687552 10.9365 -0.85134 6.80327 0.828585C2.67001 2.50994 0 6.43358 0 10.8251V40.344C0 44.2619 2.38144 47.762 6.06873 49.2602C7.29151 49.7582 8.57259 50 9.84055 50Z"
          />
        </svg>
      </div>
    </div>
  );
}
