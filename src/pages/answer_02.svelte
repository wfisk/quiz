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
    <h1>Answer 2</h1>

    <p class="question">
      In a basic double-six domino set there are 28 tiles.
      How many dots are there?
    </p>

    <p class="option active">
      C. 168
    </p>

    <img src="assets/images/dominoes.png">

    <p class="info">
      Each number is present on seven dominoes, and on one of these seven is present twice.
      So we need eight of each number.
    </p>

    <p class="info">
      Total number of dots = 8 &times; (1 + 2 + 3 + 4 + 5 + 6) = 8 &times; 21 = 168
    </p>

  </div>

</template>
