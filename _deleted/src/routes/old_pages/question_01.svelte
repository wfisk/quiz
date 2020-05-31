<script>
  import {
    fade,
  } from 'svelte/transition';

</script>

<style>
  h1 {
    margin-bottom: 1rem;
  }

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 1</h1>


    <video width="640" height="480" controls>
      <source src="assets/video/brown_1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

</template>
