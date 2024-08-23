let balance = 1000;

const depositButton = document.getElementById("deposit");
depositButton.addEventListener("click", deposit);

const withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", withdraw);

function updateBalance() {
  document.getElementById("amount").textContent = balance;
}

function deposit() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount to deposit.");
    document.getElementById("deposit-amount").value = "";
    return;
  }
  balance += amount;
  updateBalance();
  document.getElementById("deposit-amount").value = "";
}

function withdraw() {
  const amount = parseFloat(document.getElementById("withdrawal-amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount to withdraw.");
    document.getElementById("withdrawal-amount").value = "";
    return;
  }
  if (amount > balance) {
    alert("Insufficient funds.");
    document.getElementById("withdrawal-amount").value = "";
    return;
  }
  balance -= amount;
  updateBalance();
  document.getElementById("withdrawal-amount").value = "";
}
