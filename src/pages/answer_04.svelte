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
  $: soundFinished = soundFinished || $timer.seek > 32;



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
  :global(.lyrics .lyric:last-child) {
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

  .translation {
    font-weight: normal !important;
  }

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 4</h1>

    <div class="buttons">
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

    <div class="lyrics">
      <Lyric showWhen="{$timer.seek> 0.5}">
        The wind is a gentle breeze
      </Lyric>

      <Lyric showWhen="{$timer.seek> 6}">
        Él me habló de ti <span class="translation">(He told me about you)</span>
      </Lyric>

      <Lyric showWhen="{$timer.seek> 11.2}">
        The bells are ringing out
      </Lyric>

      <Lyric showWhen="{$timer.seek> 14}">
        El canto vuela <span class="translation">(Singing flies)</span>
      </Lyric>

      <Lyric showWhen="{$timer.seek> 17}">
        They're calling us together
      </Lyric>

      <Lyric showWhen="{$timer.seek> 19.5}">
        Guiding us forever
      </Lyric>

      <Lyric showWhen="{$timer.seek> 22}">
        Wish my dream would never go away
      </Lyric>

      <Lyric showWhen="{$timer.seek> 32 || soundFinished }">
        Barcelona by Freddie Mercury and Montserrat Caballé, released 1987
      </Lyric>
    </div>




  </div>

</template>
