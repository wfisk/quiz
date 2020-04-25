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
    <h1>Answer 3</h1>

    <p class="question">
      Who is the current World Chess Champion?
    </p>

    <p class="option active">
      B. Magnus Carlsen
    </p>

    <ul class="info">
      <li><strong>Patrick Barrie</strong> is World TiddlyWinks Champion.
      </li>

      <li><strong>Nicolo Falcone</strong> is World Monopoly Champion.
      </li>

      <li><strong>Nigel Richards</strong> is World Scrabble Champion.
      </li>
    </ul>

  </div>

</template>
