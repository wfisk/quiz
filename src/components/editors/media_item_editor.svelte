<script>
  import AudioEditor from 'src/components/editors/audio_editor.svelte';
  import ImageEditor from 'src/components/editors/image_editor.svelte';
  import VideoEditor from 'src/components/editors/video_editor.svelte';

  export let mediaItem;

</script>

<template>
  {#if $mediaItem}

    {#if $mediaItem.mediaType === 'audio'}
      <AudioEditor {mediaItem} />

    {:else if $mediaItem.mediaType === 'image'}
      <ImageEditor {mediaItem} />

    {:else if $mediaItem.mediaType === 'video'}
    <VideoEditor {mediaItem} />

    {/if}
    
  {/if}
</template>
