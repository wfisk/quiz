<script>
  import AudioPlayer from 'src/components/players/audio_player.svelte';
  import ImagePlayer from 'src/components/players/image_player.svelte';
  import VideoPlayer from 'src/components/players/video_player.svelte';

  export let mediaItem;
  export let onEnded;

</script>

<template>
  {#if mediaItem.mediaType === 'audio'}
    <AudioPlayer {mediaItem} {onEnded} />

  {:else if mediaItem.mediaType === 'image'}
    <ImagePlayer {mediaItem} {onEnded}/>

  {:else if mediaItem.mediaType === 'video'}
   <VideoPlayer {mediaItem} />

  {/if}
</template>
