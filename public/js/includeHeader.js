document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  if (headerContainer) {
    fetch("header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        headerContainer.innerHTML = data;
      })
      .catch((error) => console.error("Error fetching header:", error));
  } else {
    console.error("Header container not found");
  }
});
