<script>
  import {
    onMount
  } from 'svelte';
  import {
    Howler,
    Howl
  } from 'howler';
  import {
    from as rxFrom,
    timer as rxTimer
  } from 'rxjs'
  import {
    switchMap,
    startWith
  } from 'rxjs/operators'
  import {
    fade,
    fly
  } from 'svelte/transition';
  import Lyric from 'src/components/lyric.svelte';

  let sound;
  let soundId;
  let soundFinished = false;

  let timer =
    rxTimer(0, 500)
    .pipe(
      switchMap(function() {
        let seek = sound ? sound.seek() : 0;
        let playing = sound ? sound.playing() : false;
        return rxFrom([{
          seek,
          playing
        }]);
      }),
      startWith({
        seek: 0,
        playing: false
      })
    );
  $: soundFinished = soundFinished || $timer.seek > 7.5;



  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/shuffling.mp3']
    });

    return function() {
      if (soundId) {
        stopMusic();
      }

    };
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
  :global(.lyric:last-child) {
    color: red;
  }

  .options {
    font-size: 3rem;
    font-weight: bold;
    color: blue;
    margin-left: 3rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .buttons {
    margin-bottom: 2rem;
  }

  .question {
    font-size: 3rem;
    font-weight: bold;
  }

  .answer {
    font-size: 3rem;
    font-weight: normal;
  }

  .highlight {
    color: red;
  }

  .title {
    font-weight: bold;
  }

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 2</h1>

    <p style="font-size: 3rem;">
      <span class="title">Party Rock Anthem</span> by LMFAO, released 2011

    </p>

    <div class="question">
      What dance is being danced here?
    </div>
    <div class="answer">
      Everyday I'm <span class="highlight">Shuffling</span>
    </div>


  </div>

</template>
