'use client';

import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { SocialButton } from '@/components/SocialButton';
import { PlayButton } from '@/components/PlayButton';
import { PencilIcon, DownloadIcon, GoogleIcon, MicrosoftIcon, FacebookIcon, AppleIcon } from '@/components/Icons';
import styles from './page.module.css';

export default function ButtonPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Button</h1>
        <p className={styles.description}>
          Componente de botão com múltiplas variantes, tamanhos e estados para diferentes contextos de uso.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Variantes</h2>
        <p className={styles.hint}>
          Botões possuem quatro variantes: <code>primary</code> para ações principais, <code>secondary</code> para ações secundárias, <code>ghost</code> para ações terciárias e <code>link</code> para navegação.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="primary">Primary Button</Button>
              <span className={styles.label}>Primary</span>
            </div>
            <div className={styles.item}>
              <Button variant="secondary">Secondary Button</Button>
              <span className={styles.label}>Secondary</span>
            </div>
            <div className={styles.item}>
              <Button variant="ghost">Ghost Button</Button>
              <span className={styles.label}>Ghost</span>
            </div>
            <div className={styles.item}>
              <Button variant="link">Link Button</Button>
              <span className={styles.label}>Link</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Tamanhos</h2>
        <p className={styles.hint}>
          Três tamanhos disponíveis: <code>small</code>, <code>medium</code> (padrão) e <code>large</code>.
        </p>
        <div className={styles.componentGroup}>
          <h3>Primary</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="primary" size="small">Small</Button>
              <span className={styles.label}>Small</span>
            </div>
            <div className={styles.item}>
              <Button variant="primary" size="medium">Medium</Button>
              <span className={styles.label}>Medium</span>
            </div>
            <div className={styles.item}>
              <Button variant="primary" size="large">Large</Button>
              <span className={styles.label}>Large</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Secondary</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="secondary" size="small">Small</Button>
              <span className={styles.label}>Small</span>
            </div>
            <div className={styles.item}>
              <Button variant="secondary" size="medium">Medium</Button>
              <span className={styles.label}>Medium</span>
            </div>
            <div className={styles.item}>
              <Button variant="secondary" size="large">Large</Button>
              <span className={styles.label}>Large</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Ghost</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="ghost" size="small">Small</Button>
              <span className={styles.label}>Small</span>
            </div>
            <div className={styles.item}>
              <Button variant="ghost" size="medium">Medium</Button>
              <span className={styles.label}>Medium</span>
            </div>
            <div className={styles.item}>
              <Button variant="ghost" size="large">Large</Button>
              <span className={styles.label}>Large</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Estados</h2>
        <p className={styles.hint}>
          Botões possuem estados visuais para hover, active, focus e disabled.
        </p>
        <div className={styles.componentGroup}>
          <h3>Primary</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="primary">Default</Button>
              <span className={styles.label}>Default</span>
            </div>
            <div className={styles.item}>
              <Button variant="primary" disabled>Disabled</Button>
              <span className={styles.label}>Disabled</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Secondary</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="secondary">Default</Button>
              <span className={styles.label}>Default</span>
            </div>
            <div className={styles.item}>
              <Button variant="secondary" disabled>Disabled</Button>
              <span className={styles.label}>Disabled</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Ghost</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button variant="ghost">Default</Button>
              <span className={styles.label}>Default</span>
            </div>
            <div className={styles.item}>
              <Button variant="ghost" disabled>Disabled</Button>
              <span className={styles.label}>Disabled</span>
            </div>
          </div>
        </div>
      </section>



      <section className={styles.section}>
        <h2>Botões Apenas Ícone</h2>
        <p className={styles.hint}>
          Botões circulares que contêm apenas um ícone, ideais para toolbars e ações compactas.
        </p>

        <div className={styles.componentGroup}>
          <h3>Variantes</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <IconButton variant="primary" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Primary</span>
            </div>
            <div className={styles.item}>
              <IconButton variant="secondary" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Secondary</span>
            </div>
            <div className={styles.item}>
              <IconButton variant="ghost" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Ghost</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Tamanhos</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <IconButton size="xsmall" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>X-Small (16px)</span>
            </div>
            <div className={styles.item}>
              <IconButton size="small" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Small (24px)</span>
            </div>
            <div className={styles.item}>
              <IconButton size="medium" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Medium (32px)</span>
            </div>
            <div className={styles.item}>
              <IconButton size="large" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Large (42px)</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Estados</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <IconButton variant="primary" icon={<PencilIcon />} label="Editar" />
              <span className={styles.label}>Default</span>
            </div>
            <div className={styles.item}>
              <IconButton variant="primary" icon={<PencilIcon />} label="Editar" disabled />
              <span className={styles.label}>Disabled</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Botões de Redes Sociais</h2>
        <p className={styles.hint}>
          Botões especiais para login/compartilhamento em redes sociais.
        </p>

        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <div className={styles.item}>
              <SocialButton icon={<GoogleIcon />} label="Login com Google" />
              <span className={styles.label}>Google</span>
            </div>
            <div className={styles.item}>
              <SocialButton icon={<MicrosoftIcon />} label="Login com Microsoft" />
              <span className={styles.label}>Microsoft</span>
            </div>
            <div className={styles.item}>
              <SocialButton icon={<FacebookIcon />} label="Login com Facebook" />
              <span className={styles.label}>Facebook</span>
            </div>
            <div className={styles.item}>
              <SocialButton icon={<AppleIcon />} label="Login com Apple" />
              <span className={styles.label}>Apple</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Estados</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <SocialButton icon={<GoogleIcon />} label="Login com Google" />
              <span className={styles.label}>Default</span>
            </div>
            <div className={styles.item}>
              <SocialButton icon={<GoogleIcon />} label="Login com Google" disabled />
              <span className={styles.label}>Disabled</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Botões de Play</h2>
        <p className={styles.hint}>
          Botões especiais com ícone de play, ideais para conteúdo de vídeo.
        </p>

        <div className={styles.componentGroup}>
          <h3>Tamanhos e Devices</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <PlayButton size="small" device="desktop">Ver primeiro vídeo</PlayButton>
              <span className={styles.label}>Small Desktop</span>
            </div>
            <div className={styles.item}>
              <PlayButton size="large" device="desktop">Continuar de onde parou</PlayButton>
              <span className={styles.label}>Large Desktop</span>
            </div>
          </div>
        </div>

        <div className={styles.componentGroup}>
          <h3>Mobile</h3>
          <div className={styles.row}>
            <div className={styles.item}>
              <PlayButton size="large" device="mobile">Continuar de onde parou</PlayButton>
              <span className={styles.label}>Large Mobile</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
