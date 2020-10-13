<script>
  import { loggedIn, signInWithPopup, signOut } from "/src/services/firebase";
  import currentUser from "/src/stores/currentUser";
</script>

<template>
  {#if !$loggedIn}
    <button class="btn btn-primary" on:click={signInWithPopup}>Sign in</button>
  {:else}
    <dl>
      <dt>Current User</dt>
      <dd>{$currentUser.displayName} ({$currentUser.uid})</dd>
    </dl>
    <button class="btn btn-warning" on:click={signOut}>Sign out</button>
  {/if}
</template>
