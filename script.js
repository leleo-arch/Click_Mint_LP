document.addEventListener("DOMContentLoaded", function() {
    // Navegação
    const navItems = ["HOME", "SERVIÇOS", "PORTFÓLIO", "EQUIPE", "CONTATO"];
    const navList = document.getElementById('nav-list');
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${item.toLowerCase()}`;
        a.textContent = item;
        li.appendChild(a);
        navList.appendChild(li);
    });

    // Seção Hero
    const heroSection = document.getElementById('hero-section');
    heroSection.innerHTML = `
        <video autoplay muted loop>
            <source src="./assets/small.mp4" type="video/mp4">
            Seu navegador não suporta a tag de vídeo.
        </video>
        <h1>Designs Modernos que Transformam Cliques em Clientes</h1>
        <p>Somos uma agência digital que cria de forma imersiva e valoriza a experiência do usuário.</p>
        <button>Chame um Especialista</button>
    `;

    // Seção Stats
    const statsSection = document.getElementById('stats-section');
    statsSection.innerHTML = `
        <div>
            <h3>10+</h3>
            <p>Anos de Experiência</p>
        </div>
        <div>
            <h3>340+</h3>
            <p>Projetos de Sucesso</p>
        </div>
        <div>
            <h3>66+</</h3>
            <p>Clientes Satisfeitos</p>
        </div>
    `;

    // Seção Landing Pages
    const landingPagesSection = document.getElementById('landing-pages-section');
    landingPagesSection.innerHTML = `
        <h2>Landing Pages Otimizadas</h2>
        <p>Com mais de uma década de experiência, nossa agência de marketing digital transforma estratégias em resultados, impulsionando o sucesso online dos nossos clientes.</p>
        <img src="./assets/2.png" alt="Exemplo de Landing Page">
        <img src="/assets/4.png" alt="Benefícios de Trabalhar Conosco">
        <img src="/assets/conversão 2.png" alt="Benefícios de Trabalhar Conosco">
    `;

    // Seção Benefícios
    const benefitsSection = document.getElementById('benefits-section');
    benefitsSection.innerHTML = `
        <h2>Benefícios e Diferenciais</h2>
        <p>Destaque os benefícios de trabalhar com a agência, como aumento de conversão, design personalizado, experiência do usuário otimizada, etc.</p>
        <img src="/assets/Design totalmente responsivo para todos os dispositivos.png" alt="Benefícios de Trabalhar Conosco">
    `;

    // Formulário de Contato
    const contactFormSection = document.getElementById('contact-form-section');
    contactFormSection.innerHTML = `
        <h2>Fale Conosco</h2>
        <form action="#">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" required>
            <label for="sobrenome">Sobrenome</label>
            <input type="text" id="sobrenome" name="sobrenome" required>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" placeholder="+199 999 999 999" required>
            <label for="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
            <button type="submit">Enviar Mensagem</button>
        </form>
    `;
});
