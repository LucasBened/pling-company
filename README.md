<div align="center">
  <img src="./src/assets/logo_full.svg" alt="Pling Company Logo" width="300" />
  
  # Pling Company - Landing Page
  
  ### 🚀 Potencialize seu crescimento com campanhas de tráfego pago que convertem
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

</div>

## 📋 Sobre o Projeto

Este é o website oficial da **Pling Company**, uma agência especializada em **tráfego pago** que conecta empresas ao público certo no momento exato. O projeto foi desenvolvido como um freelancer para criar uma landing page moderna, responsiva e com animações elegantes que destacam os serviços da empresa.

### 🎯 Objetivo da Pling Company

A Pling Company cria e gerencia campanhas de tráfego pago focadas em resultados, com a missão de:

- Conectar empresas ao público-alvo ideal
- Transformar cliques em clientes reais
- Impulsionar vendas através de estratégias de marketing digital
- Otimizar ROI em campanhas pagas

## ✨ Características

- 📱 **Design Responsivo** - Otimizado para todos os dispositivos
- 🎭 **Animações Elegantes** - Implementadas com Framer Motion
- 🎨 **UI Moderna** - Interface limpa e profissional
- ⚡ **Performance Otimizada** - Construído com Vite
- 🌐 **SEO Friendly** - Estrutura semântica otimizada

## 🆕 Funcionalidades 

### 🌐 SEO Avançado

- **Meta Tags Otimizadas:** Meta tags completas para SEO, Open Graph e Twitter Cards, melhorando indexação e compartilhamento.
- **Estrutura Semântica:** Uso de tags semânticas (`<main>`, `<header>`, `<footer>`) e atributos ARIA para acessibilidade e SEO.
- **Imagens com `alt` descritivo:** Todas as imagens possuem textos alternativos otimizados para buscadores.
- **URL Canônica:** Implementação de `<link rel="canonical">` para evitar conteúdo duplicado.

### 📬 Formulário de Contato Moderno

- **Validação com Zod e React Hook Form:** Formulário utiliza `react-hook-form` para gerenciamento de estado e `zod` para validação robusta dos campos.
- **Mensagens de erro customizadas:** Feedback claro e amigável para cada campo inválido.
- **Envio via API HubSpot:** Integração direta com HubSpot para captação de leads, com tratamento de sucesso/erro e reset automático do formulário.
- **Acessibilidade:** Labels, estados de erro e navegação por teclado otimizados.
- **Estilização personalizada:** CSS avançado para inputs, selects, botões e mensagens, garantindo visual consistente e responsivo.

### 🖥️ Novos Componentes e UI

- **Botões 3D e micro-interações:** Novos estilos de botão e efeitos visuais para aumentar engajamento.
- **Separadores e badges customizados:** Componentes reutilizáveis para destacar informações importantes.
- **Animações Framer Motion:** Novos efeitos de entrada, shake, stagger e reveal em seções e elementos-chave.

### 📊 Metodologia e Transparência

- **Foco em Resultados Reais:** Métricas e seções que destacam performance, ROI e crescimento, com explicações claras para o cliente.
- **Relatórios e Tracking:** Implementação de tracking e analytics para acompanhamento de campanhas.

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para maior robustez
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones SVG otimizados
- **React Hook Form** e **Zod** - Formulários reativos e validação robusta

### Ferramentas de Desenvolvimento

- **Vite** - Build tool rápido e moderno
- **ESLint** - Linting e formatação de código
- **PostCSS** - Processamento de CSS
- **PNPM** - Gerenciador de pacotes eficiente
- **HubSpot API** - Integração de leads
- **Tailwind Merge/Variants** - Composição de estilos avançados

## 📈 SEO & Performance

- **Lighthouse Score:** Estrutura pensada para alta performance e pontuação máxima em SEO, acessibilidade e melhores práticas.
- **Lazy Loading de imagens:** Carregamento otimizado para imagens grandes.
- **Breakpoints e tipografia responsiva:** Experiência perfeita em qualquer dispositivo.

## 📬 Formulário de Contato

O formulário de contato foi totalmente refeito para garantir:

- Validação instantânea e amigável
- Integração direta com HubSpot
- Mensagens de sucesso/erro claras
- Campos obrigatórios e opcionais bem definidos
- Experiência mobile-first

## 🎨 Estrutura do Projeto

```
src/
├── assets/           # Imagens, SVGs e outros recursos
│   ├── images/       # Imagens do projeto
│   ├── logo_full.svg # Logo da empresa
│   └── animated.svg  # Ilustração principal
├── components/       # Componentes React
│   ├── ui/          # Componentes de UI reutilizáveis
│   ├── Header.tsx   # Cabeçalho responsivo
│   ├── Bean.tsx     # Componente de badge
│   └── [Social].tsx # Ícones das redes sociais
├── lib/             # Utilitários e configurações
│   └── utils.ts     # Funções utilitárias
├── App.tsx          # Componente principal
└── main.tsx         # Ponto de entrada da aplicação
```

## 🎭 Animações Implementadas

### Framer Motion Features

- **Stagger Animations** - Elementos aparecem sequencialmente
- **Fade In Up** - Texto surge de baixo para cima
- **Image Reveal** - Imagem principal com entrada suave
- **Social Icons Animation** - Ícones aparecem de baixo para cima
- **Bell Shake** - Sino tremula após todas as animações
- **Hover Effects** - Interações nos botões

### Responsividade

- **Mobile First** - Design otimizado para dispositivos móveis
- **Breakpoints Tailwind** - sm, md, lg, xl, 2xl
- **Typography Scaling** - Textos se ajustam proporcionalmente
- **Icon Sizing** - Ícones respondem ao tamanho da tela

## 📱 Compatibilidade

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Dispositivos móveis (iOS/Android)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**Lucas Benedito**

- GitHub: [@LucasBened](https://github.com/LucasBened)
- LinkedIn: [Lucas Benedito](https://www.linkedin.com/in/lucas-benedito)

## 🏢 Cliente

**Pling Company**

- Especializada em tráfego pago e marketing digital
- Foco em resultados e ROI otimizado
- Conectando empresas ao público certo

---

<div align="center">
  <p>Desenvolvido com ❤️ para a Pling Company</p>
  <p>© 2025 Pling Company. Todos os direitos reservados.</p>
</div>
