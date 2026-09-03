import { footer, site } from "@/data/content";

const updatedAt = "3 de setembro de 2026";

export const termsOfUse = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site e da mentoria Júnior Maffille para padarias e negócios do setor alimentício.",
  updatedAt,
  intro:
    "Ao acessar este site e utilizar nossos canais de contato, você concorda com estes Termos de Uso. Leia atentamente antes de enviar dados ou iniciar qualquer conversa sobre a mentoria.",
  sections: [
    {
      title: "1. Objeto",
      paragraphs: [
        "Este site apresenta informações sobre a mentoria de Júnior Maffille voltada a padarias e negócios do setor alimentício, permitindo conhecer a proposta, solicitar contato e iniciar conversas com a equipe.",
      ],
    },
    {
      title: "2. Natureza do serviço",
      paragraphs: [
        "A mentoria é uma experiência educacional de gestão, execução e desenvolvimento de negócios. Não constitui promessa ou garantia de resultados financeiros, pois estes dependem do contexto de cada operação, das decisões tomadas e da execução do participante.",
        "O conteúdo disponibilizado não substitui assessoria jurídica, contábil, financeira ou de saúde individualizada.",
      ],
    },
    {
      title: "3. Uso permitido",
      paragraphs: [
        "Você deve utilizar o site de forma lícita, fornecendo informações verdadeiras ao preencher formulários e ao entrar em contato pelos canais disponibilizados.",
        "É proibido utilizar o site para fins ilícitos, envio de conteúdo ofensivo, tentativa de acesso não autorizado a sistemas ou qualquer conduta que prejudique o funcionamento da plataforma.",
      ],
    },
    {
      title: "4. Propriedade intelectual",
      paragraphs: [
        "Textos, imagens, marcas, layout, identidade visual e demais conteúdos deste site pertencem a Júnior Maffille ou a seus licenciadores, sendo vedada a reprodução, distribuição ou uso comercial sem autorização prévia.",
      ],
    },
    {
      title: "5. Links e redirecionamentos",
      paragraphs: [
        "O site pode conter links para WhatsApp, e-mail e páginas externas. Ao acessar serviços de terceiros, você estará sujeito às regras e políticas dessas plataformas.",
      ],
    },
    {
      title: "6. Limitação de responsabilidade",
      paragraphs: [
        "Empregamos esforços razoáveis para manter o site disponível e atualizado, mas não garantimos funcionamento ininterrupto ou ausência de erros.",
        "Não nos responsabilizamos por decisões tomadas com base exclusivamente nas informações publicadas, nem por indisponibilidades causadas por fatores externos, como falhas de conexão ou serviços de terceiros.",
      ],
    },
    {
      title: "7. Alterações",
      paragraphs: [
        "Estes Termos de Uso podem ser atualizados a qualquer momento. A data da última revisão será indicada no topo desta página. O uso continuado do site após alterações implica concordância com a versão vigente.",
      ],
    },
    {
      title: "8. Contato",
      paragraphs: [
        `Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail ${footer.contact.emailLabel} ou pelo WhatsApp ${site.phoneDisplay}.`,
      ],
    },
  ],
} as const;

export const privacyPolicy = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade e tratamento de dados pessoais do site da mentoria Júnior Maffille.",
  updatedAt,
  intro:
    "Esta Política de Privacidade descreve como coletamos, usamos e protegemos seus dados pessoais ao acessar este site e ao entrar em contato conosco, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  sections: [
    {
      title: "1. Quem somos",
      paragraphs: [
        `${footer.company} ${footer.location}`,
        `Canal de contato: ${footer.contact.emailLabel} · WhatsApp ${site.phoneDisplay}.`,
      ],
    },
    {
      title: "2. Dados que podemos coletar",
      paragraphs: [
        "Podemos coletar nome, telefone, WhatsApp, nome da padaria, cidade, e-mail e demais informações que você informar voluntariamente em formulários ou mensagens.",
        "Também podemos registrar dados técnicos de navegação, como endereço IP, tipo de navegador, páginas acessadas e data/hora de acesso, quando aplicável.",
      ],
    },
    {
      title: "3. Finalidade do tratamento",
      paragraphs: [
        "Utilizamos seus dados para responder solicitações de contato, avaliar interesse na mentoria, direcionar conversas com a equipe, melhorar a experiência no site e cumprir obrigações legais.",
      ],
    },
    {
      title: "4. Base legal",
      paragraphs: [
        "O tratamento ocorre com base no consentimento do titular, na execução de procedimentos preliminares relacionados a contrato a pedido do titular e, quando necessário, no legítimo interesse de atendimento e segurança.",
      ],
    },
    {
      title: "5. Compartilhamento",
      paragraphs: [
        "Seus dados não são vendidos. Podemos compartilhá-los apenas com prestadores de serviço essenciais, como ferramentas de comunicação e hospedagem, sempre dentro dos limites necessários para a operação do site e do atendimento.",
      ],
    },
    {
      title: "6. Armazenamento e segurança",
      paragraphs: [
        "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acesso não autorizado, perda ou uso indevido.",
        "Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.",
      ],
    },
    {
      title: "7. Seus direitos",
      paragraphs: [
        "Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamentos e revogação do consentimento, quando aplicável.",
      ],
    },
    {
      title: "8. Cookies e tecnologias similares",
      paragraphs: [
        "Este site pode utilizar cookies ou tecnologias similares para funcionamento, desempenho e análise de uso. Você pode gerenciar cookies nas configurações do seu navegador.",
      ],
    },
    {
      title: "9. Alterações desta política",
      paragraphs: [
        "Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos revisitar esta página para acompanhar eventuais mudanças.",
      ],
    },
    {
      title: "10. Contato",
      paragraphs: [
        `Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail ${footer.contact.emailLabel} ou pelo WhatsApp ${site.phoneDisplay}.`,
      ],
    },
  ],
} as const;
