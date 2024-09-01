export default function ProductCard(props) {
  return (
    <article>
      <h2>{props.product.name}</h2>
      <img
        src={props.product.photo}
        alt={props.product.name}
        width="300"
        height="300"
      />
      <div>{props.product.price}</div>
      <button>Add</button>
    </article>
  );
}