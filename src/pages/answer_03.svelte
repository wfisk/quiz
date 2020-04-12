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

    <p style="font-size: 3rem;">
      <span class="title">Viva La Vida</span> by Coldplay released September 2008

    </p>

    <Lyric showWhen={true}>
      I hear .......
    </Lyric>

    <ol type="A" class="options" in:fade>
      <li style="color:red;">Jerusalem bells are ringing</li>
      <li>Solomon's temple falling</li>
      <li>The holy lands are warring</li>
      <li>the Knight's Templar calling</li>
    </ol>



  </div>

</template>
