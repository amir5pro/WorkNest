import React from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { useState, createContext, useContext } from "react";

const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  // temp

  const user = { name: "amir" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
