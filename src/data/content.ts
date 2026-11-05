export const site = {
  name: "Júnior Maffille",
  brand: "Mentoria Júnior Maffille",
  title: "Mentoria Júnior Maffille — Transforme sua padaria",
  description:
    "Transforme sua padaria com a mentoria que já mudou centenas de negócios. De prejuízo ao crescimento de até 3x em apenas 6 meses.",
  url: "https://www.juniormaffille.com",
  locale: "pt_BR",
  phoneDisplay: "(31) 9175-5440",
  whatsapp: "553191755440",
  whatsappHref:
    "https://wa.me/553191755440?text=Junior%20quero%20ser%20mentorado",
} as const;

export const navLinks = [
  { href: "#mentor", label: "O mentor" },
  { href: "#metodo", label: "O método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
] as const;

export const hero = {
  eyebrow: "Mentoria exclusiva para padarias",
  headline: "Transforme sua padaria com a mentoria que já mudou centenas de negócios",
  subheadline:
    "De prejuízo ao crescimento de até 3x em apenas 6 meses. A experiência de Júnior Maffille agora ao seu alcance.",
  primaryCta: "Quero ser mentorado",
  secondaryCta: "Ver resultados",
  image: {
    src: "/images/hero-sunset.png",
    alt: "Júnior Maffille em ambiente urbano ao pôr do sol, vestindo terno, com a cidade ao fundo",
  },
} as const;

export const mentor = {
  id: "mentor",
  eyebrow: "Sobre o mentor",
  title: "Referência nacional em gestão de padarias",
  body: "Júnior Maffille é referência nacional em gestão de padarias e negócios do setor alimentício, unindo experiência prática, visão estratégica e resultados comprovados.",
  paragraphs: [
    "Júnior Maffille é referência nacional em gestão de padarias e negócios do setor alimentício, unindo experiência prática, visão estratégica e resultados comprovados.",
    "Além de empresário e mentor, é idealizador da PANIFAIR, um dos maiores eventos de panificação da América Latina e referência no setor em Minas Gerais, reunindo empresários, especialistas e grandes nomes do mercado. Também está à frente da Padaria Maffille, reconhecida entre as melhores padarias de Minas Gerais.",
    "Por meio de sua mentoria prática e estratégica, Júnior ajuda empresários a organizar a gestão, aumentar a lucratividade e transformar seus negócios em empresas mais rentáveis, estruturadas e preparadas para crescer de forma consistente.",
  ],
  quote: "Quem aplica a metodologia cresce, quem adia fica para trás.",
  author: "Júnior Maffille",
  portrait: {
    src: "/images/mentor-nobg.png",
    alt: "Júnior Maffille, mentor de padarias e negócios alimentícios",
  },
  logo: {
    src: "/images/maffille-logo.webp",
    alt: "Maffille — padaria, restaurante e confeitaria",
    href: "https://padariamaffille.com.br/",
  },
  panifairLogo: {
    src: "/images/logo.svg",
    alt: "PANIFAIR — Feira Internacional da Panificação",
    href: "https://www.panifair.com/",
  },
} as const;

export const gallery = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Júnior Maffille em Paris, com a Torre Eiffel ao fundo",
    caption: "Elegância internacional",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Júnior Maffille em ambiente urbano moderno",
    caption: "Visão estratégica",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Júnior Maffille em evento formal",
    caption: "Presença executiva",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Júnior Maffille em ambiente clássico",
    caption: "Classe atemporal",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Júnior Maffille com iluminação dramática",
    caption: "Liderança marcante",
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Júnior Maffille em cenário histórico",
    caption: "Tradição e inovação",
  },
] as const;

export const decision = {
  id: "metodo",
  eyebrow: "O momento da decisão",
  title: "Decisão no tempo certo muda o jogo.",
  body: "Empresários que prosperam não esperam a 'hora perfeita'. Eles agem com precisão. A mentoria do Júnior Maffille encurta o caminho, elimina tentativas aleatórias e orienta cada passo com método — para você decidir melhor, na hora certa, e crescer com consistência.",
  image: {
    src: "/images/decision-watch.png",
    alt: "Relógio de bolso nas mãos — o momento decisivo",
  },
  vision: {
    title: "Visão de futuro",
    text: "Quem decide rápido com método, cresce primeiro.",
    body: "Empresários que prosperam não esperam a hora perfeita. Eles agem com precisão — e o método encurta o caminho até o resultado.",
    items: [
      {
        src: "/images/gallery/1.jpg",
        alt: "Júnior Maffille em Paris, com a Torre Eiffel ao fundo",
        title: "Elegância",
      },
      {
        src: "/images/gallery/2.jpg",
        alt: "Júnior Maffille em ambiente urbano moderno",
        title: "Visão",
      },
      {
        src: "/images/gallery/3.jpg",
        alt: "Júnior Maffille em evento formal",
        title: "Presença",
      },
      {
        src: "/images/gallery/4.jpg",
        alt: "Júnior Maffille em ambiente clássico",
        title: "Tradição",
      },
      {
        src: "/images/gallery/5.jpg",
        alt: "Júnior Maffille com iluminação dramática",
        title: "Liderança",
      },
    ],
  },
  pillars: [
    {
      title: "Direção clara",
      text: "Priorize o que dá resultado.",
    },
    {
      title: "Aceleração com controle",
      text: "Cresça sem perder margem.",
    },
    {
      title: "Accountability",
      text: "Tire planos do papel.",
    },
  ],
  cta: "Quero essa mentoria",
} as const;

export const results = {
  id: "resultados",
  eyebrow: "Case real",
  title: "Resultados reais em operação: Maffille Padaria",
  body: "Atuação prática em loja, ajustes de mix, fluxo, exposição e atendimento. Crescimento com base em dados e rotina.",
  metrics: [
    { value: "+32%", label: "Ticket médio em 90 dias" },
    { value: "+18%", label: "Frequência de clientes" },
    { value: "−22%", label: "Quedas de ruptura" },
    { value: "+41%", label: "Giro de itens estratégicos" },
  ],
  photos: [
    {
      src: "/images/cases/1.jpg",
      alt: "Salão da padaria com mesas cheias e fluxo de clientes",
      caption: "Salão em horário de pico",
    },
    {
      src: "/images/cases/2.jpg",
      alt: "Fila no balcão e vitrine com produtos em destaque",
      caption: "Balcão e vitrine ativa",
    },
    {
      src: "/images/cases/3.jpg",
      alt: "Ambiente amplo com luminárias e atendimento em operação",
      caption: "Fluxo constante de atendimento",
    },
  ],
} as const;

export const benefits = {
  eyebrow: "Por que esta mentoria",
  title: "Por que escolher a mentoria Júnior Maffille?",
  items: [
    {
      title: "Aumento comprovado do faturamento",
      text: "Resultados reais com crescimento sustentável e duradouro.",
    },
    {
      title: "Estratégias práticas para padarias",
      text: "Métodos específicos e testados no setor de panificação.",
    },
    {
      title: "Acompanhamento direto com Júnior Maffille",
      text: "Mentoria personalizada com suporte exclusivo e dedicado.",
    },
    {
      title: "Metas claras e resultados mensuráveis",
      text: "Objetivos bem definidos com métricas precisas de sucesso.",
    },
  ],
} as const;

export const testimonials = {
  id: "depoimentos",
  eyebrow: "Prova social",
  title: "O que dizem sobre a mentoria",
  items: [
    {
      quote:
        "Segui o método e em 6 meses minha padaria triplicou o faturamento.",
      name: "Carlos",
      role: "SP",
    },
    {
      quote:
        "Saí do prejuízo e hoje tenho clientes fiéis e lucro todos os meses.",
      name: "Ana",
      role: "MG",
    },
    {
      quote:
        "Aplicamos a rotina diária e o faturamento respondeu nas primeiras semanas.",
      name: "Gerente de Loja",
      role: "Operação mentorada",
    },
    {
      quote: "Vitrine e mix certo mudaram a percepção do cliente.",
      name: "Coordenador de Padaria",
      role: "Operação mentorada",
    },
    {
      quote:
        "A mentoria de Júnior Maffille foi um divisor de águas para nosso negócio.",
      name: "Proprietário",
      role: "Padaria",
    },
  ],
} as const;

export const offer = {
  id: "oferta",
  eyebrow: "Próximo passo",
  title: "Pronto para transformar sua padaria?",
  body: "Preencha seus dados e fale direto com a mentoria no WhatsApp.",
  primaryCta: "Quero ser mentorado",
  secondaryCta: "Falar no WhatsApp",
  form: {
    fields: {
      name: { name: "nome", label: "Nome", placeholder: "Seu nome" },
      bakery: { name: "padaria", label: "Padaria", placeholder: "Nome da padaria" },
      city: { name: "cidade", label: "Cidade", placeholder: "Cidade e estado" },
      phone: { name: "whatsapp", label: "WhatsApp", placeholder: "(31) 99999-9999" },
    },
    submit: "Quero ser mentorado",
    messageIntro: "Olá Júnior, quero ser mentorado.",
  },
} as const;

export const faq = {
  id: "faq",
  eyebrow: "Dúvidas frequentes",
  title: "O que você precisa saber antes de começar",
  items: [
    {
      question: "Em quanto tempo os resultados aparecem?",
      answer:
        "Há casos de resposta nas primeiras semanas com a rotina diária aplicada. Na operação da Maffille Padaria, o ticket médio subiu 32% em 90 dias. A mentoria trabalha um horizonte de até 3x de crescimento em 6 meses.",
    },
    {
      question: "A mentoria é específica para padarias?",
      answer:
        "Sim. As estratégias são práticas, específicas e testadas no setor de panificação e negócios do setor alimentício — mix, vitrine, fluxo, exposição, atendimento e rotina de loja.",
    },
    {
      question: "O acompanhamento é direto com o Júnior Maffille?",
      answer:
        "Sim. A mentoria é personalizada, com acompanhamento direto e suporte exclusivo e dedicado.",
    },
    {
      question: "Como eu começo?",
      answer:
        "Pelo WhatsApp. Não há formulário intermediário: você fala direto com a equipe da mentoria e inicia a conversa sobre o momento do seu negócio.",
    },
  ],
} as const;

export const footer = {
  disclaimer:
    "A mentoria não oferece garantia de resultados financeiros. Os resultados dependem do contexto, das decisões e da execução de cada participante. O programa é uma experiência educacional de gestão e execução para padarias. Não substitui assessoria jurídica, contábil ou financeira individualizada.",
  company: "Júnior Maffille · Mentoria para Padarias.",
  location: "Minas Gerais, Brasil.",
  contact: {
    email: "contato@juniormaffille.com.br",
    emailLabel: "contato@juniormaffille.com.br",
  },
  legal: {
    prefix: "Ao acessar esta página, você concorda com os",
    terms: "Termos de Uso",
    termsHref: "/termos",
    and: "e a",
    privacy: "Política de Privacidade",
    privacyHref: "/privacidade",
    suffix: ".",
  },
} as const;
