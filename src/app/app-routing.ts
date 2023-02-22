import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './master-view/master-view';

export const routes: Route[] = [
  { path: '', component: 'app-master-view', name: 'Master View' },
  { path: 'master-view', component: 'app-master-view', name: 'Master View' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
