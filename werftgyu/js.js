const dejr = () => {
  return parseFloat(document.getElementById("dajr").value);
};
const licz = () => {
  return (4 / 3) * Math.PI * Math.pow(dejr(), 3);
};

const divy = () => {
  const div = document.getElementById("divwy");
  div.textContent = licz();
  document.body.appendChild(div);
};
const guz = () => {
  return document.getElementById("but");
};
guz().addEventListener("click", divy);
