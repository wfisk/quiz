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
    <h1>Question 4</h1>

    <p class="question">
      The British 50p coin is a <mark>seven</mark> sided coin.
      In 2019, a special commerative edition was planned to celebrate the exit of the United
      Kingdom from the European Union. The coin was inscribed with a quote,
      inspired by the inaugural address of Thomas Jefferson.
      What was the quote?
    </p>

    <ol class="options">
      <li class="option">
        Liberty, Equality, Fraternity
      </li>

      <li class="option">
        Life, Liberty and the pursuit of Happiness
      </li>

      <li class="option">
        Peace, prosperity and friendship with all nations.
      </li>

      <li class="option">
        So long, and thanks for all the fish
      </li>


    </ol>

  </div>

</template>
