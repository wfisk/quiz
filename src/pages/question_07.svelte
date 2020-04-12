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
  $: soundFinished = soundFinished || $timer.seek > 30;



  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/karma.mp3']
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

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 7 - Bonus Question</h1>

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
      <Lyric showWhen="{$timer.seek > 0}" hideWhen="{$timer.seek > 10.4}">
        How to sell a contradiction
      </Lyric>

      <Lyric showWhen="{$timer.seek> 5}" hideWhen="{$timer.seek > 10.4}">
        You come and go, you come and go
      </Lyric>

      <Lyric showWhen="{$timer.seek> 10.8 }" hideWhen="{$timer.seek > 30}">
        Karma, karma, karma, karma, karma chameleon
      </Lyric>

      <Lyric showWhen="{$timer.seek> 15 }" hideWhen="{$timer.seek > 30}">
        You come and go, you come and go
      </Lyric>

      <Lyric showWhen="{$timer.seek> 21 }" hideWhen="{$timer.seek > 30}">
        Loving would be easy if your colors were like my dreams
      </Lyric>

      <Lyric showWhen="{$timer.seek> 26 || soundFinished }">
        Red, ????, and green, red, ????, and green
      </Lyric>
    </div>



    {#if $timer.seek > 30 || soundFinished }
    <ol type="A" class="options" in:fade>
      <li>Blue</li>
      <li>Gold</li>
      <li>Orange</li>
      <li>Yellow</li>
    </ol>
    {/if}


  </div>

</template>
