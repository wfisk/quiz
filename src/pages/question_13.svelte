<script>
  import {
    fade
  } from 'svelte/transition';

</script>

<style>


</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 3</h1>

    <p>
      How many sequels were there to Friday 13th?
      12 Sequels including remakes
    </p>

    <ul>
      <li>Halloween II
      <li>Halloween III: Season of the Witch
      <li>Halloween 4: The Return of Michael Myers
      <li>Halloween 5: The Revenge of Michael Myers
      <li>Halloween: The Curse of Michael Myers
      <li>Halloween H20: 20 Years Later
      <li>Halloween: Resurrection
      <li>Halloween
      <li>Halloween II
      <li>Halloween
      <li>Halloween Kills
      <li>Halloween Ends
    </ul>

    Jamie Lee Curtis appeared in 8 of them
  </div>
</template>
