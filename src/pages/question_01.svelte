<script>
  import {
    fade
  } from 'svelte/transition';
  // import {
  //   Howler,
  //   Howl
  // } from 'howler';

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question One</h1>

  </div>
</template>
