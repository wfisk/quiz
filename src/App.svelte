<script>
  import {
    default as Router,
    replace as routeReplace,
    push as routePush,
  } from "svelte-spa-router";
  import Headroom from "svelte-headroom";
  import Fa from "svelte-fa";
  import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
  import { faPowerOff } from "@fortawesome/free-solid-svg-icons/faPowerOff";

  import { loggedIn, signOut } from "src/services/firebase";

  import "src/services/firebase";
  import { auth, googleProvider } from "src/services/firebase";

  let userLoggedIn;
  $: userLoggedIn = $loggedIn;

  function handleHome() {
    push("/");
  }

  async function handleLogout() {
    await signOut();
    push("/session");
  }

  function handleRouterFailed(event) {
    console.error({
      event,
    });
    replace("/session");
  }
</script>

<style global lang="scss">
  @import "styles/global.scss";

  body > div:first-child {
    z-index: 1000;
  }

  header {
    background-color: darkblue;
    height: 60px;
    opacity: 0.2;
    z-index: 1;
  }

  .container-fluid {
    padding-top: 60px;
  }
</style>

<template>
  {#if $loggedIn}
    <Headroom duration="350ms" offset={50} tolerance={5}>
      <header class="d-flex justify-content-between">
        <div>
          <button class="btn btn-sm btn-light" on:click={handleHome}>
            <Fa icon={faHome} />
          </button>
        </div>
        <div>
          <button class="btn btn-sm btn-light" on:click={handleLogout}>
            <Fa icon={faPowerOff} />
          </button>
        </div>
      </header>
    </Headroom>
  {/if}

  <div class="container-fluid">
    {#if $loggedIn == null}
      <p>Loading...</p>
    {:else}
      <Router {routes} on:conditionsFailed={handleRouterFailed} />
    {/if}
  </div>
</template>
