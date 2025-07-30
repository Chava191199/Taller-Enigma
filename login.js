// Mostrar el modal de login
function abrirLogin() {
  const modal = document.getElementById("loginModal");
  modal.style.display = "block";
}

// Ocultar el modal de login
function cerrarLogin() {
  const modal = document.getElementById("loginModal");
  modal.style.display = "none";
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById("loginModal");
  if (modal && event.target === modal) {
    cerrarLogin();
  }
};

// Validación simple de login
function validarLogin() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if (usuario === "admin" && password === "1234") {
    // Guardar el usuario (opcional, para usar luego)
    localStorage.setItem("usuario", usuario);
    alert("Bienvenido " + usuario);
    cerrarLogin();
    window.location.href = "index.html";
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

// Función de ejemplo para enviar cita
function enviarCita() {
  alert("Cita enviada correctamente");
}
