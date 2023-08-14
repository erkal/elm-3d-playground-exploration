export { preventEvents };

const preventEvents = () => {
  prevent("pointerdown");
  prevent("mousedown");
  prevent("wheel");
  prevent("keydown");
};

const prevent = (eventType) => {
  document.addEventListener(
    eventType,
    function (e) {
      let elements = document.querySelectorAll(".prevent-elm-inputs");
      if (
        e.target &&
        Array.from(elements).some((element) => element.contains(e.target))
      ) {
        e.stopPropagation();
      }
    },
    true
  );
};
