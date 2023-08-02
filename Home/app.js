
// Arreglo con los datos de los médicos y sus especialidades
const especialidadesMedicas = [
  { especialidad: 'Cardiología', medico: 'Dr. Carlos Auad' },
  { especialidad: 'Cardiología', medico: 'Dr. Ricardo Olea' },
  { especialidad: 'Cirugía general', medico: 'Dr. José Goldman' },
  { especialidad: 'Cirugía general', medico: 'Dr. Julio Miranda' },
  { especialidad: 'Clínica médica', medico: 'Dra. Viviana Leiva' },
  { especialidad: 'Clínica médica', medico: 'Dr. José Toranzo' },
  { especialidad: 'Clínica médica', medico: 'Dra. Mariana García' },
  { especialidad: 'Dermatología', medico: 'Dra. Luciana Yedlin' },
  { especialidad: 'Dermatología', medico: 'Dr. Gustavo Klix' },
  { especialidad: 'Gastroenterología', medico: 'Dr. Raúl G. Flores' },
  { especialidad: 'Ginecología', medico: 'Dra. Alejandra Sosa' },
  { especialidad: 'Ginecología', medico: 'Dr. Daniel Lamagni' },
  { especialidad: 'Ginecología', medico: 'Dra. Ana Budeguer' },
  { especialidad: 'Oftalmología', medico: 'Dr. José Steinberg' },
  { especialidad: 'Oftalmología', medico: 'Dr. Nicolás Zeitune' },
  { especialidad: 'Pediatría', medico: 'Dr. Roberto Acosta' },
  { especialidad: 'Pediatría', medico: 'Dra. Margarita Basualdo' },
  { especialidad: 'Traumatología', medico: 'Dr. José Pérez Saracho' },
];
// Obtengo el valor del input de búsqueda
function buscarMedico() {
  const inputTexto = document.getElementById('buscarInput').value.toLowerCase();

  const resultados = especialidadesMedicas.filter(item => {
    const especialidad = item.especialidad.toLowerCase();
    const medico = item.medico.toLowerCase();
    return especialidad.includes(inputTexto) || medico.includes(inputTexto);
  });
// Mostramos los resultados de la búsqueda en el div "resultadoBusqueda"
// Con el .innerHTML vacio, se eliminan los resultados de búsqueda previos
  const resultadoDiv = document.getElementById('resultadoBusqueda');
  resultadoDiv.innerHTML = ''; 
  if (resultados.length > 0) {
    const listaResultados = document.createElement('ul');
    resultados.forEach(item => {
      const li = document.createElement('li');
      li.textContent = ` ${item.medico}`;
      listaResultados.appendChild(li);
    });
    resultadoDiv.appendChild(listaResultados);
  } else {
    resultadoDiv.textContent = 'NO se encontraron resultados.';
  }
}

// Con esta función se limpia el contenido del input
function borrarInput() {
  const inputElement = document.getElementById('buscarInput');
  inputElement.value = ''; 
}

