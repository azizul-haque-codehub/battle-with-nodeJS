export function toast(text = "Successed") {
  const body = document.querySelector("body");
  const toast = document.createElement("div");
  toast.style.width = "90%"
  toast.style.height = "400px"
  toast.style.border = "2px solid green"
  toast.style.position = "absolute"
  toast.style.top = "10px"
  toast.innerHTML = `
  <div style="padding:10px;display:flex;justify-content:center;align-items:center">
  <h1>${text}</h1>
  </div>
  `;
  body.appendChild(toast)

}
