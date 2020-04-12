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
  $: soundFinished = soundFinished || $timer.seek > 32;



  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/groovy.mp3']
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
    <h1>Question 6</h1>

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

      <Lyric showWhen="{$timer.seek> 0.5}" hideWhen="{$timer.seek > 24}">
        Slow down, you move too fast
      </Lyric>

      <Lyric showWhen="{$timer.seek> 4}" hideWhen="{$timer.seek > 24}">
        You got to make the morning last
      </Lyric>

      <Lyric showWhen="{$timer.seek> 7}" hideWhen="{$timer.seek > 24}">
        Just kicking down the cobblestones
      </Lyric>

      <Lyric showWhen="{$timer.seek> 11}" hideWhen="{$timer.seek > 24}">
        Looking for fun and feelin' groovy
      </Lyric>

      <Lyric showWhen="{$timer.seek> 17.5}" hideWhen="{$timer.seek > 24}">
        Ba da da da da da da, feelin' groovy
      </Lyric>

      <Lyric showWhen="{$timer.seek> 25 || soundFinished }">
        Hello, ????, what'cha knowin'?
      </Lyric>

      <Lyric showWhen="{$timer.seek> 28 || soundFinished }">
        I've come to watch your flowers growin'
      </Lyric>
    </div>


    {#if $timer.seek > 32 || soundFinished }
    <ol type="A" class="options" in:fade>
      <li>Bus stop</li>
      <li>Lamppost</li>
      <li>Mail box</li>
      <li>Stop light</li>
    </ol>
    {/if}


  </div>

</template>
