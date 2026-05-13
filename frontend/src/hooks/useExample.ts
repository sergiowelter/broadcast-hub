import { useState } from 'react';

export const useExample = () => {
  const [value, setValue] = useState('');

  return { value, setValue };
};
