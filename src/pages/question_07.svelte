<script>
  import { fade } from 'svelte/transition';
</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 7</h1>

 </div>
</template>

