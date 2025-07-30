function enviarRecuperacion() {
  const email = document.getElementById("email").value.trim();

  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return;
  }

  // Aquí podrías hacer una llamada a tu backend para enviar el correo de recuperación
  alert(`Se ha enviado un enlace de recuperación a ${email}.`);

  // Opcional: limpiar el formulario
  document.getElementById("email").value = "";
}
