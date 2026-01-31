setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2000);

function calculate() {
  const stone = document.getElementById("stoneType").value;
  const area = parseFloat(document.getElementById("area").value);

  if (!area || area <= 0) {
    alert("Unesi ispravnu kvadraturu");
    return;
  }

  const prices = {
    granit: 50,
    mramor: 70,
    vapnenac: 40
  };

  const pricePerM2 = prices[stone];
  const total = area * pricePerM2;

  document.getElementById("result").innerHTML = `
    <strong>Cijena:</strong> ${total.toFixed(2)} €<br><br>
    <strong>Formula:</strong><br>
    ${area} m² × ${pricePerM2} €/m²
  `;
}
