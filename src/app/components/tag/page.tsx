'use client';

import { Tag } from '@/components/Tag';
import { SparklesIcon, CheckIcon, AlertCircleIcon, XCircleIcon, InfoIcon } from '@/components/Icons';
import styles from './page.module.css';

export default function TagPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Tag</h1>
        <p>Componente de etiqueta para categorizar e destacar informações.</p>
      </div>

      <section className={styles.section}>
        <h2>Variantes</h2>
        <div className={styles.examples}>
          <Tag variant="primary">Tag</Tag>
          <Tag variant="secondary">Tag</Tag>
          <Tag variant="attention">Tag</Tag>
          <Tag variant="error">Tag</Tag>
          <Tag variant="success">Tag</Tag>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ícone à Esquerda</h2>
        <div className={styles.examples}>
          <Tag variant="primary" leftIcon={<SparklesIcon />}>
            Novidade
          </Tag>
          <Tag variant="secondary" leftIcon={<InfoIcon />}>
            Informação
          </Tag>
          <Tag variant="attention" leftIcon={<AlertCircleIcon />}>
            Atenção
          </Tag>
          <Tag variant="error" leftIcon={<XCircleIcon />}>
            Erro
          </Tag>
          <Tag variant="success" leftIcon={<CheckIcon />}>
            Sucesso
          </Tag>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ícone à Direita</h2>
        <div className={styles.examples}>
          <Tag variant="primary" rightIcon={<SparklesIcon />}>
            Novidade
          </Tag>
          <Tag variant="secondary" rightIcon={<InfoIcon />}>
            Informação
          </Tag>
          <Tag variant="attention" rightIcon={<AlertCircleIcon />}>
            Atenção
          </Tag>
          <Tag variant="error" rightIcon={<XCircleIcon />}>
            Erro
          </Tag>
          <Tag variant="success" rightIcon={<CheckIcon />}>
            Sucesso
          </Tag>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ícones dos Dois Lados</h2>
        <div className={styles.examples}>
          <Tag variant="primary" leftIcon={<SparklesIcon />} rightIcon={<SparklesIcon />}>
            Destacado
          </Tag>
          <Tag variant="secondary" leftIcon={<InfoIcon />} rightIcon={<InfoIcon />}>
            Info
          </Tag>
          <Tag variant="attention" leftIcon={<AlertCircleIcon />} rightIcon={<AlertCircleIcon />}>
            Alerta
          </Tag>
          <Tag variant="error" leftIcon={<XCircleIcon />} rightIcon={<XCircleIcon />}>
            Erro
          </Tag>
          <Tag variant="success" leftIcon={<CheckIcon />} rightIcon={<CheckIcon />}>
            OK
          </Tag>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Exemplos de Uso</h2>
        
        <div className={styles.useCase}>
          <h3>Categorias de Produto</h3>
          <div className={styles.tagGroup}>
            <Tag variant="primary">Eletrônicos</Tag>
            <Tag variant="primary">Casa</Tag>
            <Tag variant="primary">Livros</Tag>
            <Tag variant="primary">Esportes</Tag>
          </div>
        </div>

        <div className={styles.useCase}>
          <h3>Status de Pedido</h3>
          <div className={styles.tagGroup}>
            <Tag variant="secondary" leftIcon={<InfoIcon />}>
              Aguardando pagamento
            </Tag>
            <Tag variant="attention" leftIcon={<AlertCircleIcon />}>
              Processando
            </Tag>
            <Tag variant="primary" leftIcon={<SparklesIcon />}>
              Enviado
            </Tag>
            <Tag variant="success" leftIcon={<CheckIcon />}>
              Entregue
            </Tag>
            <Tag variant="error" leftIcon={<XCircleIcon />}>
              Cancelado
            </Tag>
          </div>
        </div>

        <div className={styles.useCase}>
          <h3>Tags de Artigos</h3>
          <div className={styles.tagGroup}>
            <Tag variant="secondary">JavaScript</Tag>
            <Tag variant="secondary">React</Tag>
            <Tag variant="secondary">TypeScript</Tag>
            <Tag variant="secondary">CSS</Tag>
            <Tag variant="secondary">Node.js</Tag>
            <Tag variant="secondary">Design System</Tag>
          </div>
        </div>

        <div className={styles.useCase}>
          <h3>Prioridades</h3>
          <div className={styles.tagGroup}>
            <Tag variant="error" leftIcon={<AlertCircleIcon />}>
              Urgente
            </Tag>
            <Tag variant="attention" leftIcon={<AlertCircleIcon />}>
              Alta
            </Tag>
            <Tag variant="primary" leftIcon={<InfoIcon />}>
              Média
            </Tag>
            <Tag variant="secondary" leftIcon={<InfoIcon />}>
              Baixa
            </Tag>
          </div>
        </div>

        <div className={styles.useCase}>
          <h3>Notificações</h3>
          <div className={styles.tagGroup}>
            <Tag variant="success" leftIcon={<CheckIcon />} rightIcon={<CheckIcon />}>
              Salvo com sucesso
            </Tag>
            <Tag variant="error" leftIcon={<XCircleIcon />}>
              Falha ao enviar
            </Tag>
            <Tag variant="attention" leftIcon={<AlertCircleIcon />}>
              Ação necessária
            </Tag>
            <Tag variant="primary" leftIcon={<SparklesIcon />}>
              Nova mensagem
            </Tag>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Todas as Combinações</h2>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.variantLabel}>Primary</span>
            <div className={styles.variations}>
              <Tag variant="primary">Tag</Tag>
              <Tag variant="primary" leftIcon={<SparklesIcon />}>Tag</Tag>
              <Tag variant="primary" rightIcon={<SparklesIcon />}>Tag</Tag>
              <Tag variant="primary" leftIcon={<SparklesIcon />} rightIcon={<SparklesIcon />}>Tag</Tag>
            </div>
          </div>

          <div className={styles.gridItem}>
            <span className={styles.variantLabel}>Secondary</span>
            <div className={styles.variations}>
              <Tag variant="secondary">Tag</Tag>
              <Tag variant="secondary" leftIcon={<InfoIcon />}>Tag</Tag>
              <Tag variant="secondary" rightIcon={<InfoIcon />}>Tag</Tag>
              <Tag variant="secondary" leftIcon={<InfoIcon />} rightIcon={<InfoIcon />}>Tag</Tag>
            </div>
          </div>

          <div className={styles.gridItem}>
            <span className={styles.variantLabel}>Attention</span>
            <div className={styles.variations}>
              <Tag variant="attention">Tag</Tag>
              <Tag variant="attention" leftIcon={<AlertCircleIcon />}>Tag</Tag>
              <Tag variant="attention" rightIcon={<AlertCircleIcon />}>Tag</Tag>
              <Tag variant="attention" leftIcon={<AlertCircleIcon />} rightIcon={<AlertCircleIcon />}>Tag</Tag>
            </div>
          </div>

          <div className={styles.gridItem}>
            <span className={styles.variantLabel}>Error</span>
            <div className={styles.variations}>
              <Tag variant="error">Tag</Tag>
              <Tag variant="error" leftIcon={<XCircleIcon />}>Tag</Tag>
              <Tag variant="error" rightIcon={<XCircleIcon />}>Tag</Tag>
              <Tag variant="error" leftIcon={<XCircleIcon />} rightIcon={<XCircleIcon />}>Tag</Tag>
            </div>
          </div>

          <div className={styles.gridItem}>
            <span className={styles.variantLabel}>Success</span>
            <div className={styles.variations}>
              <Tag variant="success">Tag</Tag>
              <Tag variant="success" leftIcon={<CheckIcon />}>Tag</Tag>
              <Tag variant="success" rightIcon={<CheckIcon />}>Tag</Tag>
              <Tag variant="success" leftIcon={<CheckIcon />} rightIcon={<CheckIcon />}>Tag</Tag>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
