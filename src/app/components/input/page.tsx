'use client';

import { Input } from '@/components/Input';
import { 
  SearchIcon, MailIcon, LockIcon, UserIcon, 
  CheckIcon, EyeIcon, EyeOffIcon, AlertCircleIcon 
} from '@/components/Icons';
import styles from '../button/page.module.css';

export default function InputPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Input</h1>
        <p className={styles.description}>
          Componente de entrada de texto com suporte a ícones, estados de validação e helper text.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Tamanhos</h2>
        <p className={styles.hint}>
          Três tamanhos disponíveis: <code>small</code>, <code>medium</code> (padrão) e <code>large</code>.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Input placeholder="Small input" size="small" />
            <Input placeholder="Medium input (default)" size="medium" />
            <Input placeholder="Large input" size="large" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Label e Helper Text</h2>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <Input 
              label="Email" 
              placeholder="seu@email.com" 
              helperText="Digite um email válido"
              type="email"
              leftIcon={<MailIcon size={18} />}
            />
            <Input 
              label="Senha" 
              placeholder="••••••••" 
              type="password"
              helperText="Mínimo 8 caracteres"
              leftIcon={<LockIcon size={18} />}
            />
            <Input 
              label="Nome" 
              isOptional
              placeholder="Digite seu nome" 
              helperText="Este campo é opcional"
              leftIcon={<UserIcon size={18} />}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Estados</h2>
        <p className={styles.hint}>
          Inputs possuem três variantes: <code>default</code>, <code>success</code> e <code>error</code>.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <Input 
              label="Sucesso" 
              placeholder="input@example.com"
              variant="success"
              helperText="Email válido!"
              leftIcon={<MailIcon size={18} />}
              rightIcon={<CheckIcon size={18} />}
            />
            <Input 
              label="Erro" 
              placeholder="input@example.com"
              variant="error"
              helperText="Email inválido"
              leftIcon={<MailIcon size={18} />}
              rightIcon={<AlertCircleIcon size={18} />}
            />
            <Input 
              label="Desabilitado" 
              placeholder="Input desabilitado"
              disabled
              leftIcon={<UserIcon size={18} />}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ícones</h2>
        <p className={styles.hint}>
          Inputs podem ter ícones à esquerda e/ou à direita usando as props <code>leftIcon</code> e <code>rightIcon</code>.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Input 
              placeholder="Buscar..."
              leftIcon={<SearchIcon size={18} />}
            />
            <Input 
              placeholder="Email"
              leftIcon={<MailIcon size={18} />}
              rightIcon={<CheckIcon size={18} />}
              variant="success"
            />
            <Input 
              placeholder="Senha"
              leftIcon={<LockIcon size={18} />}
              rightIcon={<EyeIcon size={18} />}
              type="password"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Full Width</h2>
        <div className={styles.componentGroup}>
          <Input 
            label="Nome completo" 
            placeholder="Digite seu nome completo"
            fullWidth
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Exemplos de Uso</h2>
        <div className={styles.componentGroup}>
          <h3>Formulário de Login</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Input 
              label="Email" 
              placeholder="seu@email.com"
              type="email"
              leftIcon={<MailIcon size={18} />}
            />
            <Input 
              label="Senha" 
              placeholder="••••••••"
              type="password"
              leftIcon={<LockIcon size={18} />}
              rightIcon={<EyeOffIcon size={18} />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
