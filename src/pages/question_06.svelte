<script>
  import {
    fade
  } from 'svelte/transition';

</script>

<style>


</style>
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

  let sound;
  let soundId;

  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/persuaders.mp3']
    });
  })

  function playMusic() {
    soundId = sound.play();
  }

  function pauseMusic() {
    sound.pause(soundId);
  }

  function resumeMusic() {
    sound.play(soundId);
  }

  function stopMusic() {
    sound.stop(soundId);
    soundId = null;
  }

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question One</h1>

    <button class="btn btn-primary" on:click={playMusic} disabled={!sound || soundId}>
      Play Music
    </button>

    <button class="btn btn-primary" on:click={pauseMusic} disabled={!sound || !soundId}>
      Pause Music
    </button>

    <button class="btn btn-primary" on:click={resumeMusic} disabled={!sound || !soundId}>
      Resume Music
    </button>

    <button class="btn btn-primary" on:click={stopMusic} disabled={!sound || !soundId}>
      Stop Music
    </button>


  </div>
</template>
