const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    console.log("You've reached to the right end");
  }
};
