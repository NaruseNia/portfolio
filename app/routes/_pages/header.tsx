import { motion as m } from "framer-motion";

export const Header = () => {
  return (
    <m.header
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      exit={{ y: -40 }}
      transition={{ duration: 1, ease: [0.0, 0.8, 0.2, 1.0] }}
      className="fixed bg-white w-screen h-16 flex items-center px-12"
    >
      <a href="/">
        <svg
          className="logo-svg"
          width={64 / 2}
          height={50 / 2}
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
      </a>
    </m.header>
  );
};
