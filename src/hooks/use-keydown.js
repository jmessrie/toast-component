import React from 'react';

function useKeydown(key, callback) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === key) {
        callback(event);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [key, callback]);
}

export default useKeydown;
