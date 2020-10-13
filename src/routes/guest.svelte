<script>
  import guestRoutes from '/src/config/guestRoutes';
  import {
    default as Router,
    replace as routeReplace,
    push as routePush
  } from 'svelte-spa-router';
</script>

<Router routes={guestRoutes} />
