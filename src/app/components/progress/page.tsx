'use client';

import { Progress } from '@/components/Progress';
import styles from '../button/page.module.css';

export default function ProgressPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Progress</h1>
        <p className={styles.description}>
          Componente de barra de progresso para indicar o andamento de tarefas ou processos.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Tamanhos</h2>
        <p className={styles.hint}>
          Dois tamanhos disponíveis: <code>small</code> (com largura fixa) e <code>large</code> (largura total).
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <div>
              <h3 style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)' }}>Small</h3>
              <Progress value={2} max={4} size="small" labelFormat="fraction" />
            </div>
            <div>
              <h3 style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)' }}>Large</h3>
              <Progress value={60} size="large" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Valores de Progresso</h2>
        <p className={styles.hint}>
          Exemplos com diferentes valores de progresso.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Progress value={0} size="large" />
            <Progress value={25} size="large" />
            <Progress value={50} size="large" />
            <Progress value={75} size="large" />
            <Progress value={100} size="large" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Formatos de Label</h2>
        <p className={styles.hint}>
          O label pode mostrar porcentagem (<code>percentage</code>) ou fração (<code>fraction</code>).
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div>
              <p style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-body)' }}>
                Porcentagem (padrão)
              </p>
              <Progress value={45} size="large" labelFormat="percentage" />
            </div>
            <div>
              <p style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-body)' }}>
                Fração
              </p>
              <Progress value={3} max={5} size="large" labelFormat="fraction" />
            </div>
            <div>
              <p style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-body)' }}>
                Sem label
              </p>
              <Progress value={30} size="large" showLabel={false} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Casos de Uso</h2>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <div>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Upload de arquivo</h3>
              <Progress value={85} size="large" />
            </div>
            
            <div>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Progresso do curso</h3>
              <Progress value={12} max={24} size="small" labelFormat="fraction" />
            </div>
            
            <div>
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Onboarding</h3>
              <Progress value={2} max={4} size="large" labelFormat="fraction" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Como Usar</h2>
        <div className={styles.componentGroup}>
          <pre className={styles.codeBlock || ''} style={{ 
            backgroundColor: 'var(--color-surface-subtle)', 
            padding: 'var(--spacing-4)', 
            borderRadius: 'var(--border-radius)',
            overflow: 'auto'
          }}>
{`import { Progress } from '@/components/Progress';

// Básico com porcentagem
<Progress value={60} size="large" />

// Com fração
<Progress value={2} max={4} size="small" labelFormat="fraction" />

// Sem label
<Progress value={75} showLabel={false} />

// Upload progress
const [uploadProgress, setUploadProgress] = useState(0);
<Progress value={uploadProgress} size="large" />`}
          </pre>
        </div>
      </section>
    </div>
  );
}
