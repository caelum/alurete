'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs';
import { HomeIcon, UserIcon, SettingsIcon, BellIcon, MailIcon, StarIcon } from '@/components/Icons';
import styles from '../button/page.module.css';

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Tabs</h1>
        <p className={styles.description}>
          Componente de navegação em abas para organizar conteúdo em diferentes seções.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Básico</h2>
        <p className={styles.hint}>
          Tabs simples com texto apenas.
        </p>
        <div className={styles.componentGroup}>
          <Tabs defaultValue="home">
            <TabsList>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <p>Conteúdo da aba Home</p>
            </TabsContent>
            <TabsContent value="profile">
              <p>Conteúdo da aba Profile</p>
            </TabsContent>
            <TabsContent value="settings">
              <p>Conteúdo da aba Settings</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Ícones</h2>
        <p className={styles.hint}>
          Tabs podem ter ícones à esquerda ou à direita do texto.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ marginBottom: 'var(--spacing-8)' }}>
            <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-base)' }}>
              Ícone à esquerda
            </h3>
            <Tabs defaultValue="home">
              <TabsList>
                <TabsTrigger value="home" leftIcon={<HomeIcon size={16} />}>
                  Home
                </TabsTrigger>
                <TabsTrigger value="user" leftIcon={<UserIcon size={16} />}>
                  Usuário
                </TabsTrigger>
                <TabsTrigger value="settings" leftIcon={<SettingsIcon size={16} />}>
                  Configurações
                </TabsTrigger>
              </TabsList>
              <TabsContent value="home">
                <p>Dashboard principal com resumo de atividades</p>
              </TabsContent>
              <TabsContent value="user">
                <p>Informações do perfil do usuário</p>
              </TabsContent>
              <TabsContent value="settings">
                <p>Preferências e configurações da conta</p>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--font-size-base)' }}>
              Ícone à direita
            </h3>
            <Tabs defaultValue="inbox">
              <TabsList>
                <TabsTrigger value="inbox" rightIcon={<MailIcon size={16} />}>
                  Inbox
                </TabsTrigger>
                <TabsTrigger value="notifications" rightIcon={<BellIcon size={16} />}>
                  Notificações
                </TabsTrigger>
                <TabsTrigger value="favorites" rightIcon={<StarIcon size={16} />}>
                  Favoritos
                </TabsTrigger>
              </TabsList>
              <TabsContent value="inbox">
                <p>Suas mensagens recebidas</p>
              </TabsContent>
              <TabsContent value="notifications">
                <p>Suas notificações recentes</p>
              </TabsContent>
              <TabsContent value="favorites">
                <p>Itens marcados como favoritos</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Ícones em Ambos os Lados</h2>
        <p className={styles.hint}>
          Tabs podem ter ícones tanto à esquerda quanto à direita.
        </p>
        <div className={styles.componentGroup}>
          <Tabs defaultValue="home">
            <TabsList>
              <TabsTrigger 
                value="home" 
                leftIcon={<HomeIcon size={16} />}
                rightIcon={<StarIcon size={16} />}
              >
                Home
              </TabsTrigger>
              <TabsTrigger 
                value="profile" 
                leftIcon={<UserIcon size={16} />}
                rightIcon={<BellIcon size={16} />}
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                leftIcon={<SettingsIcon size={16} />}
                rightIcon={<MailIcon size={16} />}
              >
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <p>Conteúdo Home com ícones em ambos os lados</p>
            </TabsContent>
            <TabsContent value="profile">
              <p>Conteúdo Profile com ícones em ambos os lados</p>
            </TabsContent>
            <TabsContent value="settings">
              <p>Conteúdo Settings com ícones em ambos os lados</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tab Desabilitada</h2>
        <p className={styles.hint}>
          Tabs podem ser desabilitadas usando a prop <code>disabled</code>.
        </p>
        <div className={styles.componentGroup}>
          <Tabs defaultValue="available">
            <TabsList>
              <TabsTrigger value="available">Disponível</TabsTrigger>
              <TabsTrigger value="coming" disabled>Em breve</TabsTrigger>
              <TabsTrigger value="locked" disabled leftIcon={<SettingsIcon size={16} />}>
                Bloqueado
              </TabsTrigger>
            </TabsList>
            <TabsContent value="available">
              <p>Esta aba está disponível para acesso</p>
            </TabsContent>
            <TabsContent value="coming">
              <p>Conteúdo em breve</p>
            </TabsContent>
            <TabsContent value="locked">
              <p>Conteúdo bloqueado</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Controlado</h2>
        <p className={styles.hint}>
          Tabs podem ser controladas externamente usando as props <code>value</code> e <code>onValueChange</code>.
        </p>
        <div className={styles.componentGroup}>
          <div style={{ marginBottom: 'var(--spacing-4)' }}>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-body)' }}>
              Aba ativa: <strong>{activeTab}</strong>
            </p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p>Conteúdo da Tab 1 - Controlada externamente</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p>Conteúdo da Tab 2 - Controlada externamente</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p>Conteúdo da Tab 3 - Controlada externamente</p>
            </TabsContent>
          </Tabs>
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
{`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/Tabs';
import { HomeIcon, UserIcon } from '@/components/Icons';

// Básico
<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="home">Conteúdo Home</TabsContent>
  <TabsContent value="profile">Conteúdo Profile</TabsContent>
</Tabs>

// Com ícones
<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home" leftIcon={<HomeIcon size={16} />}>
      Home
    </TabsTrigger>
    <TabsTrigger value="user" leftIcon={<UserIcon size={16} />}>
      Usuário
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">...</TabsContent>
  <TabsContent value="user">...</TabsContent>
</Tabs>

// Controlado
const [activeTab, setActiveTab] = useState('home');
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="home">Home</TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="home">...</TabsContent>
  <TabsContent value="profile">...</TabsContent>
</Tabs>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
