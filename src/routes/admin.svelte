<script>
  import adminRoutes from '/src/config/adminRoutes';
  import {
    default as Router,
    replace as routeReplace,
    push as routePush
  } from 'svelte-spa-router';
</script>

<h1>Administrator</h1>
<Router routes={adminRoutes} />
