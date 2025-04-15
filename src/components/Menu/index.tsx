import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'Usuários',
    to: '/'
  }, {
    label: 'Inclusão de Usuário',
    to: '/usuario'
  }, {
    label: 'Produtos',
    to: '/lista-produto'
  }, {
    label: 'Inclusão de Produto',
    to: '/produto'
  }];
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={index === 0 ? styles.menu__primeirolink : styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}