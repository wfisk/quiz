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
    <h1>Answer 4</h1>

    <p class="question">
      In a 2D game of Noughts and Crosses, represented by a 3x3 grid, there are eight winning lines.
      How many winning lines are there in a 3D game of Noughts and Crosses, represented by a 3x3x3 grid ?
    </p>

    <p class="option active">
      D. 49
    </p>


    <p class="info">
      The 3x3x3 grid is three layers, with each layer containing a 3x3 grid.
      A winning line is either within a layer or goes through all three layers.

      There are 3 x 8 (=24) winning lines that stay within their layer.

      For the lines that go through all layers, consider all winning lines from the top layer.
    </p>
    <table border="1" width="25%">
      <tr>
        <td>
          4
        </td>
        <td>
          2
        </td>
        <td>
          4
        </td>
      </tr>
      <tr>
        <td>
          2
        </td>
        <td>
          1
        </td>
        <td>
          2
        </td>
      </tr>
      <tr>
        <td>
          4
        </td>
        <td>
          2
        </td>
        <td>
          4
        </td>
      </tr>
    </table>
    <p class="info">
      There are 25 winning lines that go through all three layers.

      This gives a total of 24 + 25 = 49 winning lines.
    </p>

  </div>

</template>
