import compose from './compose';
import { withRouter } from './withRouter';
import { withStore } from './with-store';
/** Используем функцию compose для создания HOC withProviders,
который последовательно оборачивает компонент в провайдеры маршрутизатора, хранилища и темы. */

export const withProviders = compose(withRouter, withStore);
