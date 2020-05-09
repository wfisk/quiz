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
    <h1>Question 6</h1>

    <p class="question">
      What three letter tag line appears on a can of bottle of Irn Bru,
      often written between the words Irn and Bru?
    </p>

    <ol class="options">
      <li class="option">
        Life Tastes Good, <span style="font-weight: normal;">Coca Cola 2001</span>
      </li>

      <li class="option">
        Made from Girders
      </li>

      <li class="option active">
        Original and Best
      </li>

      <li class="option">
        Scotland's National Drink
      </li>


    </ol>
    <img src='/assets/images/irn_bru_1.jpg' alt="irn bru can">
    <img src='/assets/images/irn_bru_2.jpg' alt="irn bru bottle">
  </div>

</template>
