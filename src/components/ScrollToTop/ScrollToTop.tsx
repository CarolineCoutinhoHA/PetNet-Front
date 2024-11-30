import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const location = useLocation(); // O hook useLocation nos dá acesso à localização da URL.

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página sempre que a rota mudar
  }, [location]); // O efeito é disparado sempre que a localização mudar.

  return null; // Não precisamos renderizar nada, apenas ativar o scroll
};

export default ScrollToTop;
