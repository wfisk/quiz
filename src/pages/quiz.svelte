<script>
  import Question from 'src/collections/Question';
  import Questions from 'src/collections/Questions';
  import Quiz from 'src/collections/Quiz';
  import Quizzes from 'src/collections/Quizzes';
  import {
    map
  } from 'rxjs/operators';

  export let params = {};

  $: console.log(params.quizId);

  let quizId = params.quizId;

  let quiz = Quizzes.find(quizId);
  $: questions = Questions.findAllBelongingTo($quiz);

  $: console.log($quiz);



  // Events
  function handleAddQuestion_click() {
    if ($quiz) {
      $quiz.addQuestion({
        quizId: $quiz.id,
        questionIndex: $questions.length + 1,
        text: 'Question ' + ($questions.length + 1)
      });
    }
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
