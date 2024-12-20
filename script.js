const users = [
    { username: "funcionario", password: "123", role: "employee" },
    { username: "gerente", password: "456", role: "manager" },
    { username: "admin", password: "789", role: "admin" },
];

let resources = JSON.parse(localStorage.getItem("resources")) || [];
let loginCounts = JSON.parse(localStorage.getItem("loginCounts")) || {};

function generateID() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

document.getElementById("auth-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    const authMessage = document.getElementById("auth-message");
    if (user) {
        authMessage.textContent = `Bem-vindo, ${user.username} (${user.role})!`;
        authMessage.style.color = "green";
        document.getElementById("auth-section").classList.add("hidden");
        document.getElementById("resource-section").classList.remove("hidden");
        document.getElementById("dashboard-section").classList.remove("hidden");

        if (user.role !== "admin") {
            const today = new Date().toISOString().split("T")[0];
            if (!loginCounts[today]) {
                loginCounts[today] = 0;
            }
            loginCounts[today]++;
            saveLoginCounts();
            updateTotalLogins();
        }

        updateResources();
    } else {
        authMessage.textContent = "Credenciais inválidas.";
        authMessage.style.color = "red";
    }
});

document.getElementById("add-resource").addEventListener("click", function () {
    const resourceName = prompt("Nome do recurso:");
    if (resourceName) {
        const newResource = {
            id: generateID(),
            name: resourceName,
        };
        resources.push(newResource);
        saveResources();
        updateResources();
    }
});

document.getElementById("update-resource").addEventListener("click", function () {
    const resourceId = prompt("ID do recurso para atualizar:");
    const resource = resources.find((r) => r.id === resourceId);
    if (resource) {
        const newResourceName = prompt("Novo nome do recurso:");
        if (newResourceName) {
            resource.name = newResourceName;
            saveResources();
            updateResources();
        }
    } else {
        alert("Recurso não encontrado.");
    }
});

document.getElementById("remove-resource").addEventListener("click", function () {
    const resourceId = prompt("ID do recurso para remover:");
    const resourceIndex = resources.findIndex((r) => r.id === resourceId);
    if (resourceIndex !== -1) {
        resources.splice(resourceIndex, 1);
        saveResources();
        updateResources();
    } else {
        alert("Recurso não encontrado.");
    }
});

function updateResources() {
    const resourceList = document.getElementById("resource-list");
    resourceList.innerHTML = "";
    resources.forEach((resource) => {
        const li = document.createElement("li");
        li.textContent = `ID: ${resource.id} | Nome: ${resource.name}`;
        resourceList.appendChild(li);
    });

    document.getElementById("total-resources").textContent = resources.length;
    document.getElementById("recent-activities").textContent = "Atualização realizada.";
}

function updateTotalLogins() {
    const today = new Date().toISOString().split("T")[0];
    const totalLogins = loginCounts[today] || 0;
    document.getElementById("total-employees").textContent = `Total de funcionários logados hoje: ${totalLogins}`;
}

function saveResources() {
    localStorage.setItem("resources", JSON.stringify(resources));
}

function saveLoginCounts() {
    localStorage.setItem("loginCounts", JSON.stringify(loginCounts));
}

function entrarGerenciamento() {
    window.location.href = "main.html";
}

updateTotalLogins();
updateResources();
