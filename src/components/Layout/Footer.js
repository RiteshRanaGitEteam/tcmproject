import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-white mt-5 p-4 text-center"
      style={{ backgroundColor: "#02009C" }}
    >
      Copyright &copy; {new Date().getFullYear()} TCM <br /> Developed By{" "}
      <a
        target="_blank"
        href="https://www.eteaminc.com/"
        style={{ color: "#ffffff" }}
      >
        Eteam
      </a>
    </footer>
  );
}
