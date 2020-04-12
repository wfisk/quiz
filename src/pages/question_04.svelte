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
  $: console.log($timer);
  $: soundFinished = soundFinished || $timer.seek > 36;



  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/barcelona.mp3']
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
  :global(.lyrics .verse .lyric) {
    color: black !important;
    font-size: 2rem;
    font-weight: normal;
  }

  :global(.lyrics .verse) {
    margin-bottom: 1rem;
  }

  .question {
    font-size: 3rem;
    font-weight: bold;
    color: red;
  }


  .options {
    font-size: 3rem;
    font-weight: bold;
    margin-left: 3rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .buttons {
    margin-bottom: 2rem;
  }

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 4</h1>

    <div class="question">
      From which song are these lyrics taken?
    </div>



    <div class="lyrics">

      <div class="verse">
        <Lyric showWhen={true}>
          I had this perfect dream
        </Lyric>

        <Lyric showWhen={true}>
          <em>Un sueño me envolvió</em>
        </Lyric>

        <Lyric showWhen={true}>
          This dream was me and you
        </Lyric>

        <Lyric showWhen={true}>
          <em>Tal vez estás aquí</em>
        </Lyric>
      </div>

      <div class="verse">
        <Lyric showWhen={true}>
          I want all the world to see
        </Lyric>

        <Lyric showWhen={true}>
          <en>Un instinto me guiaba</en>
        </Lyric>

        <Lyric showWhen={true}>
          A miracle sensation
        </Lyric>

        <Lyric showWhen={true} style="margin-bottom: 2rem;">
          My guide and inspiration
        </Lyric>
      </div>

      <div class="verse">
        <Lyric showWhen={true}>
          Now my dream is slowly coming true
        </Lyric>

        <Lyric showWhen={true}>
          The wind is a gentle breeze
        </Lyric>

        <Lyric showWhen={true}>
          <em>Él me habló de ti</em>
        </Lyric>

        <Lyric showWhen={true}>
          The bells are ringing out
        </Lyric>
      </div>

      <div class="verse">
        <Lyric showWhen={true}>
          <em>El canto vuela</em>
        </Lyric>

        <Lyric showWhen={true}>
          They're calling us together
        </Lyric>

        <Lyric showWhen={true}>
          Guiding us forever
        </Lyric>

        <Lyric showWhen={true}>
          Wish my dream would never go away
        </Lyric>
      </div>
    </div>


  </div>

</template>
