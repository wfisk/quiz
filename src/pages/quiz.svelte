<script>
  import Question from 'src/models/Question';
  import Quiz from 'src/models/Quiz';
  import {
    EMPTY
  } from 'rxjs';
  import {
    map
  } from 'rxjs/operators';

  export let params = {};
  let quiz = Quiz.find(params.quizId);

  $: questions = $quiz ? $quiz.questions() : EMPTY;


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
