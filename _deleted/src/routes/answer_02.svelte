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
    <h1>Question 2</h1>

    <p class="question">
      The Plook on the Plinth award was an award given by the Urban Realm magazine for <mark>the most dismal town
        in Scotland</mark>. Only one town has won it twice. Which town was it?
    </p>

    <ol class="options">
      <li class="option">
        Airdrie, Winner 2000
      </li>

      <li class="option">
        Coatbridge, Winner 2007
      </li>

      <li class="option active">
        Cumbernauld, Winner 2001 and 2005
      </li>

      <li class="option">
        Motherwell. Shortlisted but not Winnner
      </li>


    </ol>

  </div>

</template>
