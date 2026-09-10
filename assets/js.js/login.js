// ===== VALIDACIÓN DEL LOGIN =====
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores
  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  // ===== CREDENCIALES (para prototipo) =====
  const USUARIO_VALIDO = 'admin';
  const PASSWORD_VALIDA = 'admin123';

  // Validar
  if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDA) {
    // Login exitoso
    errorMessage.style.display = 'none';

    // Guardar sesión
    if (document.getElementById('recordar').checked) {
      localStorage.setItem('usuario', usuario);
    }
    sessionStorage.setItem('logueado', 'true');

    // Redirigir al dashboard
    window.location.href = 'index.html';

  } else {
    // Login fallido
    errorMessage.style.display = 'block';

    // Limpiar contraseña
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
  }
});

// ===== AUTORRELLENAR SI RECORDÓ =====
window.addEventListener('load', function() {
  const usuarioGuardado = localStorage.getItem('usuario');
  if (usuarioGuardado) {
    document.getElementById('usuario').value = usuarioGuardado;
    document.getElementById('recordar').checked = true;
    document.getElementById('password').focus();
  }
});