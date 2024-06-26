type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1

// a

const pacientesAsignadosAPediatria: Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (const paciente of pacientes) {
    if (paciente.especialidad === "Pediatra")
      pacientesAsignadosAPediatria.push(paciente);
  }

  return pacientesAsignadosAPediatria;
};

const resultado01A = obtenPacientesAsignadosAPediatria(pacientes);
console.log(resultado01A)

// b

const PacientesAsignadosAPediatriaYMenorDeDiezAnio: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (const paciente of pacientes) {
    if (paciente.edad < 10) {
      PacientesAsignadosAPediatriaYMenorDeDiezAnio.push(paciente);
    }
  }

  return PacientesAsignadosAPediatriaYMenorDeDiezAnio;
};

// const resultado01B = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(
//   pacientesAsignadosAPediatria
// )

// console.log(resultado01B) 

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (const paciente of pacientes) {
    if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
      return (activarProctolo = true);
    }
  }
  return activarProctolo;
};

// const resultado02 = activarProtocoloUrgencia(pacientes)
// console.log(resultado02)

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (const paciente of pacientes) {
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    }
  }
  return pacientes;
};

// const resultado03 = reasignaPacientesAMedicoFamilia(pacientes)
// console.log(resultado03)

// Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (const paciente of pacientes) {
    if (paciente.especialidad === "Pediatra") return false;
  }
  return true;
};

// const resultado04 = hayPacientesDePediatria(pacientes);
// console.log(resultado04)

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const numeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (const paciente of pacientes) {
    switch (paciente.especialidad) {
      case "Cardiólogo":
        numeroPacientesPorEspecialidad.cardiologia += 1;
        break;
      case "Medico de familia":
        numeroPacientesPorEspecialidad.medicoDeFamilia += 1;
        break;
      case "Pediatra":
        numeroPacientesPorEspecialidad.pediatria += 1;
        break;
      default:
        break;
    }
  }
  return numeroPacientesPorEspecialidad;
};

//const resultado05 = cuentaPacientesPorEspecialidad(pacientes)
// console.log(resultado05)