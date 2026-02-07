const baseUrl = "https://itemapi-ib6h.onrender.com";
function addItem() {
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value, 10);

  fetch(baseUrl + "/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to add item");
    }
    return res.json().catch(() => ({})); // handle empty response safely
  })
  .then(data => {
    document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => console.error(err));
}


function getItem() {
  const id = document.getElementById("itemId").value;

  fetch(`https://itemapi-ib6h.onrender.com/items/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Item not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("result").innerText =
        "Name: " + data.name + ", Description: " + data.description;
    })
    .catch(error => {
      document.getElementById("result").innerText = error.message;
    });
}
