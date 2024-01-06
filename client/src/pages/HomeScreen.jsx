import React from "react";
import Header from "../components/Header";

function HomeScreen() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/*Header */}
      <Header />
      <main>{/*custom routes */}</main>
    </div>
  );
}

export default HomeScreen;
