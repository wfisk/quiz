<script>
  import AudioPreview from 'src/components/previews/audio_preview.svelte';
  import ImagePreview from 'src/components/previews/image_preview.svelte';
  import VideoPreview from 'src/components/previews/video_preview.svelte';

  export let mediaItem;

</script>

<template>
  {#if $mediaItem}

    {#if $mediaItem.mediaType === 'audio'}
      <AudioPreview {mediaItem} />

    {:else if $mediaItem.mediaType === 'image'}
      <ImagePreview {mediaItem} />

    {:else if $mediaItem.mediaType === 'video'}
    <VideoPreview {mediaItem} />

    {/if}

  {/if}
</template>
