function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";

    for (let user of users) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      `;

      tableBody.appendChild(row);

     
      await delay(1000);
    }
    

  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
