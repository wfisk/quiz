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
    font-size: 2rem;
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
    <h1>Question 4</h1>

    <p class="question">
      The British 50p coin is a 7 sided coin.
      In 2019, a special commerative edition was planned to celebrate the exit of the United
      Kingdom from the European Union. The coin was inscribed with a quote,
      inspired by the inaugural address of Thomas Jefferson.
      What was the quote?
    </p>

    <ol class="options">
      <li class="option">
        Liberty, Equality, Fraternity, French National Motto
      </li>

      <li class="option">
        Life, Liberty and the pursuit of Happiness, from the United States declaration of independence.
      </li>

      <li class="option active">
        Peace, prosperity and friendship with all nations.
      </li>

      <li class="option">
        So long, and thanks for all the fish, from a book by Douglas Adams. It is the message left by
        dolphins when they departed Planet Earth just before it was demolished to make way for a
        hyperspace bypass.
      </li>


    </ol>

  </div>

</template>
