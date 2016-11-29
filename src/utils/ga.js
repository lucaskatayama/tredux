import ReactGA from 'react-ga';
import { ga } from 'config';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(ga);
}

export default () => {
  if (process.env.NODE_ENV === 'production') {
    const page = window.location.hash;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
};
