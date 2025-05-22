
document.getElementById("appForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const payload = {
    content: "**New LSPD-GOV Application Submitted**\n" +
             "Why LSPD: " + data.get("why") + "\n" +
             "Scenario: " + data.get("scenario")
  };

  fetch("https://discord.com/api/webhooks/1374557231298908220/i5y_vtio9wEf8JxAer5YoFY13ZsFz7YbYPjQ3zQcG6zE1O0CZWvC0GjFjSlL2favvnRQ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    document.getElementById("result").textContent = "Application submitted successfully!";
  })
  .catch(error => {
    document.getElementById("result").textContent = "Failed to submit application.";
  });
});
