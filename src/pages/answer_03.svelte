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
    <h1>Answer 3</h1>

    <p class="question">
      Which of the following sports does not have <mark>seven</mark> players in a team (excluding substitutes)?
    </p>

    <ol class="options">
      <li class="option">
        Handball, 7 players in a team
      </li>

      <li class="option active">
        Ice Hockey, 6 players in a team, 3 forwards, 2 defense and 1 goaltender
      </li>

      <li class="option">
        Netball, 7 players in a team
      </li>

      <li class="option">
        Ultimate Frisbee, 7 players in a team
      </li>


    </ol>

  </div>

</template>
