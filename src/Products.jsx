import { useState } from "react";

const productList = [
  { name: "Wireless Headphones", price: 99.99, category: "Electronics" },
  { name: "Smartphone", price: 699.99, category: "Electronics" },
  { name: "Running Shoes", price: 120.0, category: "Footwear" },
  { name: "Blender", price: 49.99, category: "Home Appliances" },
  { name: "Yoga Mat", price: 25.0, category: "Fitness" },
  { name: "Leather Wallet", price: 45.0, category: "Accessories" },
  { name: "Electric Kettle", price: 35.0, category: "Home Appliances" },
  { name: "Notebook", price: 5.99, category: "Stationery" },
  { name: "Desk Lamp", price: 22.99, category: "Furniture" },
  { name: "Wireless Mouse", price: 15.99, category: "Electronics" },
];

function Products() {
  const [inputValue, setInputValue] = useState(0);
  const [products, setProducts] = useState(productList);
  const [searchInput, setSearchInput] = useState("");

  function handleApply() {
    const updatedProducts = productList.filter(
      (prod) => prod.price <= inputValue
    );
    setProducts(updatedProducts);
  }

  function handleSearch() {
    const filteredProducts = productList.filter((prod) => {
      if (prod.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return true;
      }

      return false;
    });

    console.log(filteredProducts);
    setProducts(filteredProducts);
  }

  function resetFilters() {
    setInputValue(0);
    setSearchInput("");

    setProducts(productList);
  }

  return (
    <div>
      <input
        value={searchInput}
        type="text"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <br />

      <input
        value={inputValue}
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleApply}>Apply filter</button>

      <button onClick={resetFilters}>Reset Filters</button>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              {product.name} - ${product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;