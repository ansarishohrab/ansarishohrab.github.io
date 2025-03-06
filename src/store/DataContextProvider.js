import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  profile: {},
});

const DataContextProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/profiles/Sohrab Alam Ansari`)
      .then((response) => {
        const profile = response.data;
        setProfile(profile);
      })
      .catch((error) => {
        console.log(error);
        setProfile({});
      });
  }, []);
  const dataContextValue = {
    profile,
  };
  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
