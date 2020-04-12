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
  $: soundFinished = soundFinished || $timer.seek > 36;


  onMount(function() {
    sound = new Howl({
      src: ['/assets/audio/gimme2.mp3']
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
    <h1>Question 1</h1>

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

      <Lyric showWhen="{$timer.seek> 1}" hideWhen="{$timer.seek > 10.5}">
        Half past twelve
      </Lyric>

      <Lyric showWhen="{$timer.seek> 3}" hideWhen="{$timer.seek > 10.5}">
        Watchin' the late show
      </Lyric>

      <Lyric showWhen="{$timer.seek> 4.5}" hideWhen="{$timer.seek > 10.5}">
        In my flat all alone
      </Lyric>

      <Lyric showWhen="{$timer.seek> 6.5}" hideWhen="{$timer.seek > 10.5}">
        How I hate to spend the evening on my own
      </Lyric>

      <Lyric showWhen="{$timer.seek> 11}" hideWhen="{$timer.seek > 20}">
        Autumn winds blowin' outside the window
      </Lyric>

      <Lyric showWhen="{$timer.seek> 14.4}" hideWhen="{$timer.seek > 20}">
        As I look around the room
      </Lyric>

      <Lyric showWhen="{$timer.seek> 16.5}" hideWhen="{$timer.seek > 20}">
        And it makes me so depressed to see the gloom
      </Lyric>

      <Lyric showWhen="{$timer.seek> 21}" hideWhen="{$timer.seek > 31.5}">
        There's not a soul out there
      </Lyric>

      <Lyric showWhen="{$timer.seek> 24.5}" hideWhen="{$timer.seek > 31.5}">
        No one to hear my prayer
      </Lyric>

      <Lyric showWhen="{$timer.seek> 32 || soundFinished }">
        Gimme, gimme, gimme .......
      </Lyric>
    </div>


    {#if $timer.seek > 36 || soundFinished }
    <ol type="A" class="options" in:fade>
      <li>A Man after Midnight</li>
      <li>A Man after my Heart</li>
      <li>A Man after this Night</li>
      <li>A Man after my Dreams</li>
    </ol>
    {/if}


  </div>

</template>
