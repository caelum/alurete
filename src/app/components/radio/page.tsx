'use client';

import { Radio } from '@/components/Radio';
import styles from './page.module.css';
import { useState } from 'react';

export default function RadioPage() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedPayment, setSelectedPayment] = useState('credit-card');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Radio</h1>
        <p>Componente de seleção única que permite escolher uma opção entre várias.</p>
      </div>

      <section className={styles.section}>
        <h2>Radio Icon</h2>
        <div className={styles.examples}>
          <Radio />
          <Radio checked readOnly />
          <Radio disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Radio + Label</h2>
        <div className={styles.examples}>
          <Radio 
            label="Opção padrão"
            name="demo1"
          />
          <Radio 
            label="Opção desabilitada"
            disabled
            name="demo1"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Radio com Info</h2>
        <div className={styles.examples}>
          <Radio 
            label="Opção com informação"
            showInfo
            onInfoClick={() => alert('Mais informações sobre esta opção')}
            name="demo2"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Radio com Botão Auxiliar</h2>
        <div className={styles.examples}>
          <Radio 
            label="Opção com ação"
            auxiliaryButton={{
              text: 'Ver mais',
              onClick: () => alert('Botão auxiliar clicado!')
            }}
            name="demo3"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Radio Group - Opções Simples</h2>
        <div className={styles.radioGroup}>
          <Radio 
            label="Opção 1"
            name="options"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <Radio 
            label="Opção 2"
            name="options"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <Radio 
            label="Opção 3"
            name="options"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
        </div>
        <p className={styles.selectedValue}>Selecionado: {selectedOption}</p>
      </section>

      <section className={styles.section}>
        <h2>Radio Group - Tamanhos</h2>
        <div className={styles.radioGroup}>
          <Radio 
            label="Pequeno"
            name="sizes"
            value="small"
            checked={selectedSize === 'small'}
            onChange={(e) => setSelectedSize(e.target.value)}
          />
          <Radio 
            label="Médio"
            name="sizes"
            value="medium"
            checked={selectedSize === 'medium'}
            onChange={(e) => setSelectedSize(e.target.value)}
          />
          <Radio 
            label="Grande"
            name="sizes"
            value="large"
            checked={selectedSize === 'large'}
            onChange={(e) => setSelectedSize(e.target.value)}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Radio Group - Formulário de Pagamento</h2>
        <div className={styles.radioGroup}>
          <Radio 
            label="Cartão de Crédito"
            showInfo
            onInfoClick={() => alert('Aceitamos Visa, Mastercard, Amex')}
            name="payment"
            value="credit-card"
            checked={selectedPayment === 'credit-card'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <Radio 
            label="Débito"
            showInfo
            onInfoClick={() => alert('Débito em conta corrente')}
            name="payment"
            value="debit"
            checked={selectedPayment === 'debit'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <Radio 
            label="PIX"
            auxiliaryButton={{
              text: 'Gerar código',
              onClick: () => alert('Código PIX gerado!')
            }}
            name="payment"
            value="pix"
            checked={selectedPayment === 'pix'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <Radio 
            label="Boleto (indisponível)"
            disabled
            name="payment"
            value="boleto"
          />
        </div>
        <p className={styles.selectedValue}>Forma de pagamento: {selectedPayment}</p>
      </section>

      <section className={styles.section}>
        <h2>Estados</h2>
        <div className={styles.states}>
          <div className={styles.stateExample}>
            <span className={styles.stateLabel}>Default</span>
            <Radio label="Não selecionado" name="state1" />
          </div>
          <div className={styles.stateExample}>
            <span className={styles.stateLabel}>Checked</span>
            <Radio label="Selecionado" name="state2" checked readOnly />
          </div>
          <div className={styles.stateExample}>
            <span className={styles.stateLabel}>Disabled</span>
            <Radio label="Desabilitado" disabled name="state3" />
          </div>
          <div className={styles.stateExample}>
            <span className={styles.stateLabel}>Disabled + Checked</span>
            <Radio label="Desabilitado selecionado" disabled checked readOnly name="state4" />
          </div>
        </div>
      </section>
    </div>
  );
}
