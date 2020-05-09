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
      According to Trip Advisor, what is the number one tourist attraction in Cumbernauld?
    </p>

    <ol class="options">

      <li class="option">
        Cumbernauld Museum
      </li>

      <li class="option">
        Cumbernauld Theatre
      </li>

      <li class="option">
        Tour of Broadwood Stadium Tour
      </li>

      <li class="option">
        World of Wings Birds of Prey Centre
      </li>


    </ol>

  </div>

</template>
