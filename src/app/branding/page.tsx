'use client';

import { Brand } from '@/components/Brand';
import styles from './page.module.css';

export default function BrandPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Brand</h1>
        <p>Componentes de marca para as diferentes propriedades do grupo Alura.</p>
      </div>

      <section className={styles.section}>
        <h2>Todas as Marcas</h2>
        <p className={styles.description}>
          Versão default (escuro) de todas as marcas disponíveis.
        </p>
        <div className={styles.brandGrid}>
          <div className={styles.brandCard}>
            <Brand product="alura" />
            <span className={styles.brandLabel}>Alura</span>
          </div>
          <div className={styles.brandCard}>
            <Brand product="fiap" />
            <span className={styles.brandLabel}>FIAP</span>
          </div>
          <div className={styles.brandCard}>
            <Brand product="pm3" />
            <span className={styles.brandLabel}>PM3</span>
          </div>
          <div className={styles.brandCard}>
            <Brand product="empresas" />
            <span className={styles.brandLabel}>Alura para Empresas</span>
          </div>
          <div className={styles.brandCard}>
            <Brand product="alun" />
            <span className={styles.brandLabel}>Alun</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Variante Negative (Branco)</h2>
        <p className={styles.description}>
          Versão negative (branco) para uso em fundos escuros.
        </p>
        <div className={styles.brandGridDark}>
          <div className={styles.brandCardDark}>
            <Brand product="alura" variant="negative" />
            <span className={styles.brandLabelLight}>Alura</span>
          </div>
          <div className={styles.brandCardDark}>
            <Brand product="fiap" variant="negative" />
            <span className={styles.brandLabelLight}>FIAP</span>
          </div>
          <div className={styles.brandCardDark}>
            <Brand product="pm3" variant="negative" />
            <span className={styles.brandLabelLight}>PM3</span>
          </div>
          <div className={styles.brandCardDark}>
            <Brand product="empresas" variant="negative" />
            <span className={styles.brandLabelLight}>Alura para Empresas</span>
          </div>
          <div className={styles.brandCardDark}>
            <Brand product="alun" variant="negative" />
            <span className={styles.brandLabelLight}>Alun</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tamanhos Customizados</h2>
        <p className={styles.description}>
          As marcas podem ter tamanhos customizados via props width e height.
        </p>
        <div className={styles.sizeDemo}>
          <div className={styles.sizeCard}>
            <Brand product="alura" width={100} height={46} />
            <span className={styles.sizeLabel}>100 × 46</span>
          </div>
          <div className={styles.sizeCard}>
            <Brand product="alura" width={140} height={65} />
            <span className={styles.sizeLabel}>140 × 65 (default)</span>
          </div>
          <div className={styles.sizeCard}>
            <Brand product="alura" width={200} height={93} />
            <span className={styles.sizeLabel}>200 × 93</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Casos de Uso</h2>
        
        <div className={styles.useCaseSection}>
          <h3>Header com Logo</h3>
          <div className={styles.headerExample}>
            <Brand product="alura" width={90} height={42} />
            <nav className={styles.nav}>
              <a href="#">Cursos</a>
              <a href="#">Formações</a>
              <a href="#">DevOps</a>
            </nav>
          </div>
        </div>

        <div className={styles.useCaseSection}>
          <h3>Footer Escuro</h3>
          <div className={styles.footerExample}>
            <Brand product="alura" variant="negative" width={120} height={56} />
            <div className={styles.footerLinks}>
              <div>
                <h4>Sobre</h4>
                <ul>
                  <li>Quem somos</li>
                  <li>Trabalhe conosco</li>
                </ul>
              </div>
              <div>
                <h4>Suporte</h4>
                <ul>
                  <li>Central de ajuda</li>
                  <li>Contato</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.useCaseSection}>
          <h3>Login Screen</h3>
          <div className={styles.loginExample}>
            <Brand product="alura" width={160} height={74} />
            <h2>Bem-vindo de volta!</h2>
            <p>Faça login para continuar aprendendo</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Especificações</h2>
        <div className={styles.specs}>
          <div className={styles.specItem}>
            <h3>Tamanhos Default</h3>
            <ul>
              <li><strong>Alura:</strong> 140 × 65px</li>
              <li><strong>FIAP:</strong> 140 × 55px</li>
              <li><strong>PM3:</strong> 152 × 72px</li>
              <li><strong>Empresas:</strong> 166 × 42px</li>
              <li><strong>Alun:</strong> 145 × 36px</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3>Variantes</h3>
            <ul>
              <li><strong>default:</strong> Versão escura (cinza/preto)</li>
              <li><strong>negative:</strong> Versão branca (fundos escuros)</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3>Props</h3>
            <ul>
              <li><strong>product:</strong> 'alura' | 'fiap' | 'pm3' | 'empresas' | 'alun'</li>
              <li><strong>variant:</strong> 'default' | 'negative'</li>
              <li><strong>width:</strong> number | string</li>
              <li><strong>height:</strong> number | string</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3>Boas Práticas</h3>
            <ul>
              <li>Use variant="negative" em fundos escuros</li>
              <li>Mantenha proporção ao redimensionar</li>
              <li>Respeite área de respiro (padding)</li>
              <li>Não distorça as proporções</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Exemplo de Código</h2>
        <div className={styles.codeExample}>
          <pre>{`import { Brand } from '@/components/Brand';

// Marca padrão (escuro)
<Brand product="alura" />

// Marca branca para fundos escuros
<Brand product="alura" variant="negative" />

// Tamanho customizado
<Brand product="pm3" width={200} height={95} />

// Em um header
<header>
  <Brand product="empresas" width={150} height={38} />
  <nav>...</nav>
</header>`}</pre>
        </div>
      </section>
    </div>
  );
}
