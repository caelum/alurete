'use client';

import { Badge } from '@/components/Badge';
import styles from '../button/page.module.css';

export default function BadgePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Badge</h1>
        <p className={styles.description}>
          Marcadores para status, categorias e outras informações destacadas com múltiplas variantes e aparências.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Variantes - Solid</h2>
        <p className={styles.hint}>
          Badges sólidos com fundo preenchido para destaque máximo.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Variantes - Outline</h2>
        <p className={styles.hint}>
          Badges com borda e fundo transparente para um visual mais sutil.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <Badge variant="success" appearance="outline">Success</Badge>
            <Badge variant="error" appearance="outline">Error</Badge>
            <Badge variant="warning" appearance="outline">Warning</Badge>
            <Badge variant="info" appearance="outline">Info</Badge>
            <Badge variant="neutral" appearance="outline">Neutral</Badge>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Variantes - Subtle</h2>
        <p className={styles.hint}>
          Badges com fundo suave e sem borda para integração discreta.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <Badge variant="success" appearance="subtle">Success</Badge>
            <Badge variant="error" appearance="subtle">Error</Badge>
            <Badge variant="warning" appearance="subtle">Warning</Badge>
            <Badge variant="info" appearance="subtle">Info</Badge>
            <Badge variant="neutral" appearance="subtle">Neutral</Badge>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tamanhos</h2>
        <p className={styles.hint}>
          Três tamanhos disponíveis: <code>small</code>, <code>medium</code> (padrão) e <code>large</code>.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <Badge size="small" variant="info">Small</Badge>
            <Badge size="medium" variant="info">Medium</Badge>
            <Badge size="large" variant="info">Large</Badge>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Exemplos de Uso</h2>
        <div className={styles.componentGroup}>
          <h3>Status de Pedido</h3>
          <div className={styles.row}>
            <Badge variant="info">Pendente</Badge>
            <Badge variant="warning">Processando</Badge>
            <Badge variant="success">Entregue</Badge>
            <Badge variant="error">Cancelado</Badge>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Categorias</h3>
          <div className={styles.row}>
            <Badge variant="neutral" appearance="subtle">Tecnologia</Badge>
            <Badge variant="neutral" appearance="subtle">Design</Badge>
            <Badge variant="neutral" appearance="subtle">Marketing</Badge>
            <Badge variant="neutral" appearance="subtle">Vendas</Badge>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Níveis de Prioridade</h3>
          <div className={styles.row}>
            <Badge variant="error" size="small">Alta</Badge>
            <Badge variant="warning" size="small">Média</Badge>
            <Badge variant="success" size="small">Baixa</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
