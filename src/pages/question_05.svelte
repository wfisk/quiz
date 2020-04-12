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
  $: soundFinished = soundFinished || $timer.seek > 50;



  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/corona_rhapsody.mp3']
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

  :global(.questions .question:last-child) {
    color: red;
  }

  .question {
    font-size: 3rem;
    font-weight: bold;
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
    <h1>Question 5</h1>

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

      <Lyric showWhen="{$timer.seek > 0.3}" hideWhen="{$timer.seek > 14}">
        Is this a fever?
      </Lyric>

      <Lyric showWhen="{$timer.seek > 3}" hideWhen="{$timer.seek > 14}">
        Is this just allergies?
      </Lyric>

      <Lyric showWhen="{$timer.seek > 7}" hideWhen="{$timer.seek > 14}">
        Caught in a lockdown
      </Lyric>

      <Lyric showWhen="{$timer.seek > 10}" hideWhen="{$timer.seek > 14}">
        No escape from the family
      </Lyric>

      <Lyric showWhen="{$timer.seek > 14.5}" hideWhen="{$timer.seek > 50}">
        Don't touch your eyes
      </Lyric>

      <Lyric showWhen="{$timer.seek > 17.5}" hideWhen="{$timer.seek > 50}">
        Just hand sanitize quickly
      </Lyric>

      <Lyric showWhen="{$timer.seek > 24.5}" hideWhen="{$timer.seek > 50}">
        I'm just a poor boy, no job security
      </Lyric>

      <Lyric showWhen="{$timer.seek > 31.20}" hideWhen="{$timer.seek > 50}">
        Because of easy spread, even though
      </Lyric>

      <Lyric showWhen="{$timer.seek > 34.5}" hideWhen="{$timer.seek > 50}">
        I washed my hands, laying low
      </Lyric>

      <Lyric showWhen="{$timer.seek > 38}" hideWhen="{$timer.seek > 50}">
        I look out the window, the curve doesn't look flatter, to me, to me.
      </Lyric>
    </div>



    {#if $timer.seek > 52 || soundFinished }
    <div class="questions">

    <div class="question" in:fade="{{delay: 2000}}" style="margin-bottom: 1rem;">
      In the UK Best-Selling Singles, based on combined physical, download and streaming sales, 
      as at September 2017, Boheminam Rhapsody was ranked Number 4.
    </div>
    <div class="question" in:fade="{{delay: 5000}}">
      Name one other song in this top ten.
    </div>
  </div>
  {/if}


  </div>

</template>
