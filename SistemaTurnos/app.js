
  // Función para poblar los médicos en base a la especialidad seleccionada
  function populateDoctors() {
    const especialidadSelect = document.getElementById("especialidad");
    const medicoSelect = document.getElementById("medico");

    // Se definio la lista de médicos para cada especialidad
    const medicoPorEspecialidad = {
      1: [
        { id: 1, name: "Dr. Carlos Auad" },
        { id: 2, name: "Dr. Ricardo Olea" },
      ],
      2: [
        { id: 3, name: "Dr. José Goldman" },
        { id: 4, name: "Dr. Julio Miranda" },
      ],
      3: [
        { id: 5, name: "Dra. Viviana Leiva" },
        { id: 6, name: "Dr. José Toranzo" },
        { id: 7, name: "Dra. Mariana García" },
      ],
      4: [
        { id: 8, name: "Dra. Luciana Yedlin" },
        { id: 9, name: "Dr. Gustavo Klix" },
      ],
      5: [
        { id: 10, name: "Dr. Raúl G. Flores" },
     ],
     6: [
      { id: 11, name: "Dra. Alejandra Sosa" },
      { id: 12, name: "Dr. Daniel Lamagni" },
      { id: 13, name: "Dra. Ana Budeguer" },
    ],
    7: [
      { id: 14, name: "Dra. Marcela Arroyo" },
      { id: 15, name: "Dr. Gustavo Alonso" },
    ],
    8: [
      { id: 16, name: "Dr. José Steinberg" },
      { id: 17, name: "Dr. Nicolás Zeitune" },
    ],
    9: [
      { id: 18, name: "Dr. Roberto Acosta" },
      { id: 19, name: "Dra. Margarita Basualdo" },
    ],
    10: [
      { id: 20, name: "Dr. José Pérez Saracho" },
   ],
    };

    const selectedEspecialidadId = parseInt(especialidadSelect.value);
    const doctors = medicoPorEspecialidad[selectedEspecialidadId];

    // Borra opciones anteriores
    medicoSelect.innerHTML = '<option value="" selected>Profesional médico</option>';

 // Rellene el menú desplegable de médicos según la especialidad seleccionada
    doctors.forEach(doctor => {
      const option = document.createElement("option");
      option.value = doctor.id;
      option.textContent = doctor.name;
      medicoSelect.appendChild(option);
    });
  }

  // Llamar a la función populateDoctors siempre que se cambie la especialidad
  document.getElementById("especialidad").addEventListener("change", populateDoctors);

// Función para validar la fecha y hora de la cita
  function validarTurno() {
    const fechaInput = document.getElementById("fecha");
    const horaInput = document.getElementById("hora");
    const resultadoDiv = document.getElementById("resultado");
    const selectedDate = new Date(fechaInput.value + " " + horaInput.value);

   // Obtener la fecha y hora actual
    const currentDate = new Date();
    const workingStartTime = new Date(selectedDate);
    workingStartTime.setHours(8, 0, 0); // Establecer la hora de inicio de trabajo a las 8:00 AM
    const workingEndTime = new Date(selectedDate);
    workingEndTime.setHours(21, 0, 0); // Establecer la hora de finalización del trabajo a las 9:00 p.m.

    if (selectedDate < currentDate) {
      resultadoDiv.textContent = "La fecha y hora deben ser futuras.";
    } else if (selectedDate < workingStartTime || selectedDate > workingEndTime) {
      resultadoDiv.textContent = "El horario de atención es de 8:00 a 21:00 hs.";
    } else {
      resultadoDiv.textContent = "Turno reservado con éxito. Recibiras confirmación del turno por email";
    }
  }

  // Función para manejar el clic del botón de reserva
  function reservarTurno() {
    // Realizar cualquier lógica adicional para la reserva (por ejemplo, guardar en una base de datos)
    validarTurno(); // Validar la fecha y hora de la cita
  }

