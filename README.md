# Alurete Design System

Sistema de design da Alura com componentes prontos para usar em aplicações **JSP/Spring** e **React/Next.js**.

## 🎯 Para Desenvolvedores Spring (você!)

### Setup Rápido (2 minutos)

1. **Baixe o CSS pronto:**
   ```bash
   # Peça ao time de front-end ou baixe de:
   # dist/alurete-design-system.css
   ```

2. **Coloque no seu projeto Spring:**
   ```
   src/main/resources/static/css/alurete-design-system.css
   ```

3. **Adicione no seu JSP/template:**
   ```jsp
   <link rel="stylesheet" href="${pageContext.request.contextPath}/css/alurete-design-system.css">
   ```

4. **Pronto! Use os componentes:**
   ```html
   <button class="ds-button ds-button--primary ds-button--medium">
       Salvar
   </button>
   ```

### 📖 Documentação Completa

- **[GUIA-RAPIDO.md](./GUIA-RAPIDO.md)** - Todos os componentes com exemplos
- **[public/jsp-demo.html](./public/jsp-demo.html)** - Abra no navegador para ver exemplos visuais

### 🔄 Atualizando o CSS

Quando o time de front-end atualizar o design system:
1. Receba o novo `alurete-design-system.css`
2. Substitua o arquivo em `static/css/`
3. Limpe o cache do navegador (Ctrl+Shift+R)

---

## ⚛️ Para Desenvolvedores Front-end (React/Next.js)

### Rodar o projeto

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

### Gerar CSS para Spring

```bash
npm run build:static
```

Isso cria `dist/alurete-design-system.css` → enviar para o time back-end.

### Scripts

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run build:static` - **Gera CSS para JSP/Spring**
- `npm run lint` - Linter

---

## 📦 Tecnologias

- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules + Global CSS (BEM)

---

**Dúvidas?** Consulte o [GUIA-RAPIDO.md](./GUIA-RAPIDO.md) ou abra uma issue.
