"use client"
import { useState, ChangeEvent } from 'react';

const Home: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const checkPalindrome = (str: string): boolean => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === '') {
      setErrorMessage('Please input data first.');
      setResult(null);
    } else {
      setErrorMessage(null);
      setResult(checkPalindrome(value));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-10">Palindrome Checker</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a string"
          required
          className="p-2 border border-gray-300 rounded w-full mb-4"
        />
        {errorMessage && (
          <div className="text-red-500 mb-4 card-message">
            {errorMessage}
          </div>
        )}
        {result !== null && !errorMessage && (
          <div className="card-message">
            {result ? (
              <p className="text-green-500">"{input}" is a palindrome!</p>
            ) : (
              <p className="text-red-500">"{input}" is not a palindrome.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;