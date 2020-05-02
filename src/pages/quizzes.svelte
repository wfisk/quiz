<script>
  import Quiz from 'src/collections/Quiz';
  import {
    map
  } from 'rxjs/operators';

  let quizzes = Quiz.findAll().pipe(map(quizzes => quizzes.sort((a, b) => a.name.localeCompare(b.name))));

  $: console.log($quizzes[0]);

</script>

<template>
  <h1>Quizzes</h1>

  <table class="table table-striped">
    <thead>
      <th class="quiz-name">Name</th>
      <th class="quiz-id">Quiz Id</th>
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
        <td class="quiz-active-question">
          {quiz.activeQuestion}
        </td>
      {/each}
    </tbody>
  </table>
</template>
