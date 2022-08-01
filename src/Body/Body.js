import React from "react";
import Announcement from "./components/Announcement";
import Categories from "./components/Categories";

import Products from "./components/Products";
import Slider from "./components/Slider";

const Body = () => {
  return (
    <div>
      <Announcement />
    
      <Slider />
      <Categories />
      <Products/>
     
    </div>
  );
};

export default Body;