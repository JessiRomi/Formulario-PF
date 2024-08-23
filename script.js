
document.getElementById('btnEnviar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const formData = {
        nombre: document.getElementById('txtNombre').value,
        correo: document.getElementById('txtCorreo').value,
        telefono: document.getElementById('txtTelefono').value,
        nivelEducativo: document.getElementById('select1').value,
        mensaje: document.getElementById('textarea').value
    };

    //console.log(formData); // Imprime el objeto en la consola

    // Si quieres imprimirlo como JSON:
    console.log(JSON.stringify(formData, null, 2));
});
