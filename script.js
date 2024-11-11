// ---------- Inicio de Sesión ----------
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
});

// ---------- Registro de Usuario ----------
let userList = [];

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    let user = {
        username: username,
        email: email,
        password: password
    };

    userList.push(user);
    document.getElementById("registerForm").reset();
    alert("Usuario registrado con éxito. Por favor, inicia sesión.");
    showLogin();
});

function showRegister() {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
}

function showLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
}

// ---------- Control del Dispensador ----------
function toggleDispenser() {
    let btn = document.getElementById("dispenserBtn");
    btn.innerText = btn.innerText === "Activar Dispensador" ? "Desactivar Dispensador" : "Activar Dispensador";
}

// ---------- Administración de Medicamentos ----------
function toggleMedicationForm() {
    let form = document.getElementById("medication-form");
    form.style.display = form.style.display === "none" || form.style.display === "" ? "block" : "none";
}

let medicationList = [];

document.getElementById("medForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let medName = document.getElementById("medName").value;
    let medDose = document.getElementById("medDose").value;
    let medFrequency = parseInt(document.getElementById("medFrequency").value); // Frecuencia en horas
    let medDuration = document.getElementById("medDuration").value;
    let medDate = document.getElementById("medDate").value;
    let medTime = document.getElementById("medTime").value;

    // Crear un objeto de fecha y hora de inicio
    let startDateTime = new Date(`${medDate}T${medTime}`);

    // Calcular la hora de la siguiente dosis sumando la frecuencia
    let nextDoseTime = new Date(startDateTime);
    nextDoseTime.setHours(nextDoseTime.getHours() + medFrequency);

    let medication = {
        name: medName,
        dose: medDose,
        frequency: medFrequency,
        duration: medDuration,
        startDateTime: startDateTime,
        nextDoseTime: nextDoseTime
    };

    medicationList.push(medication);
    document.getElementById("medForm").reset();
    updateMedicationHistory();
});

function updateMedicationHistory() {
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    medicationList.forEach((med) => {
        let listItem = document.createElement("li");
        listItem.innerText = `${med.name} - Pastillas: ${med.dose} - Próxima Dosis: ${med.nextDoseTime.toLocaleString()}`;
        historyList.appendChild(listItem);
    });
}
