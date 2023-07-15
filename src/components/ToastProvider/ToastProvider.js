import React from 'react';
import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const createToast = ({ variant, message }) =>
    setToasts([...toasts, { variant, message, id: crypto.randomUUID() }]);
  const dismissToast = (id) =>
    setToasts(toasts.filter((toast) => toast.id !== id));
  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);
  useKeydown('Escape', handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
