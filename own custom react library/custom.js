function renderContainer(renderElement, mainContainer) {
  let domElement = document.createElement(renderElement.type);
  domElement.innerHTML = renderElement.text;
  for (const prop in renderElement.props) {
    domElement.setAttribute(prop, renderElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const renderElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  text: "google",
};

const mainContainer = document.getElementById("root");

renderContainer(renderElement, mainContainer);
