import React from "react";
import Navbar from "../features/nav-bar/Navbar";
import ProductList from "../features/product-list/components/ProductList";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
}

export default Home;
