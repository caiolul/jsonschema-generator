'use client'; // Define o arquivo como sendo executado no lado do cliente

import React, { useState, ChangeEvent, useEffect } from 'react';
import TextInput from './components/TextInput';

const HomePage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Next.js TypeScript Textarea Example</h1>
      {/* <h1>Seu fundo....</h1> */}
      <TextInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={25} // Ajuste conforme necessário
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default HomePage;