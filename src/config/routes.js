import { get } from 'svelte/store';
import { wrap as routeWrap } from 'svelte-spa-router/wrap';

import route__admin from '/src/routes/admin.svelte';
import route__guest from '/src/routes/guest.svelte';
import route__login from '/src/routes/login.svelte';
import route__not_found from '/src/routes/not-found.svelte';

import { loggedIn } from '/src/services/firebase';

const routes = {
  '/admin': routeWrap({
    component: route__admin,
    conditions: () => true
  }),

  '/guest': routeWrap({
    component: route__guest,
    conditions: () => true
  }),

  '/login': route__login,

  '/': routeWrap({
    component: route__admin,
    conditions: () => true
  }),

  '*': route__not_found
};

export default routes;
