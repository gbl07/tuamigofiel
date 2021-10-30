document.addEventListener("DOMContentLoaded", function () {
   document
      .getElementById("formulario")
      .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
   evento.preventDefault();
   var firstName = document.getElementById("firstName");
   if (firstName.value.length == 0) {
      firstName.classList.add("is-invalid");
   }

   var lastName = document.getElementById("lastName");
   if (lastName.value.length == 0) {
      lastName.classList.add("is-invalid");
   }

   var email = document.getElementById("email");
   if (email.value.length == 0) {
      email.classList.add("is-invalid");
   }

   var mascota = document.getElementById("mascota");
   if (mascota.value.length == 0) {
      mascota.classList.add("is-invalid");
   }

   var date = document.getElementById("date");
   if (date.value.length == 0) {
      date.classList.add("is-invalid");
   }

   var time = document.getElementById("time");
   if (time.value.length == 0) {
      time.classList.add("is-invalid");
   }

   var type = document.getElementById("type");
   if (type.selectedIndex == 0) {
      type.classList.add("is-invalid");
   }

   var sucursal = document.getElementById("sucursal");
   if (sucursal.selectedIndex == 0) {
      sucursal.classList.add("is-invalid");
   }

   var motivo = document.getElementById("motivo");
   if (motivo.value.length == 0) {
      motivo.classList.add("is-invalid");
      return;
   }

   alert("Muchas gracias por completar los datos");

   this.submit();
}