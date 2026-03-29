# 👩‍🍳 Cláudia Magalhães | Personal Chef

> Landing page desenvolvida para captação de clientes e apresentação de serviços de Personal Chef no Rio de Janeiro.

![React](https://img.shields.io/badge/react-19.2.0-blue.svg?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-7.3.1-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/sass-1.97.3-hotpink.svg?style=for-the-badge&logo=sass&logoColor=white)

## 📌 Sobre o Projeto

Este projeto é uma Single Page Application (SPA) criada para **Cláudia Magalhães**, profissional com mais de 15 anos de experiência em gastronomia no RJ (Méier, Tijuca e adjacências).

O principal foco técnico aqui foi a **performance** (daí a escolha do Vite) e **SEO local**, estruturando as meta tags e dados estruturados para rankear bem em buscas por "Personal Chef na Zona Norte".

## 🛠️ Tech Stack

- **React 19** 
- **Vite** pro build super rápido
- **Sass (.scss)** usando CSS Modules para evitar colisão de classes
- **React Icons** pro uso leve de SVGs na interface

## 🚀 Como rodar na sua máquina

Certifique-se de ter o **Node.js** instalado (v18 ou superior).

1. Clone esse repositório
```bash
git clone <url-do-repositorio>
```

2. Entre na pasta
```bash
cd "Cláudia Magalhães - Personal Chef"
```

3. Instale as dependências
```bash
npm install
```

4. Suba o ambiente de dev
```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador. Os hot-reloads ("HMR") do Vite estão ativos por padrão, então as mudanças no código refletem instantaneamente.

## 🏗️ Estrutura de Pastas (Principais)

- `src/components/`: Aqui ficam as seções da Landing Page (`About`, `Services`, `Header`, `CTA`, etc), cada uma com seu próprio `index.jsx` e `style.module.scss`.
- `public/`: Assets que não precisam passar pelo bundler (favicon, imagens cruas pro SEO).

---
*Desenvolvido por **[Giovana Aride](https://giovanaportifolio.vercel.app/)***
