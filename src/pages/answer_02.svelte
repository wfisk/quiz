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

  mark {
    color: orange;
    background-color: transparent;
  }

</style>

<template>
  <div in:fade="{{delay: 300, duration: 600}}" out:fade="{{delay: 0, duration: 300}}">
    <h1>Answer 2</h1>

    <p class="question">
      Which of the following is not one of the <mark>seven</mark>dwarfs from the 1937 film Snow White and the Seven Dwarfs?
    </p>


    <ol class="options">
      <li class="option">
        Bashful
      </li>

      <li class="option active">
        Bossy
      </li>

      <li class="option">
        Doc
      </li>

      <li class="option">
        Happy
      </li>


    </ol>

    <div class="info">
      The names of the seven dwarfs are:
      <ul>
        <li>Doc</li>
        <li>Grumpy</li>
        <li>Happy</li>
        <li>Sleepy</li>
        <li>Dopey</li>
        <li>Bashful</li>
        <li>Sneezy</li>
      </ul>
    </div>

  </div>

</template>
