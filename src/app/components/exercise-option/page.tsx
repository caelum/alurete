'use client';

import { useState } from 'react';
import { ExerciseOption } from '@/features/lesson';
import styles from './page.module.css';

export default function ExerciseOptionPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const correctAnswer = 'B';

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const getOptionState = (letter: string) => {
    if (!isSubmitted) {
      return selectedOption === letter ? 'hover' : 'default';
    }
    if (letter === correctAnswer) {
      return 'success';
    }
    if (letter === selectedOption && letter !== correctAnswer) {
      return 'error';
    }
    return 'default';
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>ExerciseOption (Feature-Specific)</h1>
        <p className={styles.headerText}>Componente de opção de exercício para tela de aula, localizado em <code className={styles.headerCode}>/features/lesson</code></p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Estados do Componente</h2>

        <div className={styles.stateDemo}>
          <h3 className={styles.stateDemoTitle}>Default</h3>
          <ExerciseOption
            letter="A"
            text="Um SITEMAP mostra a estrutura de navegação do seu site, uma lista que esclarece aos buscadores como google a estrutura do site permitindo ele indexar páginas principais e um WIREFRAME é a representação visual geralmente em escala de cinza da estrutura das páginas do site."
            state="default"
          />
        </div>

        <div className={styles.stateDemo}>
          <h3 className={styles.stateDemoTitle}>Hover</h3>
          <ExerciseOption
            letter="A"
            text="Um SITEMAP mostra a estrutura de navegação do seu site, uma lista que esclarece aos buscadores como google a estrutura do site permitindo ele indexar páginas principais e um WIREFRAME é a representação visual geralmente em escala de cinza da estrutura das páginas do site."
            state="hover"
          />
        </div>

        <div className={styles.stateDemo}>
          <h3 className={styles.stateDemoTitle}>Success (Resposta Correta)</h3>
          <ExerciseOption
            letter="A"
            text="Um SITEMAP mostra a estrutura de navegação do seu site, uma lista que esclarece aos buscadores como google a estrutura do site permitindo ele indexar páginas principais e um WIREFRAME é a representação visual geralmente em escala de cinza da estrutura das páginas do site."
            state="success"
          />
        </div>

        <div className={styles.stateDemo}>
          <h3 className={styles.stateDemoTitle}>Error (Resposta Errada com Explicação)</h3>
          <ExerciseOption
            letter="A"
            text="Um SITEMAP mostra a estrutura de navegação do seu site, uma lista que esclarece aos buscadores como google a estrutura do site permitindo ele indexar páginas principais e um WIREFRAME é a representação visual geralmente em escala de cinza da estrutura das páginas do site."
            state="error"
            explanationText="O WIREFRAME não tem interferência nos sistemas de buscas tem maior interferência na parte visual do site, no que o wireframe auxilia?"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Exercício Interativo</h2>
        <p className={styles.description}>Selecione uma opção e clique em "Verificar" para ver o feedback.</p>

        <div className={styles.exerciseContainer}>
          <div className={styles.question}>
            <h3 className={styles.questionTitle}>Qual é a diferença entre SITEMAP e WIREFRAME?</h3>
          </div>

          <div className={styles.options}>
            <ExerciseOption
              letter="A"
              text="SITEMAP e WIREFRAME são a mesma coisa, apenas nomes diferentes para o mesmo conceito."
              state={getOptionState('A')}
              onClick={() => !isSubmitted && setSelectedOption('A')}
              disabled={isSubmitted}
            />

            <ExerciseOption
              letter="B"
              text="Um SITEMAP mostra a estrutura de navegação do seu site, uma lista que esclarece aos buscadores como google a estrutura do site permitindo ele indexar páginas principais e um WIREFRAME é a representação visual geralmente em escala de cinza da estrutura das páginas do site."
              state={getOptionState('B')}
              onClick={() => !isSubmitted && setSelectedOption('B')}
              disabled={isSubmitted}
            />

            <ExerciseOption
              letter="C"
              text="SITEMAP é apenas para designers e WIREFRAME é apenas para desenvolvedores."
              state={getOptionState('C')}
              onClick={() => !isSubmitted && setSelectedOption('C')}
              disabled={isSubmitted}
              explanationText="Na verdade, ambos podem ser úteis para designers e desenvolvedores. O SITEMAP ajuda a entender a estrutura de navegação, enquanto o WIREFRAME auxilia na visualização do layout."
            />

            <ExerciseOption
              letter="D"
              text="WIREFRAME é um documento escrito e SITEMAP é uma representação visual."
              state={getOptionState('D')}
              onClick={() => !isSubmitted && setSelectedOption('D')}
              disabled={isSubmitted}
              explanationText="É o contrário! O WIREFRAME é a representação visual (geralmente em escala de cinza) da estrutura das páginas, enquanto o SITEMAP é uma lista/estrutura de navegação."
            />
          </div>

          <div className={styles.actions}>
            {!isSubmitted ? (
              <button
                className={styles.submitButton}
                onClick={handleSubmit}
                disabled={!selectedOption}
              >
                Verificar Resposta
              </button>
            ) : (
              <button
                className={styles.resetButton}
                onClick={handleReset}
              >
                Tentar Novamente
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Especificações Técnicas</h2>
        <div className={styles.specs}>
          <div className={styles.specItem}>
            <h3 className={styles.specItemTitle}>Estrutura</h3>
            <ul className={styles.specItemList}>
              <li>Width: 100% (responsivo)</li>
              <li>Border-radius: 12px (card)</li>
              <li>Seção esquerda: 40px (letra/ícone)</li>
              <li>Padding texto: 16px</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3 className={styles.specItemTitle}>Estados Visuais</h3>
            <ul className={styles.specItemList}>
              <li><strong>Default:</strong> Blue-200 bg, border padrão</li>
              <li><strong>Hover:</strong> Blue-200 bg, border azul</li>
              <li><strong>Success:</strong> Green-600 icon, Green-100 bg</li>
              <li><strong>Error:</strong> Red-600 icon, Red-100 bg + explicação</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3 className={styles.specItemTitle}>Tipografia</h3>
            <ul className={styles.specItemList}>
              <li>Letra: 30px, semibold, brand color</li>
              <li>Texto opção: 18px, regular, line-height 28px</li>
              <li>Texto explicação: 18px, regular</li>
            </ul>
          </div>

          <div className={styles.specItem}>
            <h3 className={styles.specItemTitle}>Ícones</h3>
            <ul className={styles.specItemList}>
              <li>Check (sucesso): 18px, stroke-width 3</li>
              <li>X (erro): 20px, stroke-width 2.5</li>
              <li>Info (explicação): 20px, stroke-width 2</li>
              <li>Cor: branca nos ícones de feedback</li>
            </ul>
          </div>
        </div>
      </section>


    </div>
  );
}
