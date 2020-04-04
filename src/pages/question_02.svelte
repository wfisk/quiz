<script>
  import {
    fade
  } from 'svelte/transition';

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 2</h1>


    <p>
      The film Haloween starred Jamie Lee Curtis, the daughter of Tony Curtis.
      How many sequels were there to Haloween
      12 Sequels including remakes
    </p>



</template>
