const downloadlinks = document.querySelectorAll("[data-download]");

downloadlinks.forEach((button) => {
  const id = button.dataset.download;
  const pdf = document.getElementById(id);
  const a = document.createElement("a");

  a.href = pdf.src;
  a.download = "";
  a.textContent = "Download";
  a.style.display = "none";

  button.addEventListener("click", () => {
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});
