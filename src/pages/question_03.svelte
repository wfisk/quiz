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
      src: ['/assets/audio/viva_la_vida.mp3']
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
    <h1>Question 3</h1>

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

      <Lyric showWhen="{$timer.seek> 7.5}" hideWhen="{$timer.seek > 21}">
        I used to roll the dice
      </Lyric>

      <Lyric showWhen="{$timer.seek> 11}" hideWhen="{$timer.seek > 21}">
        Feel the fear in my enemy's eyes
      </Lyric>

      <Lyric showWhen="{$timer.seek> 15}" hideWhen="{$timer.seek > 21}">
        Listen as the crowd would sing
      </Lyric>

      <Lyric showWhen="{$timer.seek> 18.5}" hideWhen="{$timer.seek > 21}">
        Now the old king is dead! Long live the king!
      </Lyric>

      <Lyric showWhen="{$timer.seek> 21.5}" hideWhen="{$timer.seek > 34}">
        One minute I held the key
      </Lyric>

      <Lyric showWhen="{$timer.seek> 25}" hideWhen="{$timer.seek > 34}">
        Next the walls were closed on me
      </Lyric>

      <Lyric showWhen="{$timer.seek> 28}" hideWhen="{$timer.seek > 34}">
        And I discovered that my castles stand
      </Lyric>

      <Lyric showWhen="{$timer.seek> 32}" hideWhen="{$timer.seek > 34}">
        Upon pillars of salt and pillars of sand
      </Lyric>

      <Lyric showWhen="{$timer.seek> 34.5 || soundFinished }">
        I hear .......
      </Lyric>
    </div>



    {#if $timer.seek > 36 || soundFinished }
    <ol type="A" class="options" in:fade>
      <li>Jerusalem bells are ringing</li>
      <li>Solomon's temple falling</li>
      <li>The holy lands are warring</li>
      <li>the Knight's Templar calling</li>
    </ol>
    {/if}


  </div>

</template>
