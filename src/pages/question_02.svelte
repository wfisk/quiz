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
    <h1>Question 2</h1>

    <p class="question">
      The Plook on the Plinth award was an award given by the Urban Realm magazine for <mark>the most dismal town
        in Scotland</mark>. Only one town has won it twice. Which town was it?
    </p>

    <ol class="options">
      <li class="option">
        Airdrie
      </li>

      <li class="option">
        Coatbridge
      </li>

      <li class="option">
        Cumbernauld
      </li>

      <li class="option">
        Motherwell
      </li>


    </ol>

  </div>

</template>
