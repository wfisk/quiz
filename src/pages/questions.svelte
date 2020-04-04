<script>
  import Question from "src/collections/Question.js";
  import Quiz from "src/collections/Quiz.js";
  import activeQuestion from "src/stores/active-question.js";
  import activeQuestionPage from "src/stores/active-question-page.js";

  // Question Observable
  let questions = Question.findAll();
  let quizzes = Quiz.findAll();

  function increment(value) {
    return value + 1;
  }

  function handleClick_PreviousQuestion() {
    $quiz.activeQactiveQuestion = (($activeQuestion + 8) % 10) + 1;
  }
  function handleClick_NextQuestion() {
    $activeQuestion = ($activeQuestion % 10) + 1;
  }
</script>

<template>
  <h1>Questions</h1>

  <dl>
    <dt>Active Question</dt>
    <dd>{$activeQuestion}</dd>
  </dl>

  <div class="buttons">
    <button
      class="btn btn-outline-secondary"
      on:click="{handleClick_PreviousQuestion}"
    >
      &lt; Previous Question
    </button>

    <button class="btn btn-primary" on:click="{handleClick_NextQuestion}">
      Next Question &gt;
    </button>
  </div>

  <table class="table table-striped">
    <thead>
      <th class="question-text">Text</th>
      <th class="question-active">Active</th>
    </thead>
    <tbody>
      {#each $questions as question}
      <tr>
        <td class="question-text">
          {question.text}
        </td>
        <td class="question-active">
          {#if question.questionIndex == $activeQuestion} Active {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</template>

<svelte:component this="{$activeQuestionPage}" />
