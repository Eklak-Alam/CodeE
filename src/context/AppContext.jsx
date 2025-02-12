import { createContext, useEffect, useState } from "react";
import { coursesData } from "../db/dummyData";
import { youtubersData } from "../db/dummyData";

// Create context
export const AppContext = createContext();

// Context Provider
export const AppContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [allYoutubers, setAllYoutubers] = useState([]);

  // Fetch all courses
  useEffect(() => {
    setAllCourses(coursesData);
    setAllYoutubers(youtubersData);
  }, []);

  return (
    <AppContext.Provider value={{ allCourses, allYoutubers }}>
      {children}
    </AppContext.Provider>
  );
};
