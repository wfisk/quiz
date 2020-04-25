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
    <h1>Question 4</h1>

    <p class="question">
      In a 2D game of Noughts and Crosses, represented by a 3x3 grid, there are eight winning lines.
      How many winning lines are there in a 3D game of Noughts and Crosses, represented by a 3x3x3 grid ?
    </p>

    <ol class="options">
      <li class="option">
        41
      </li>

      <li class="option">
        45
      </li>

      <li class="option">
        48
      </li>

      <li class="option">
        49
      </li>


    </ol>

  </div>

</template>
