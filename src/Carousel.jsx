import { useState } from "react";

function Carousel() {
  const [imageList, setImageList] = useState([
    "https://images.pexels.com/photos/27372391/pexels-photo-27372391/free-photo-of-a-person-standing-on-top-of-a-mountain-with-rocks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/27845119/pexels-photo-27845119/free-photo-of-a-blurry-photo-of-trees-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17683947/pexels-photo-17683947/free-photo-of-brunette-woman-in-white-blouse-and-black-maxi-skirt-leaning-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11200948/pexels-photo-11200948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]);
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === imageList.length - 1) {
      return setIndex(0);
    }
    console.log(index);
    setIndex(index + 1);
  }

  function handlePrevious() {
    setIndex(index - 1);
  }

  return (
    <div>
      <section>
        <img
          style={{
            width: 200,
            height: 100,
          }}
          src={imageList[index]}
        />
      </section>
      <button disabled={index === 0 ? true : false} onClick={handlePrevious}>
        Previous
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carousel;
