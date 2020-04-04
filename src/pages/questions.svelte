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
  import Question08Page from 'src/pages/question_08.svelte';
  import Question09Page from 'src/pages/question_09.svelte';
  import Question10Page from 'src/pages/question_10.svelte';
  import Question11Page from 'src/pages/question_11.svelte';
  import Question12Page from 'src/pages/question_12.svelte';
  import Question13Page from 'src/pages/question_13.svelte';
  import Question14Page from 'src/pages/question_14.svelte';
  import Question15Page from 'src/pages/question_15.svelte';
  import Question16Page from 'src/pages/question_16.svelte';
  import Question17Page from 'src/pages/question_17.svelte';
  import Question18Page from 'src/pages/question_18.svelte';
  import Question19Page from 'src/pages/question_19.svelte';
  import Question20Page from 'src/pages/question_20.svelte';
  import QuestionsPage from 'src/pages/questions.svelte';
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
      component: Question08Page
    },
    {
      questionIndex: 9,
      component: Question09Page
    },
    {
      questionIndex: 10,
      component: Question10Page
    },
    {
      questionIndex: 11,
      component: Question11Page
    },
    {
      questionIndex: 12,
      component: Question12Page
    },
    {
      questionIndex: 13,
      component: Question13Page
    },
    {
      questionIndex: 14,
      component: Question14Page
    },
    {
      questionIndex: 15,
      component: Question15Page
    },
    {
      questionIndex: 16,
      component: Question16Page
    },
    {
      questionIndex: 17,
      component: Question17Page
    },
    {
      questionIndex: 18,
      component: Question18Page
    },
    {
      questionIndex: 19,
      component: Question19Page
    },
    {
      questionIndex: 20,
      component: Question20Page
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
