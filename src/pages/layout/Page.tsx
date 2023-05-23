import React from "react";
import Navbar from "../../components/NavBar";
import "./page.css";
interface PageProps extends React.PropsWithChildren {}

function Page({ children }: PageProps) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      {children}
    </div>
  );
}

export default Page;
