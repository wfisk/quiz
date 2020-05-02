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
    <h1>Question 3</h1>

    <p class="question">
      Which of the following sports does not have <mark>seven</mark> players in a team (excluding substitutes)?
    </p>

    <ol class="options">
      <li class="option">
        Handball
      </li>

      <li class="option">
        Ice Hockey
      </li>

      <li class="option">
        Netball
      </li>

      <li class="option">
        Ultimate Frisbee
      </li>


    </ol>

  </div>

</template>
