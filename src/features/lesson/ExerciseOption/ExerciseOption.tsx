import React from 'react';
import { Check, X, Info } from 'lucide-react';
import styles from './ExerciseOption.module.css';

export type ExerciseOptionState = 'default' | 'hover' | 'success' | 'error';

export interface ExerciseOptionProps {
  /** Letra da opção (A, B, C, D, etc.) */
  letter: string;
  /** Texto da opção */
  text: string;
  /** Estado da opção */
  state?: ExerciseOptionState;
  /** Texto explicativo (aparece quando state="error") */
  explanationText?: string;
  /** Callback quando a opção é clicada */
  onClick?: () => void;
  /** Se a opção está desabilitada */
  disabled?: boolean;
}

export const ExerciseOption: React.FC<ExerciseOptionProps> = ({
  letter,
  text,
  state = 'default',
  explanationText,
  onClick,
  disabled = false,
}) => {
  const getIcon = () => {
    if (state === 'success') {
      return (
        <div className={styles.iconCircle}>
          <Check size={12} strokeWidth={3} />
        </div>
      );
    }
    if (state === 'error') {
      return (
        <div className={styles.iconCircle}>
          <X size={14} strokeWidth={3} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.optionContainer}>
      <button
        className={`${styles.option} ${styles[state]}`}
        onClick={onClick}
        disabled={disabled || state === 'success' || state === 'error'}
        aria-label={`Opção ${letter}`}
      >
        {/* Left Section: Letter/Icon */}
        <div className={styles.letterSection}>
          <div className={styles.iconContainer}>
            {getIcon() || <span className={styles.letter}>{letter}</span>}
          </div>
        </div>

        {/* Right Section: Text */}
        <div className={styles.textSection}>
          <p className={styles.text}>{text}</p>
        </div>
      </button>

      {/* Explanation (only shown on error state) */}
      {state === 'error' && explanationText && (
        <div className={styles.explanation}>
          <div className={styles.explanationIcon}>
            <Info size={20} strokeWidth={2} />
          </div>
          <div className={styles.explanationText}>
            <p>{explanationText}</p>
          </div>
        </div>
      )}
    </div>
  );
};
