'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/Checkbox';
import { Button } from '@/components/Button';
import { ChevronDownIcon } from '@/components/Icons';
import styles from '../button/page.module.css';

export default function CheckboxPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Checkbox</h1>
        <p className={styles.description}>
          Componente de checkbox para seleção de opções individuais ou múltiplas.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Icon Checkbox</h2>
        <p className={styles.hint}>
          Checkbox sem label, apenas o ícone.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
              <span style={{ fontSize: 'var(--font-size-sm)', width: '80px' }}>Default:</span>
              <Checkbox />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
              <span style={{ fontSize: 'var(--font-size-sm)', width: '80px' }}>Hover:</span>
              <Checkbox />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
              <span style={{ fontSize: 'var(--font-size-sm)', width: '80px' }}>Checked:</span>
              <Checkbox checked readOnly />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Checkbox + Label</h2>
        <p className={styles.hint}>
          Checkbox com label ao lado.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Checkbox label="Label" />
            <Checkbox label="Label" disabled />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ícone de Informação</h2>
        <p className={styles.hint}>
          Checkbox com label e ícone de informação.
        </p>
        <div className={styles.componentGroup}>
          <Checkbox
            label="Label"
            showInfoIcon
            onInfoClick={() => alert('Informação adicional sobre esta opção')}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Botão Auxiliar</h2>
        <p className={styles.hint}>
          Checkbox com label e botão auxiliar conforme o design do Figma.
        </p>
        <div className={styles.componentGroup}>
          <Checkbox
            label="Label"
            showInfoIcon
            onInfoClick={() => alert('Info')}
            auxiliaryButton={
              <Button
                variant="secondary"
                size="small"
                endIcon={<ChevronDownIcon size={12} />}
                style={{
                  height: '16px',
                  padding: '6px 16px',
                  fontSize: '12px',
                  minHeight: 'auto',
                }}
              />
            }
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Estados Interativos</h2>
        <p className={styles.hint}>
          Checkboxes com estado controlado.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Checkbox
              label="Checkbox não marcado"
              checked={checked1}
              onChange={(e) => setChecked1(e.target.checked)}
            />
            <Checkbox
              label="Checkbox marcado"
              checked={checked2}
              onChange={(e) => setChecked2(e.target.checked)}
            />
            <Checkbox label="Checkbox desabilitado" disabled />
            <Checkbox label="Checkbox desabilitado e marcado" disabled checked readOnly />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Lista de Opções</h2>
        <p className={styles.hint}>
          Múltiplos checkboxes para seleção.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Checkbox label="JavaScript" defaultChecked />
            <Checkbox label="TypeScript" />
            <Checkbox label="Python" />
            <Checkbox label="Java" />
            <Checkbox label="C++" disabled />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Formulário de Exemplo</h2>
        <div className={styles.componentGroup}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-4)',
            padding: 'var(--spacing-6)',
            backgroundColor: 'var(--color-surface-subtle)',
            borderRadius: 'var(--border-radius-lg)',
          }}>
            <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Configurações de Notificação</h3>
            
            <Checkbox
              label="Receber notificações por email"
              showInfoIcon
              onInfoClick={() => alert('Você receberá atualizações importantes por email')}
            />
            <Checkbox
              label="Notificações push no navegador"
            />
            <Checkbox
              label="Newsletter semanal"
            />
            
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Checkbox
                label="Aceito os termos e condições"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
            </div>
            
            <Button
              style={{ marginTop: 'var(--spacing-2)', alignSelf: 'flex-start' }}
              disabled={!acceptTerms}
            >
              Salvar Preferências
            </Button>
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
{`import { Checkbox } from '@/components/Checkbox';
import { Button } from '@/components/Button';

// Básico
<Checkbox />

// Com label
<Checkbox label="Aceito os termos" />

// Controlado
const [checked, setChecked] = useState(false);
<Checkbox
  label="Opção"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// Com informação
<Checkbox
  label="Com info"
  showInfoIcon
  onInfoClick={() => alert('Informação')}
/>

// Com botão auxiliar
<Checkbox
  label="Label"
  showInfoIcon
  auxiliaryButton={<Button size="small">Botão</Button>}
/>

// Desabilitado
<Checkbox label="Desabilitado" disabled />
<Checkbox label="Desabilitado marcado" disabled checked />`}
          </pre>
        </div>
      </section>
    </div>
  );
}
