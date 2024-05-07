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

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

const pacientesAsignadosApediatria =
  obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesAsignadosApediatria);

// b

const PacientesAsignadosAPediatriaYMenorDeDiezAnio: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.edad < 10);
};

// const resultado01B = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(
//   pacientesAsignadosApediatria
// )

// console.log(resultado01B)

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );
};

// const resultado02 = activarProtocoloUrgencia(pacientes)
// console.log(resultado02)

// Apartado 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de Familia",
      };
    }
    return paciente;
  });
};

const resultado03 = reasignaPacientesAMedicoFamilia(pacientes);
console.log(resultado03);

// Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

const resultado04 = hayPacientesDePediatria(pacientes);
console.log(resultado04);
console.log(pacientes);

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

  pacientes.map((paciente) => {
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
  });
  return numeroPacientesPorEspecialidad;
};

const resultado05 = cuentaPacientesPorEspecialidad(pacientes);
console.log(resultado05);
