import { MetaFunction } from "@remix-run/cloudflare";
import { useAnimate } from "framer-motion";
import { stagger } from "framer-motion/dom";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const meta: MetaFunction = () => {
  return [{ title: "Naruse Nia | About" }];
};

export default function About() {
  const [scope, animate] = useAnimate();

  const isSmall = useMediaQuery({ query: "(max-width: 1440px)" });

  const colorFade = ["#ffb3fb", "#ff3672", "#54263a"];

  useEffect(() => {
    animate(
      ".about-main .chr",
      { opacity: [0, 1], color: colorFade },
      { duration: 0.5, delay: stagger(0.02), ease: "easeOut" }
    );
    animate(
      ".intr p",
      { opacity: [0, 1], y: [20, 0] },
      {
        duration: 2,
        delay: stagger(0.2, { startDelay: 0.8 }),
        ease: [0.0, 1.0, 0.0, 1.0],
      }
    );
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
      className={`bg-white grid-bg flex flex-${
        isSmall ? "col" : "row"
      } gap-20 min-h-screen items-center justify-center overflow-x-hidden p-12`}
    >
      <div className="flex flex-row gap-10 items-center about-main">
        <p className="text-9xl absolute translate-y-[-84px] translate-x-[-128px]">
          {chars("About")}
        </p>
        <div className="left bg-white z-10">
          <div className="logo">
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
        <div className="right flex flex-col gap-2 bg-white z-10">
          <div className="flex flex-col">
            <p className="text-3xl font-bold my-[-0.5rem]">
              {chars("Naruse Nia")}{" "}
            </p>
            <p className="text-1xl"> {chars("成瀬 にぁ")} </p>
            <p className="text-1xl"> {chars("2003/09/05")} </p>
          </div>
          <div className="text-lg intr">
            <p>{chars("主に映像作家として活動。")}</p>
            <p>{chars("趣味で音楽やプログラミングも。")}</p>
            <p>{chars("最近のマイブームは「変なことをすること」")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
