document.addEventListener("DOMContentLoaded", function () {
    // Validación del formulario de agregar monto (si es que existe)
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(e) {
            // Obtener el valor del campo monto
            const precioInput = document.getElementById("id_precio"); // Asegúrate de que el ID sea correcto
            const precio = precioInput ? parseFloat(precioInput.value) : NaN;
            // Validar que el campo de precio solo acepte números y que el precio sea mayor a 0
            if (isNaN(precio) || precio <= 0) {
                alert("Por favor, introduce un monto válido.");
                e.preventDefault(); // Evitar el envío del formulario
            } else {
                // Mostrar mensaje de confirmación antes de agregar la transación
                if (!confirm("¿Estás seguro de que quieres agregar esta transación?")) {
                    e.preventDefault(); // Evitar el envío del formulario
                }
            }
        });
    }

    // Consulta para eliminar una transación
    const deleteLinks = document.querySelectorAll(".delete-product");
    deleteLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Mostrar mensaje de confirmación antes de eliminar la  transación
            if (!confirm("¿Estás seguro de que quieres eliminar esta transación?")) {
                e.preventDefault();
            }
        });
    });

  // Consulta para eliminar una observación
    const deleteCharacteristicLinks = document.querySelectorAll(".delete-characteristic");

    deleteCharacteristicLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            // Mostrar este mensaje de confirmación antes de eliminar la observación
            if (!confirm("¿Estás seguro de que quieres eliminar esta característica?")) {
                e.preventDefault();
            }
        });
    });

  // Redirección al detalle del producto (en caso de ser necesario)
  const detailButtons = document.querySelectorAll(".product-actions a.btn-info");
  detailButtons.forEach(button => {
      button.addEventListener("click", function (e) {
          const productoId = button.getAttribute("href").split('/').pop(); // Obtener el id del href
          if (productoId) {
              if (!confirm("¿Deseas ver los detalles de esta transación?")) {
                  e.preventDefault();
              }
          }
      });
  });
});