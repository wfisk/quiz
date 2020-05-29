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
    EMPTY
  } from 'rxjs';
  import {
    switchMap,
    startWith
  } from 'rxjs/operators'
  import {
    fade,
    fly
  } from 'svelte/transition';
  import Lyric from 'src/components/lyric.svelte';
  import MediaItemPlayer from 'src/components/players/media_item_player.svelte';



  // All providers are named {ProviderName}Provider.
  import {
    Player,
    FileProvider,
    YouTubeProvider
  } from '@vime-js/standard';


  export let question;

  $: mediaItems = $question ? $question.mediaItems() : EMPTY;

  $: console.log({
    $mediaItems
  });

  // Vime Player
  let player;
  let audioPlayer;
  let videoPlayer;

  const providers = [FileProvider, YouTubeProvider];


  function updateVideoPlayer() {
    if (videoPlayer) {
      videoPlayer.useNativeCaptions = false;
      videoPlayer.useNativeControls = false;
      videoPlayer.useNativeView = false;
    }
  }

</script>


<template>
  {#if $question}
   <h1>Question {$question.questionIndex}</h1>

  {#each $mediaItems as mediaItem}
    <MediaItemPlayer {mediaItem} />
  {/each}

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
        <li class="option" class:active={$question.reveal_answer && option.correct}>
          {option.text}
        </li>
      {/each}
    </ol>

  {/if}
</template>


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

  .option.active {
    color: red;
  }


  .buttons {
    margin-bottom: 2rem;
  }

  mark {
    color: orange;
    background-color: transparent;
  }

</style>
