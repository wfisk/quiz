<script>
  import Question from "src/collections/Question.js";
  import Quiz from "src/collections/Quiz.js";
  import Question01Page from 'src/pages/question_01.svelte';
  import Question02Page from 'src/pages/question_02.svelte';
  import Question03Page from 'src/pages/question_03.svelte';
  import Question04Page from 'src/pages/question_04.svelte';
  import Question05Page from 'src/pages/question_05.svelte';
  import Question06Page from 'src/pages/question_06.svelte';
  import Question07Page from 'src/pages/question_07.svelte';
  import Answer01Page from 'src/pages/answer_01.svelte';
  import Answer02Page from 'src/pages/answer_02.svelte';
  import Answer03Page from 'src/pages/answer_03.svelte';
  import Answer04Page from 'src/pages/answer_04.svelte';
  import Answer05Page from 'src/pages/answer_05.svelte';
  import Answer06Page from 'src/pages/answer_06.svelte';
  import Answer07Page from 'src/pages/answer_07.svelte';

  const pages = [{
      questionIndex: 1,
      component: Question01Page
    },
    {
      questionIndex: 2,
      component: Question02Page
    },
    {
      questionIndex: 3,
      component: Question03Page
    },
    {
      questionIndex: 4,
      component: Question04Page
    },
    {
      questionIndex: 5,
      component: Question05Page
    },
    {
      questionIndex: 6,
      component: Question06Page
    },
    {
      questionIndex: 7,
      component: Question07Page
    },
    {
      questionIndex: 8,
      component: Answer01Page
    },
    {
      questionIndex: 9,
      component: Answer02Page
    },
    {
      questionIndex: 10,
      component: Answer03Page
    },
    {
      questionIndex: 11,
      component: Answer04Page
    },
    {
      questionIndex: 12,
      component: Answer05Page
    },
    {
      questionIndex: 13,
      component: Answer06Page
    },
    {
      questionIndex: 14,
      component: Answer07Page
    },
  ];
  let page = pages[0];


  // Question Observable
  let questions = Question.findAll();
  let quiz = Quiz.find('default');
  $: activeQuestion = $quiz ? $quiz.activeQuestion : 1;
  $: page = pages.find((page) => page.questionIndex === activeQuestion);
  $: console.log(activeQuestion);


  function handleClick_PreviousQuestion() {
    let value = (($quiz.activeQuestion + 18) % 20) + 1;
    Quiz.update('default', {
      activeQuestion: value
    });
  }

  function handleClick_NextQuestion() {
    let value = ($quiz.activeQuestion % 20) + 1;
    Quiz.update('default', {
      activeQuestion: value
    });
  }

</script>

<template>
  <h1>Questions</h1>

  <dl>
    <dt>Active Question</dt>
    <dd>{activeQuestion}</dd>
  </dl>

  <div class="buttons">
    <button class="btn btn-outline-secondary" on:click="{handleClick_PreviousQuestion}">
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
          {#if question.questionIndex == activeQuestion} Active {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</template>

<svelte:component this="{page.component}" />
