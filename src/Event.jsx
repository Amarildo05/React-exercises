export default function Event() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submited");
    event.target.reset();
  }

  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input />
        <input type="password" />
        <input type="submit" value="submit" />
      </form>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}