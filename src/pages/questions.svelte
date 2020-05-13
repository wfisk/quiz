<script>
  import Question from "src/models/Question.js";
  import Quiz from "src/models/Quiz.js";
  import Question01Page from 'src/pages/question_01.svelte';
  import Question02Page from 'src/pages/question_02.svelte';
  import Question03Page from 'src/pages/question_03.svelte';
  import Question04Page from 'src/pages/question_04.svelte';
  import Question05Page from 'src/pages/question_05.svelte';
  import Question06Page from 'src/pages/question_06.svelte';
  import Answer01Page from 'src/pages/answer_01.svelte';
  import Answer02Page from 'src/pages/answer_02.svelte';
  import Answer03Page from 'src/pages/answer_03.svelte';
  import Answer04Page from 'src/pages/answer_04.svelte';
  import Answer05Page from 'src/pages/answer_05.svelte';
  import Answer06Page from 'src/pages/answer_06.svelte';

  import question01Option from 'src/stores/question_01_option.js';
  import question02Option from 'src/stores/question_02_option.js';
  import question03Option from 'src/stores/question_03_option.js';
  import question04Option from 'src/stores/question_04_option.js';
  import question05Option from 'src/stores/question_05_option.js';
  import question06Option from 'src/stores/question_06_option.js';

  import answer01Visible from 'src/stores/answer_01_visible.js';
  import answer02Visible from 'src/stores/answer_02_visible.js';
  import answer03Visible from 'src/stores/answer_03_visible.js';
  import answer04Visible from 'src/stores/answer_04_visible.js';
  import answer05Visible from 'src/stores/answer_05_visible.js';
  import answer06Visible from 'src/stores/answer_06_visible.js';

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
      component: Answer01Page
    },
    {
      questionIndex: 8,
      component: Answer02Page
    },
    {
      questionIndex: 9,
      component: Answer03Page
    },
    {
      questionIndex: 10,
      component: Answer04Page
    },
    {
      questionIndex: 11,
      component: Answer05Page
    },
    {
      questionIndex: 12,
      component: Answer06Page
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
    let value = (($quiz.activeQuestion + 10) % 12) + 1;
    Quiz.updateById('default', {
      activeQuestion: value
    });
  }

  function handleClick_NextQuestion() {
    let value = ($quiz.activeQuestion % 12) + 1;
    Quiz.updateById('default', {
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
      <th class="question-option">Option</th>
      <th class="question-answered">Answered</th>
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
        <td class="question-option">
          {#if question.questionIndex == 1} 
            <input type="number" bind:value={$question01Option}>
          {/if}
          {#if question.questionIndex == 2} 
            <input type="number" bind:value={$question02Option}>
          {/if}
          {#if question.questionIndex == 3} 
            <input type="number" bind:value={$question03Option}>
          {/if}
          {#if question.questionIndex == 4} 
            <input type="number" bind:value={$question04Option}>
          {/if}
          {#if question.questionIndex == 5} 
            <input type="number" bind:value={$question05Option}>
          {/if}
          {#if question.questionIndex == 6} 
            <input type="number" bind:value={$question06Option}>
          {/if}
        </td>
        <td class="question-answered">
          {#if question.questionIndex == 7} 
            <input type="checkbox" bind:value={$answer01Visible}>
          {/if}
          {#if question.questionIndex == 8} 
            <input type="checkbox" bind:value={$answer02Visible}>
          {/if}
          {#if question.questionIndex == 9} 
            <input type="checkbox" bind:value={$answer03Visible}>
          {/if}
          {#if question.questionIndex == 10} 
            <input type="checkbox" bind:value={$answer04Visible}>
          {/if}
          {#if question.questionIndex == 11} 
            <input type="checkbox" bind:value={$answer05Visible}>
          {/if}
          {#if question.questionIndex == 12} 
            <input type="checkbox" bind:value={$answer06Visible}>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</template>

<svelte:component this="{page.component}" />
