import ProductCard from "./ProductCard";
import products from "./productList";

export default function Products() {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}