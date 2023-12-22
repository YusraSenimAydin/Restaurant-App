import Header from "../components/header/Header";

import {  useState } from "react";


const HomePage = () => {
 
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");


  return (
    <>
      <Header setSearch={setSearch} />
      
    </>
  );
};

export default HomePage;
