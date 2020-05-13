<script>
  import Quiz from 'src/models/Quiz';
  import {
    map
  } from 'rxjs/operators';



  let quizzes = Quiz.findAll({
    order: 'name'
  });

  $: console.log($quizzes[0]);

</script>

<style>
  .quiz-name {
    width: 25%;
  }

  .quiz-id {
    width: 33.333%;
  }

  .quiz-owner {
    width: 25%;
  }

  .quiz-active-question {
    width: 16.667%;
  }

</style>

<template>
  <h1>Quizzes</h1>

  <table class="table table-striped">
    <thead>
      <th class="quiz-name">Name</th>
      <th class="quiz-id">Quiz Id</th>
      <th class="quiz-owner">Owner</th>
      <th class="quiz-active-question">Active Question</th>
    </thead>
    <tbody>
      {#each $quizzes as quiz}
      <tr>
        <td class="quiz-name">
          <a href="#/quizzes/{quiz.id}">{quiz.name}</a>
        </td>
        <td class="quiz-id">
          {quiz.id}
        </td>
        <td class="quiz-owner">
          {quiz.owner && quiz.owner.displayName}
        </td>
        <td class="quiz-active-question">
          {quiz.activeQuestion}
        </td>
      {/each}
    </tbody>
  </table>
</template>
