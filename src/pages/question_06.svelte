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

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Question 6</h1>

    <p class="question">
      The 7 up logo, for use outside the US, was redesigned in 2011.
      In what geometric shape does the word UP appear?
    </p>

    <ol class="options">
      <li class="option">
        Green Circle
      </li>

      <li class="option">
        Orange Diamond
      </li>

      <li class="option">
        Red Circle
      </li>

      <li class="option">
        Yellow Diamond
      </li>


    </ol>

  </div>

</template>
