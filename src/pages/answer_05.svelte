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
    <h1>Question 5</h1>

    <p class="question">
      Most French departments are assigned a two-digit number. This number is used as part of the post code.
      For example, I live in Seine et Marne, number 77, and my post code is 77190. Which French department
      is assigned the number 7?
    </p>

    <ol class="options">
      <li class="option active">
        Ardèche
      </li>

      <li class="option">
        Haute-Loire
      </li>

      <li class="option">
        Puy de Dôme
      </li>

      <li class="option">
        Savoie
      </li>


    </ol>

  </div>

</template>
