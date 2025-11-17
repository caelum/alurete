'use client';

import { Alert } from '@/components/Alert';
import styles from '../button/page.module.css';

export default function AlertPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Alert</h1>
        <p className={styles.description}>
          Mensagens de feedback para comunicar informações importantes ao usuário com diferentes níveis de severidade.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Variantes</h2>
        <p className={styles.hint}>
          Quatro variantes disponíveis: <code>success</code>, <code>error</code>, <code>warning</code> e <code>info</code>.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Alert variant="warning" showActions>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Alert>
            <Alert variant="info" showActions>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Alert>
            <Alert variant="error" showActions>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Alert>
            <Alert variant="success" showActions>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Alert>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Sem Botões de Ação</h2>
        <p className={styles.hint}>
          Alerts simples sem botões de ação.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Alert variant="success">
              Operação realizada com sucesso!
            </Alert>
            <Alert variant="error">
              Ocorreu um erro ao processar sua solicitação.
            </Alert>
            <Alert variant="warning">
              Atenção: Esta ação não pode ser desfeita.
            </Alert>
            <Alert variant="info">
              Você tem 3 notificações não lidas.
            </Alert>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Título Customizado</h2>
        <p className={styles.hint}>
          Substitua o título padrão usando a prop <code>title</code>.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Alert variant="success" title="Operação Concluída" showActions>
              Seu perfil foi atualizado com sucesso.
            </Alert>
            <Alert variant="error" title="Erro de Validação" showActions>
              Por favor, preencha todos os campos obrigatórios.
            </Alert>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Sem Botão de Fechar</h2>
        <p className={styles.hint}>
          Use <code>closable=false</code> para remover o botão de fechar.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Alert variant="info" closable={false} showActions>
              Este alerta não pode ser fechado pelo usuário.
            </Alert>
            <Alert variant="warning" closable={false}>
              Mensagem importante que não deve ser dispensada.
            </Alert>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ações Customizadas</h2>
        <p className={styles.hint}>
          Personalize os textos dos botões de ação.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Alert 
              variant="warning" 
              title="Confirmar Exclusão"
              showActions
              primaryAction="EXCLUIR"
              secondaryAction="CANCELAR"
            >
              Esta ação não pode ser desfeita. Deseja continuar?
            </Alert>
            <Alert 
              variant="info" 
              showActions
              primaryAction="VER DETALHES"
              secondaryAction="FECHAR"
            >
              Você tem 5 novas mensagens não lidas.
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
}
