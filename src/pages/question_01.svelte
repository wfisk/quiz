<script>
  import {
    onMount
  } from 'svelte';
  import {
    fade
  } from 'svelte/transition';
  import {
    Howler,
    Howl
  } from 'howler';

  onMount(function() {
    let sound = new Howl({
      src: ['/assets/audio/persuaders.mp3']
    });

    sound.play();

  })

  function playMusic() {
    let sound = new Howl({
      src: ['/assets/audio/persuaders.mp3']
    });

    sound.play();

  }

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question One</h1>

    <button class="btn btn-primary" on:click={playMusic}>
      Play Music
    </button>

  </div>
</template>
