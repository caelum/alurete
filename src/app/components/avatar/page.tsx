'use client';

import { Avatar } from '@/components/Avatar';
import styles from './page.module.css';

export default function AvatarPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Avatar</h1>
        <p className={styles.description}>
          Componente de avatar para representar usuários com imagem ou iniciais do nome.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Com Foto</h2>
        <p className={styles.hint}>
          Avatares podem exibir uma imagem do usuário.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <div className={styles.item}>
              <Avatar
                size="24"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                name="Sarah Anderson"
              />
              <span className={styles.label}>24px</span>
            </div>
            <div className={styles.item}>
              <Avatar
                size="32"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                name="Sarah Anderson"
              />
              <span className={styles.label}>32px</span>
            </div>
            <div className={styles.item}>
              <Avatar
                size="40"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                name="Sarah Anderson"
              />
              <span className={styles.label}>40px</span>
            </div>
            <div className={styles.item}>
              <Avatar
                size="110"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                name="Sarah Anderson"
              />
              <span className={styles.label}>110px (com sombra)</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Com Iniciais</h2>
        <p className={styles.hint}>
          Quando não há imagem, o avatar exibe as iniciais do nome do usuário.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <div className={styles.item}>
              <Avatar size="24" name="Sarah Anderson" />
              <span className={styles.label}>24px</span>
            </div>
            <div className={styles.item}>
              <Avatar size="32" name="Sarah Anderson" />
              <span className={styles.label}>32px</span>
            </div>
            <div className={styles.item}>
              <Avatar size="40" name="Sarah Anderson" />
              <span className={styles.label}>40px</span>
            </div>
            <div className={styles.item}>
              <Avatar size="110" name="Sarah Anderson" />
              <span className={styles.label}>110px</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tamanhos</h2>
        <p className={styles.hint}>
          Quatro tamanhos disponíveis: <code>24</code>, <code>32</code>, <code>40</code> e <code>110</code> pixels.
        </p>
        <div className={styles.componentGroup}>
          <h3>Comparação de Tamanhos</h3>
          <div className={styles.row} style={{ alignItems: 'center' }}>
            <Avatar size="24" name="John Doe" />
            <Avatar size="32" name="John Doe" />
            <Avatar size="40" name="John Doe" />
            <Avatar size="110" name="John Doe" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Exemplos de Uso</h2>
        
        <div className={styles.componentGroup}>
          <h3>Lista de Usuários</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar
                size="40"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                name="Sarah Anderson"
              />
              <div>
                <div style={{ fontWeight: 600 }}>Sarah Anderson</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  sarah.anderson@example.com
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar size="40" name="John Smith" />
              <div>
                <div style={{ fontWeight: 600 }}>John Smith</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  john.smith@example.com
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar
                size="40"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                name="Michael Brown"
              />
              <div>
                <div style={{ fontWeight: 600 }}>Michael Brown</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  michael.brown@example.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Grupo de Avatares</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar
              size="32"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              name="Sarah Anderson"
            />
            <Avatar size="32" name="John Smith" />
            <Avatar
              size="32"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              name="Michael Brown"
            />
            <Avatar size="32" name="Emma Wilson" />
            <Avatar
              size="32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              name="Olivia Davis"
            />
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Perfil de Usuário</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Avatar
              size="110"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              name="Sarah Anderson"
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>
                Sarah Anderson
              </div>
              <div style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}>
                Product Designer
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
