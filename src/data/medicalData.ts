export interface Specialty {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  commonProcedures: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  badge: string;
  avatarInitials: string;
}

export const CLINIC_CONFIG = {
  name: "Centro Médico Atlântico",
  tagline: "Saúde, cuidado e confiança.",
  demoDisclaimer: "Site demonstrativo criado pela SoluDigital.",
  demoLegalNotice: "Este é um projeto demonstrativo para apresentação a cliente. Todos os profissionais, contactos, endereços e horários são estritamente fictícios e não representam uma unidade médica real.",
  whatsapp: {
    phoneNumber: "351912345678", // Fácil de alterar no código
    displayNumber: "+351 912 345 678 (Demo)",
    defaultMessage: "Olá! Gostaria de saber mais sobre as consultas no Centro Médico Atlântico (Demonstração SoluDigital).",
  },
  contacts: {
    phone: "+351 210 123 456 (Demonstrativo)",
    whatsapp: "+351 912 345 678 (Demonstrativo)",
    email: "contacto@centromedicoatlantico.exemplo.pt",
    address: "Avenida do Atlântico, N.º 450, Edifício Oceano, 1.º Piso, 1990-001 Lisboa (Endereço Fictício)",
    metroRef: "A 3 minutos da Estação do Oriente",
    parkingRef: "Estacionamento demonstrativo disponível no edifício",
    hours: [
      { days: "Segunda a Sexta-feira", time: "08:00 – 20:00" },
      { days: "Sábados", time: "08:00 – 14:00" },
      { days: "Domingos e Feriados", time: "Encerrado" },
    ],
  },
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "clinica-geral",
    name: "Clínica Geral",
    shortDesc: "Acompanhamento integral da sua saúde, medicina preventiva, avaliação clínica global e encaminhamento direcionado.",
    fullDesc: "A especialidade de Clínica Geral é o primeiro ponto de contacto para diagnóstico e acompanhamento contínuo. Focada no bem-estar integral de adultos e jovens, avalia o histórico médico com visão holística.",
    iconName: "Stethoscope",
    commonProcedures: [
      "Check-up preventivo de rotina",
      "Controle de tensão arterial e colesterol",
      "Acompanhamento de doenças crónicas",
      "Emissão de atestados médicos de aptidão",
    ],
  },
  {
    id: "pediatria",
    name: "Pediatria",
    shortDesc: "Cuidados dedicados ao desenvolvimento saudável de recém-nascidos, crianças e jovens até à adolescência.",
    fullDesc: "Um atendimento atencioso e adaptado ao universo infantil. O acompanhamento regular garante a monitorização precisa do crescimento, vacinação oportuna e apoio orientador aos pais.",
    iconName: "HeartPulse",
    commonProcedures: [
      "Consultas de puericultura e desenvolvimento",
      "Calendário vacinal e imunização",
      "Apoio ao aleitamento e nutrição infantil",
      "Tratamento de patologias respiratórias comuns",
    ],
  },
  {
    id: "cardiologia",
    name: "Cardiologia",
    shortDesc: "Diagnóstico preventivo, acompanhamento e controlo de condições do aparelho cardiovascular e hipertensão.",
    fullDesc: "Cuidado prioritário para a saúde do seu coração. Avaliações com metodologias modernas para identificar precocemente fatores de risco e preservar a sua qualidade de vida.",
    iconName: "Activity",
    commonProcedures: [
      "Eletrocardiograma de repouso (ECG)",
      "Avaliação de risco cardiovascular global",
      "Acompanhamento da hipertensão arterial",
      "Exame médico para prática desportiva",
    ],
  },
  {
    id: "ginecologia",
    name: "Ginecologia",
    shortDesc: "Atenção humanizada e confidencial à saúde feminina em todas as etapas, desde a adolescência à maturidade.",
    fullDesc: "Espaço de escuta ativa, confiança e cuidado personalizado. Acompanhamento rigoroso preventivo, rastreios oncológicos regulares e planeamento reprodutivo.",
    iconName: "Users",
    commonProcedures: [
      "Consulta ginecológica e rastreio citológico",
      "Aconselhamento e planeamento familiar",
      "Acompanhamento de menopausa e climatério",
      "Ecografia ginecológica de rotina",
    ],
  },
  {
    id: "odontologia",
    name: "Odontologia",
    shortDesc: "Tratamentos dentários modernos com foco na preservação, estética oral, profilaxia e reabilitação funcional.",
    fullDesc: "Saúde oral com conforto e tecnologia de ponta. Desde a higienização profunda a procedimentos restauradores para um sorriso saudável e harmonioso.",
    iconName: "Smile",
    commonProcedures: [
      "Destartarização e profilaxia com flúor",
      "Restaurações estéticas diretas",
      "Avaliação ortodôntica preventiva",
      "Tratamento periodontal e gengival",
    ],
  },
  {
    id: "laboratorio",
    name: "Laboratório",
    shortDesc: "Colheitas e análises clínicas com rapidez, rigor analítico e protocolos de biossegurança de excelência.",
    fullDesc: "Unidade de apoio diagnóstico que assegura colheitas confortáveis e emissão rápida de parâmetros analíticos essenciais para o acompanhamento clínico.",
    iconName: "FlaskConical",
    commonProcedures: [
      "Hemograma completo e coagulação",
      "Painel bioquímico, glicemia e perfil lipídico",
      "Análises de urina e fezes",
      "Painel hormonal e tiróide",
    ],
  },
];

export const HIGHLIGHTS = [
  {
    title: "Atendimento profissional",
    description: "Equipa focada em padrões rigorosos de qualidade, ética deontológica e escuta atenta das necessidades de cada paciente.",
    icon: "Award",
  },
  {
    title: "Diversas especialidades",
    description: "Cobertura integrada de áreas essenciais da medicina para acompanhamento completo de todas as faixas etárias.",
    icon: "Layers",
  },
  {
    title: "Marcação de consultas",
    description: "Processo digital simplificado para solicitar agendamentos de forma rápida e conveniente a partir de qualquer dispositivo.",
    icon: "CalendarCheck",
  },
  {
    title: "Atendimento humanizado",
    description: "Ambiente acolhedor, pontualidade no atendimento e respeito pelo bem-estar e tranquilidade de quem nos procura.",
    icon: "HeartHandshake",
  },
];

export const DEMO_DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Exemplo Cardiologia",
    specialty: "Cardiologia Geral — Perfil Demonstrativo",
    experience: "Exemplo ilustrativo",
    bio: "Profissional demonstrativo dedicado à prevenção cardiovascular, avaliação clínica e orientação para estilos de vida saudáveis.",
    badge: "Perfil Ilustrativo",
    avatarInitials: "DC",
  },
  {
    id: "doc-2",
    name: "Dra. Exemplo Pediatria",
    specialty: "Pediatria — Perfil Demonstrativo",
    experience: "Exemplo ilustrativo",
    bio: "Perfil demonstrativo orientado para o desenvolvimento harmonioso de crianças e jovens, com foco em comunicação calorosa e preventiva.",
    badge: "Perfil Ilustrativo",
    avatarInitials: "DP",
  },
  {
    id: "doc-3",
    name: "Dr. Exemplo Clínica Geral",
    specialty: "Clínica Geral e Familiar — Perfil Demonstrativo",
    experience: "Exemplo ilustrativo",
    bio: "Profissional demonstrativo com abordagem integrada à medicina preventiva, check-ups periódicos e acompanhamento de saúde continuada.",
    badge: "Perfil Ilustrativo",
    avatarInitials: "DG",
  },
  {
    id: "doc-4",
    name: "Dra. Exemplo Ginecologia",
    specialty: "Ginecologia — Perfil Demonstrativo",
    experience: "Exemplo ilustrativo",
    bio: "Perfil demonstrativo centrado na saúde da mulher, consultas de rotina e bem-estar nas diferentes fases da vida feminina.",
    badge: "Perfil Ilustrativo",
    avatarInitials: "DE",
  },
];
