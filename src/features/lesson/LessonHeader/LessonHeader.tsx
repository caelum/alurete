import React from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { Avatar } from '@/components/Avatar';
import styles from './LessonHeader.module.css';

export interface LessonHeaderProps {
  /** Título da aula */
  lessonTitle: string;
  /** URL da thumbnail da aula */
  lessonThumbnail?: string;
  /** Nome do usuário */
  userName: string;
  /** URL da foto do usuário */
  userPhoto?: string;
  /** Callback para o botão voltar */
  onBack?: () => void;
  /** Callback para o dropdown do usuário */
  onUserMenuClick?: () => void;
  /** Logo customizada (opcional) */
  logoSrc?: string;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  lessonTitle,
  lessonThumbnail = 'http://localhost:3845/assets/3f20c1dd3209f3ff7ee228e9ac8c655a90992e2a.svg',
  userName,
  userPhoto,
  onBack,
  onUserMenuClick,
  logoSrc = 'http://localhost:3845/assets/4e9b1e704064072df41333810bc47fc1e0819cee.svg',
}) => {
  return (
    <header className={styles.header}>
      {/* Left Section: Back Button + Logo */}
      <div className={styles.leftSection}>
        <button 
          className={styles.backButton}
          onClick={onBack}
          aria-label="Voltar"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <div className={styles.logo}>
          <img src={logoSrc} alt="Alura" />
        </div>
      </div>

      {/* Center Section: Lesson Info */}
      <div className={styles.centerSection}>
        {lessonThumbnail && (
          <div className={styles.thumbnail}>
            <img src={lessonThumbnail} alt="" />
          </div>
        )}
        <h1 className={styles.lessonTitle}>{lessonTitle}</h1>
      </div>

      {/* Right Section: User Info */}
      <div className={styles.rightSection}>
        <Avatar 
          size="40" 
          src={userPhoto}
          alt={userName}
        />
        <span className={styles.userName}>{userName}</span>
        <button 
          className={styles.dropdownButton}
          onClick={onUserMenuClick}
          aria-label="Menu do usuário"
        >
          <ChevronDown size={12} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};
