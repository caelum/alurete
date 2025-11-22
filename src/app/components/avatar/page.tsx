'use client';

import React, { useState } from 'react';
import { Avatar } from '@/components/Avatar';
import styles from './page.module.css';

export default function AvatarPage() {
  const [size, setSize] = useState<'24' | '32' | '40' | '110'>('40');
  const [name, setName] = useState('Sarah Anderson');
  const [src, setSrc] = useState('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<Avatar
  size="${size}"
  name="${name}"${src ? `\n  src="${src}"` : ''}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Avatar</h1>
        <p className={styles.description}>
          Componente de avatar para representar usuários com imagem ou iniciais do nome.
          Use o playground abaixo para customizar.
        </p>
      </div>

      <div className={styles.playground}>
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <label htmlFor="size">Tamanho</label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value as any)}
              className={styles.select}
            >
              <option value="24">24px (Small)</option>
              <option value="32">32px (Medium)</option>
              <option value="40">40px (Large)</option>
              <option value="110">110px (XLarge)</option>
            </select>
          </div>

          <div className={styles.controlGroup}>
            <label htmlFor="name">Nome (para iniciais/alt)</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.controlGroup}>
            <label htmlFor="src">URL da Imagem (Opcional)</label>
            <input
              id="src"
              type="text"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
              placeholder="Deixe vazio para ver as iniciais"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.previewArea}>
          <div className={styles.previewHeader}>
            Preview
          </div>
          <div className={styles.preview}>
            <div className={styles.previewContent}>
              <Avatar
                size={size}
                name={name}
                src={src}
              />
            </div>
          </div>

          <div className={styles.codeSection}>
            <div className={styles.codeHeader}>
              <div className={styles.windowControls}>
                <div className={`${styles.dot} ${styles.dotRed}`} />
                <div className={`${styles.dot} ${styles.dotYellow}`} />
                <div className={`${styles.dot} ${styles.dotGreen}`} />
              </div>
              <button onClick={handleCopy} className={styles.copyButton}>
                {copied ? 'Copiado!' : 'Copiar Código'}
              </button>
            </div>
            <pre className={styles.codeBlock}>
              {codeSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
