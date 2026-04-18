// ==========================================
// ROLAGEM SUAVE DO MENU E DROPDOWN
// ==========================================
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

const settingsBtn = document.getElementById('settings-btn');
const settingsDropdown = document.getElementById('settings-dropdown');

settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsDropdown.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!settingsDropdown.contains(e.target) && e.target !== settingsBtn) {
        settingsDropdown.classList.add('hidden');
    }
});

// ==========================================
// TEMA E IDIOMA
// ==========================================
const themeSelect = document.getElementById('theme-select');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeSelect.value = 'light';
}

themeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'light') {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});

const langSelect = document.getElementById('lang-select');

const translations = {
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_skills: "Habilidades", nav_projects: "Projetos", nav_certs: "Certificados", nav_contact: "Contato",
        config_theme: "Tema:", theme_dark: "Dark", theme_light: "Light", config_lang: "Idioma:",
        
        hero_title: "Desenvolvedor Full Stack.",
        hero_welcome: "Seja bem-vindo! Preparei este espaço para que você conheça de perto o meu trabalho. Aqui irei compartilhar um pouco sobre minha vida pessoal e profissional, apresentarei as tecnologias que utilizo no dia a dia junto com os projetos que venho construindo nesse caminho.",
        hero_quote: "Programação é a arte de encontrar soluções elegantes para problemas complexos.",
        // NOVO TEXTO DE APOIO AQUI:
        hero_desc_new: "Especializado em arquiteturas escaláveis, automações inteligentes e inteligência de dados. Transformo lógica de programação em aplicações reais que otimizam processos utilizando o poder do JavaScript, Python e PHP.",
        hero_btn1: "Explorar Projetos", 
        
        about_title: "Olá, meu nome é Kauan Santana",
        about_p1: "Tenho 22 anos, sou de São Paulo/SP, nascido em 08 de julho de 2003. Sou graduado em Análise e Desenvolvimento de Sistemas pelo Senac, onde me especializei na intersecção entre o desenvolvimento de software e a inteligência de dados. Minha missão é projetar e entregar aplicações funcionais que otimizem fluxos de trabalho através de tecnologia de ponta.",
        about_p2: "No desenvolvimento de sistemas, possuo domínio em HTML5, CSS3 e JavaScript para a criação de interfaces dinâmicas e responsivas. Além disso, atuo com PHP e Python, explorando a versatilidade dessas linguagens para o desenvolvimento de lógica de programação robusta, integração de sistemas e manipulação eficiente de dados estruturados.",
        about_p3: "Nas horas vagas, sou um entusiasta de video games, leitura, futebol e musculação.",
        about_btn1: "Ver Projetos", about_btn2: "Ver Currículo",
        comp_title: "Minhas Competências",
        c1: "Lógica de Programação", c2: "Desenvolvimento Full Stack", c3: "Otimização de Fluxos", c4: "Análise de Dados", c5: "Resolução de Problemas", c6: "Integração de Sistemas", c7: "Aprendizado Contínuo", c8: "Trabalho em Equipe",
        
        tech_title: "Ferramentas e Tecnologias",
        tech_desc: "O arsenal técnico que utilizo para transformar ideias em aplicações completas, do front-end ao banco de dados.",

        btn_access: "Acessar",
        btn_repo: "Repositório",
        
        proj_title: "Meus Projetos",
        p_westeros: "Enciclopédia interativa (Vanilla JS) com dados de Game of Thrones. Possui busca, mapa interativo (Panzoom) e troca dinâmica de temas via CSS nativo, alimentada por um banco JSON forjado em Python.",
        p_poke: "Guia web completo consumindo a PokéAPI via Fetch. Além da Pokédex, TMs/HMs e itens, conta com mapas interativos e um 'Team Builder' salvo localmente via LocalStorage.",
        p_rpa: "Robô autônomo (RPA) para otimização de entrada de dados em ERPs. Realiza login, lê dados de planilhas e preenche múltiplos formulários simulando teclado e mouse via PyAutoGUI.",
        p_data: "Estudo de caso em ciência de dados utilizando Pandas para analisar o cancelamento de clientes (Churn). O projeto limpa dados, identifica gargalos e simula ações preditivas baseadas em padrões.",
        p_drink: "Plataforma web de e-commerce e gestão. Possui área do cliente para compras e um painel administrativo robusto com controle de acesso para gerenciar pedidos, usuários e estoque de forma segura.",
        p_zoo: "Plataforma interativa para preservação da fauna. Foco total em UX/UI, utilizando jQuery para componentes dinâmicos (carrosséis, datepicker) e sistema de gamificação com quiz integrado.",
        
        contact_title: "Entre em Contato",
        contact_sub: "Tem um projeto em mente?",
        contact_desc: "Estou disponível para novos desafios e oportunidades. Se você precisa de um desenvolvedor para tirar sua ideia do papel ou otimizar processos na sua empresa, me mande uma mensagem!",
        c_loc: "Localização", c_city: "São Paulo, SP - Brasil",
        
        f_name: "Seu nome", f_email: "Seu email", f_subj: "Assunto", f_msg: "Sua mensagem", f_btn: "Enviar Mensagem",

        priv_back: "Voltar para o Início",
        priv_h1: "Política de privacidade",
        priv_sub: "Como lido com seus dados",
        priv_p1: "Este site não coleta nenhum dado pessoal. Ele não define nenhum cookie e não usa nenhum script de rastreamento de terceiros. Nenhuma análise de usuário ou outra métrica é processada durante a sua visita, e o servidor não grava nenhum arquivo de log, o que significa que seu endereço IP não é armazenado em nenhum lugar.",
        priv_p2: "No fundo é só um conteúdo livre, sem amarras.",
        priv_h2: "Transferência Segura de Dados",
        priv_p3: "Este site se transmite por meio de HTTPS, criptografando todos os dados entre o navegador e o servidor. Seu provedor de rede ainda pode ser capaz de ver que você está carregando arquivos a partir deste site, mas não o seu conteúdo. Isso também protege você de terceiros interceptando dados por exemplo, enquanto navega em WiFi público, ou provedores de rede injetando anúncios neste site.",
        
        foot_copy: "&copy; 2026 Kauan Santana. Todos os direitos reservados.",
        foot_dev: "Desenvolvido por <span>Kauan Santana | Full Stack</span>.",
        foot_priv: "Política de Privacidade"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_certs: "Certifications", nav_contact: "Contact",
        config_theme: "Theme:", theme_dark: "Dark", theme_light: "Light", config_lang: "Language:",
        
        hero_title: "Full Stack Developer.",
        hero_welcome: "Welcome! I prepared this space so you can get a closer look at my work. Here I will share a bit about my personal and professional life, present the technologies I use daily, along with the projects I've been building along the way.",
        hero_quote: "Programming is the art of finding elegant solutions to complex problems.",
        // NOVO TEXTO DE APOIO AQUI:
        hero_desc_new: "Specialized in scalable architectures, smart automations, and data intelligence. I transform programming logic into real-world applications that optimize processes leveraging the power of JavaScript, Python, and PHP.",
        hero_btn1: "Explore Projects",
        
        about_title: "Hello, my name is Kauan Santana",
        about_p1: "I am 22 years old, from São Paulo, Brazil, born on July 8, 2003. I hold a degree in Systems Analysis and Development from Senac, where I specialized in the intersection of software development and data intelligence. My mission is to design and deliver functional applications that optimize workflows through cutting-edge technology.",
        about_p2: "In systems development, I have expertise in HTML5, CSS3, and JavaScript for creating dynamic and responsive interfaces. In addition, I work with PHP and Python, exploring the versatility of these languages to develop robust programming logic, system integrations, and efficient manipulation of structured data.",
        about_p3: "In my spare time, I am an enthusiast of video games, reading, football, and weightlifting.",
        about_btn1: "View Projects", about_btn2: "View Resume",
        comp_title: "My Competencies",
        c1: "Programming Logic", c2: "Full Stack Development", c3: "Workflow Optimization", c4: "Data Analysis", c5: "Problem Solving", c6: "System Integration", c7: "Continuous Learning", c8: "Teamwork",
        
        tech_title: "Tools & Technologies",
        tech_desc: "The technical arsenal I use to turn ideas into full-fledged applications, from the front-end to the database.",

        btn_access: "Access",
        btn_repo: "Repository",
        
        proj_title: "My Projects",
        p_westeros: "Interactive encyclopedia (Vanilla JS) with Game of Thrones data. Features search, interactive map (Panzoom), and dynamic theme switching via native CSS, powered by a JSON database forged in Python.",
        p_poke: "Comprehensive web guide consuming the PokéAPI via Fetch. In addition to the Pokédex, TMs/HMs and items, it features interactive maps and a 'Team Builder' saved locally via LocalStorage.",
        p_rpa: "Autonomous robot (RPA) for optimizing data entry in ERPs. Performs login, reads data from spreadsheets, and fills multiple forms simulating keyboard and mouse via PyAutoGUI.",
        p_data: "Data science case study using Pandas to analyze customer churn. The project cleans data, identifies bottlenecks, and simulates predictive actions based on patterns.",
        p_drink: "Web e-commerce and management platform. Features a customer area for purchases and a robust administrative panel with access control to securely manage orders, users, and inventory.",
        p_zoo: "Interactive platform for wildlife preservation. Strong focus on UX/UI, using jQuery for dynamic components (carousels, datepicker) and a gamification system with an integrated quiz.",
        
        contact_title: "Get in Touch",
        contact_sub: "Have a project in mind?",
        contact_desc: "I am available for new challenges and opportunities. If you need a developer to bring your idea to life or optimize processes in your company, send me a message!",
        c_loc: "Location", c_city: "São Paulo, SP - Brazil",
        
        f_name: "Your name", f_email: "Your email", f_subj: "Subject", f_msg: "Your message", f_btn: "Send Message",

        priv_back: "Back to Home",
        priv_h1: "Privacy Policy",
        priv_sub: "How I handle your data",
        priv_p1: "This site does not collect any personal data. It does not set any cookies and does not use any third-party tracking scripts. No user analytics or other metrics are processed during your visit, and the server does not record any log files, meaning your IP address is not stored anywhere.",
        priv_p2: "Basically, it's just free content, no strings attached.",
        priv_h2: "Secure Data Transfer",
        priv_p3: "This site is transmitted via HTTPS, encrypting all data between the browser and the server. Your network provider may still be able to see that you are loading files from this site, but not their content. This also protects you from third parties intercepting data, for example, while browsing on public WiFi, or network providers injecting ads into this site.",
        
        foot_copy: "&copy; 2026 Kauan Santana. All rights reserved.",
        foot_dev: "Developed by <span>Kauan Santana | Full Stack</span>.",
        foot_priv: "Privacy Policy"
    }
};

// ==========================================
// EFEITO DE DIGITAÇÃO (AGORA MAIS LENTO)
// ==========================================
const typingElement = document.getElementById('typing-text');
let typingTimeout;

function typeWriter(text, i) {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        // Aumentado de 40 para 80 milissegundos
        typingTimeout = setTimeout(() => typeWriter(text, i + 1), 80); 
    }
}

function startTypingEffect(lang) {
    if(!typingElement) return; 
    
    clearTimeout(typingTimeout);
    typingElement.innerHTML = '';
    const textToType = translations[lang]['hero_quote'];
    typeWriter(textToType, 0);
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; 
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    startTypingEffect(lang);
}

const currentLang = localStorage.getItem('language') || 'pt';
if (langSelect) langSelect.value = currentLang;
applyLanguage(currentLang);

if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        applyLanguage(selectedLang);
        localStorage.setItem('language', selectedLang);
    });
}

// Botão voltar ao topo
const backToTopBtn = document.getElementById('back-to-top');
if(backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// ANIMAÇÃO DE SCROLL (REVEAL EFFECT) - CLEAN
// ==========================================

// 1. Selecionamos os blocos principais para animar inteiros (sem quebrar em itens pequenos)
const elementsToReveal = document.querySelectorAll(`
    .sobre-header, .sobre-texto p, .sobre-botoes, .sobre-foto, 
    .sobre-skills, /* Anima a lista inteira de uma vez */
    .skills-badges-img, /* Anima o bloco de badges inteiro de uma vez */
    .cartao-projeto, 
    .contato-header, .contato-info, .contato-form
`);

// 2. Adiciona a classe base de revelação (sem delays/cascatas)
elementsToReveal.forEach((el) => {
    el.classList.add('reveal');
});

// 3. Configura o Observador
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // O elemento começa a aparecer quando 15% dele estiver na tela
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Faz o bloco aparecer
            observer.unobserve(entry.target); // Anima só na primeira vez
        }
    });
}, observerOptions);

// 4. Inicia a observação
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

