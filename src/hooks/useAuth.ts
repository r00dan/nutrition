import { useState } from 'react';

export function useAuth() {
  const [isLoggedIn, setAuth] = useState<boolean>(false);

  return {
    isLoggedIn,
  };
}
