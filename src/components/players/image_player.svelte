<script>

  export let mediaItem;

  $: mediaFile = mediaItem ? mediaItem.parent.findMediaFile(mediaItem.fileName) : rxOf(null)

</script>

<template>
  <h2>Image Player</h2>

  {#if !mediaItem}
    Loading...
  {:else}
    {#if $mediaFile && $mediaFile.url }
    <div style="display:flex; justify-content:center;">
      <img alt="media" src="{$mediaFile.url}" />
    </div>  
    {/if}  
   {/if} 

</template>

<style>
  img { max-width: 100%; }
</style>
