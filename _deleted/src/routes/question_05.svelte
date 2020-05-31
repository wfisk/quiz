<script>
  import {
    fade,
  } from 'svelte/transition';

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
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 5</h1>

    <p class="question">
      The name Cumbernauld probably comes from the Gaelic <em>comar nan allt</em>.
      What does this mean?
    </p>

    <ol class="options">
      <li class="option">
        Cottage Bridge
      </li>

      <li class="option">
        The King's Height
      </li>

      <li class="option">
        Lady Well
      </li>

      <li class="option">
        Meeting of the streams
      </li>


    </ol>

  </div>

</template>
