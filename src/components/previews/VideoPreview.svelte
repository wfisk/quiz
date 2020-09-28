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

  // All providers are named {ProviderName}Provider.
  import {
    Player,
    FileProvider,
    YouTubeProvider
  } from '@vime-js/standard';


  export let question;

  // Vime Player
  let player;
  let audioPlayer;
  let videoPlayer;

  const providers = [FileProvider, YouTubeProvider];

  $: $question, updateAudioPlayer();
  $: videoPlayer, updateVideoPlayer();


  let sound;
  let soundId;
  let soundFinished = false;

  // let timer =
  //   rxTimer(0, 500)
  //   .pipe(
  //     switchMap(function() {
  //       let seek = sound ? sound.seek() : 0;
  //       let playing = sound ? sound.playing() : false;
  //       return rxFrom([{
  //         seek,
  //         playing
  //       }]);
  //     }),
  //     startWith({
  //       seek: 0,
  //       playing: false
  //     })
  //   );
  // $: soundFinished = soundFinished || $timer.seek > 30;



  onMount(function() {

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

  function updateAudioPlayer() {
    if ($question && $question.audio) {
      sound = new Howl({
        src: [$question.audio.url]
      });
    }
  }

  function updateVideoPlayer() {
    if (videoPlayer) {
      videoPlayer.useNativeCaptions = false;
      videoPlayer.useNativeControls = false;
      videoPlayer.useNativeView = false;
    }
  }

</script>

<style>
  h1 {
    margin-bottom: 1rem;
  }

  :global(.lyrics .lyric:last-child) {
    color: red;
  }

  h1 {
    margin-bottom: 1rem;
  }

  .question {
    background-color: #5a6dba;
    border-radius: 0.5rem;
    color: white;
    font-size: 3rem;
    font-weight: normal;
    padding: 0.5rem 1rem;
  }

  .options {
    list-style-type: upper-alpha;
  }

  .option {
    font-size: 3rem;
    font-weight: bold;
    margin-left: 3rem;
  }

  .buttons {
    margin-bottom: 2rem;
  }

  mark {
    color: orange;
    background-color: transparent;
  }

</style>


<template>
  {#if $question}
    <h1>Question {$question.questionIndex}</h1>

    {#if $question.audio}

      {#if $question.audio.file}
        <audio controls src={$question.audio.file}/>
      {/if}  
   

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
    {/if}


    {#if $question.image}
      Question Image
    {/if}


    {#if $question.video}
      <Player
        src="{$question.video.url}"
        {providers}
        bind:this={videoPlayer} 
      />
    {/if}

    <p class="question">
      {$question.text}
    </p>

    <ol class="options">
      {#each $question.options as option}
        <li class="option">
          {option.text}
        </li>
      {/each}
    </ol>

  {/if}

</template>
