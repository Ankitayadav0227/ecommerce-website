import React from "react";
import ProductCard from "../Components/ProductCard";

function Products() {

  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 2000,
      image: "https://contents.mediadecathlon.com/p3064098/c64ea3d6569751a5423ea19d774b9ad4/p3064098.jpg"
    },
    {
      id: 2,
      name: "Watch",
      price: 5000,
      image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc7e8462d/product-pictures/86f2e711-e4ee-4d76-8246-6fd904d92a68_T116-617-11-047-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center"
    },
    {
      id: 3,
      name: "Laptop",
      price: 55000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
      id: 4,
      name: "Headphones",
      price: 3000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    }
  ];

  return (
    <div className="products">

      <h1>Products</h1>

      <div className="product-grid">

        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}

      </div>
    </div>
  );
}

export default Products;