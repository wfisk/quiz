<script>
  import Question from 'src/collections/Question';
  import Quiz from 'src/collections/Quiz';
  import {
    map
  } from 'rxjs/operators';

  export let params = {};

  $: console.log(params.quizId);

  let quizId = params.quizId;
  let quiz = Quiz.find(quizId);
  let questions = Question.findAllByQuizId(quizId);

  $: console.log($quiz);



  // Events
  function handleAddQuestion_click() {
    Question.add({
      quizId: $quiz.id,
      questionIndex: $questions.length + 1
    });
  }

</script>

<template>
  {#if $quiz}
    <h1>Quiz - {$quiz.name}</h1>

    <table class="table table-striped">
      <thead>
        <th class="question-index">Index</th>
        <th class="question-text">Text</th>
      </thead>
      <tbody>
        {#each $questions as question}
        <tr>
          <td class="question-number">
            <a href="#/quizzes/{$quiz.id}/questions/{question.id}">Question {question.questionIndex}</a>
          </td>
          <td class="question-text">
            {question.text}
          </td>
        {/each}
      </tbody>
    </table>


    <button class="btn btn-primary" on:click={handleAddQuestion_click}>Add Question</button>
  {/if}  
</template>
