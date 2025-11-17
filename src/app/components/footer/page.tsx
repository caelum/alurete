'use client';

import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function FooterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Footer</h1>
        <p>Componente de rodapé com links de navegação, redes sociais e apps.</p>
      </div>

      <section className={styles.section}>
        <h2>Footer Desktop</h2>
        <p className={styles.description}>Versão completa do footer para desktop.</p>
        <div className={styles.footerExample}>
          <Footer
            socialLinks={{
              youtube: 'https://youtube.com',
              facebook: 'https://facebook.com',
              twitter: 'https://twitter.com',
              instagram: 'https://instagram.com',
              discord: 'https://discord.com',
            }}
            appLinks={{
              googlePlay: 'https://play.google.com',
              appStore: 'https://apps.apple.com',
            }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Footer Mobile (Responsivo)</h2>
        <p className={styles.description}>O footer se adapta automaticamente em telas menores.</p>
        <div className={styles.footerExample} style={{ maxWidth: '360px' }}>
          <Footer
            socialLinks={{
              youtube: 'https://youtube.com',
              facebook: 'https://facebook.com',
              twitter: 'https://twitter.com',
              instagram: 'https://instagram.com',
              discord: 'https://discord.com',
            }}
            appLinks={{
              googlePlay: 'https://play.google.com',
              appStore: 'https://apps.apple.com',
            }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Footer com Seções Personalizadas</h2>
        <div className={styles.footerExample}>
          <Footer
            sections={[
              {
                title: 'EMPRESA',
                links: [
                  { label: 'Sobre nós', href: '#' },
                  { label: 'Carreiras', href: '#' },
                  { label: 'Imprensa', href: '#' },
                ],
              },
              {
                title: 'PRODUTOS',
                links: [
                  { label: 'Cursos', href: '#' },
                  { label: 'Formações', href: '#' },
                ],
              },
              {
                title: 'SUPORTE',
                links: [
                  { label: 'Central de ajuda', href: '#' },
                  { label: 'Contato', href: '#' },
                ],
              },
            ]}
            socialLinks={{
              youtube: 'https://youtube.com',
              facebook: 'https://facebook.com',
              instagram: 'https://instagram.com',
            }}
            appLinks={{
              googlePlay: 'https://play.google.com',
            }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Footer Minimalista</h2>
        <p className={styles.description}>Footer apenas com logo e redes sociais.</p>
        <div className={styles.footerExample}>
          <Footer
            sections={[]}
            socialLinks={{
              youtube: 'https://youtube.com',
              instagram: 'https://instagram.com',
              discord: 'https://discord.com',
            }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Especificações</h2>
        <div className={styles.specs}>
          <div className={styles.specItem}>
            <h3>Desktop</h3>
            <ul>
              <li>Max-width: 1298px</li>
              <li>Padding: 24px 32px</li>
              <li>Background: Indigo 50 (#eef2ff)</li>
              <li>Border-top: 0.5px solid #c7d2fe</li>
              <li>Layout: Flex horizontal</li>
              <li>Gap entre seções: 32px/56px</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3>Mobile</h3>
            <ul>
              <li>Padding: 34px 32px</li>
              <li>Layout: Flex vertical</li>
              <li>Todas as seções empilhadas</li>
              <li>Logo no topo</li>
              <li>Redes sociais e apps no final</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3>Elementos</h3>
            <ul>
              <li>Logo: 77.856px × 36px</li>
              <li>Títulos: Chakra Petch 11px</li>
              <li>Links: Open Sans 12px</li>
              <li>Ícones sociais: 24px × 24px</li>
              <li>Gap ícones: 10px</li>
              <li>Hover: opacity 0.7 em ícones</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Exemplo de Implementação</h2>
        <div className={styles.codeExample}>
          <pre>{`import { Footer } from '@/components/Footer';

<Footer
  sections={[
    {
      title: 'A ALURA',
      links: [
        { label: 'Sobre a Alura', href: '#' },
        { label: 'Dúvidas frequentes', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
  ]}
  socialLinks={{
    youtube: 'https://youtube.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  }}
  appLinks={{
    googlePlay: 'https://play.google.com',
    appStore: 'https://apps.apple.com',
  }}
/>`}</pre>
        </div>
      </section>
    </div>
  );
}
