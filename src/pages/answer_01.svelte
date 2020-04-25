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

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 1</h1>

    <p class="question">
      Which of the following characters is not considered a Pokémon?
    </p>

    <p class="option active">
      B. Frodo
    </p>

    <p class="info">
      Frodo is a Hobbit, a fictional character from the Lord of the Rings
    </p>

    <p class="info">
      This was the $500,000 question from Who Wants to be a Millionaire (US).
      The candidate declined to answer this question and walked away with
      $250,000.
    </p>


  </div>

</template>
