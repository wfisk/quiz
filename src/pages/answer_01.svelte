<script>
  import {
    fade,
  } from 'svelte/transition';
  import question01Option from 'src/stores/question_01_option.js';
  import answer01Visible from 'src/stores/answer_01_visible.js';

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

  .info {
    color: #5a6dba;
    border-radius: 0.5rem;
    font-size: 2rem;
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

  .option.active {
    color: red;
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
    <h1>Answer 1</h1>

    <p class="question">
      How do you write <mark>seven</mark> in Portuguese?
    </p>

    <ol class="options">
      <li class="option">
        Sept (French)
      </li>

      <li class="option active">
        Sete (Portuguese)
      </li>

      <li class="option">
        Sette (Italian)
      </li>

      <li class="option">
        Siete (Spanish)
      </li>


    </ol>

  </div>

</template>
