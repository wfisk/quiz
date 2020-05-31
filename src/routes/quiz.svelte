<script>
  import debounce from 'lodash/debounce';

  import {
    EMPTY,
    of as rxOf
  } from 'rxjs';
  import {
    map
  } from 'rxjs/operators';

  import Fa from 'svelte-fa'
  import {
    faCheck
  } from '@fortawesome/free-solid-svg-icons/faCheck';
  import {
    faTimes
  } from '@fortawesome/free-solid-svg-icons/faTimes';
  import {
    faTrashAlt
  } from '@fortawesome/free-regular-svg-icons/faTrashAlt';

  import QuestionPreview from 'src/components/previews/question_preview.svelte';
  import Question from 'src/models/Question';
  import Quiz from 'src/models/Quiz';
  import {
    loggedIn,
    signOut
  } from 'src/services/firebase';



  export let params = {};
  let quiz = Quiz.find(params.quizId);

  let activeQuestionIndex;
  let questions;
  let activeQuestion;

  $: activeQuestionId = $quiz ? ($quiz.activeQuestionId || null) : null;
  $: quizLoaded = !!$quiz;
  $: questions = quizLoaded ? loadQuestions() : EMPTY;
  $: activeQuestion = ($quiz && activeQuestionId) ? $quiz.findQuestion(activeQuestionId) : rxOf(null)
  $: activeQuestionIndex = $activeQuestion ? ($activeQuestion.questionIndex || 0) : 0;

  $: console.log({
    quiz: $quiz,
    questions: $questions
  });

  function loadQuestions() {
    return $quiz.questions();
  }

  // Events
  function handleAddQuestionClick() {
    if ($quiz) {
      $quiz.addQuestion({
        quizId: $quiz.id,
        questionIndex: $questions.length + 1,
        text: 'Question ' + ($questions.length + 1)
      });
    }
  }

  function handlePreviousQuestionClick() {
    let newQuestionIndex = ((activeQuestionIndex + 10) % 12) + 1;
    let newQuestion = $questions.find(it => it.questionIndex === newQuestionIndex);
    if (newQuestion) {
      $quiz.update({
        activeQuestionId: newQuestion.id
      });

    }
  }

  function handleNextQuestionClick() {
    let newQuestionIndex = (activeQuestionIndex % 12) + 1;
    let newQuestion = $questions.find(it => it.questionIndex === newQuestionIndex);
    if (newQuestion) {
      $quiz.update({
        activeQuestionId: newQuestion.id
      });
    }
  }


  const handleQuestionAnsweredChange = debounce(
    function(event, question) {
      question.update({
        reveal_answer: event.target.checked
      });
    },
    300
  );


  function handleDeleteQuestionClick(event, question) {
    question.delete();
  }

</script>

<template>
  {#if $quiz}
    {#if $loggedIn}
      <a href="#/">Quizzes</a>

      <h1>Quiz - {$quiz.name}</h1>

      <div class="buttons">
        <button class="btn btn-outline-secondary" on:click="{handlePreviousQuestionClick}">
          &lt; Previous Question
        </button>
    
        <button class="btn btn-primary" on:click="{handleNextQuestionClick}">
          Next Question &gt;
        </button>
      </div>

      <table class="table table-striped table-fixed">
        <thead>
          <th class="question-index">Index</th>
          <th class="question-text">Text</th>
          <th class="question-answered">Answrd</th>
          <th class="question-active">Active</th>
          <th class="question-delete">Delete?</th>
        </thead>
        <tbody>
          {#each $questions as question (question.id)}
          <tr>
            <td class="question-number">
              <a href="#/quizzes/{$quiz.id}/questions/{question.id}">Question {question.questionIndex}</a>
            </td>
            <td class="question-text">
              {question.text}
            </td>
            <td class="question-answered">
              <div class="form-group form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="question-reveal-answer" 
                  checked={question.reveal_answer} 
                  on:change={ (event) => handleQuestionAnsweredChange( event, question )}
                 >
                <label class="form-check-label" for="question-reveal-answer">Answrd</label>
              </div>
            </td>
            <td class="question-active">
              {#if question.id == activeQuestionId} Active {/if}
            </td>
            <td class="question-delete">
              <button class="btn btn-sm btn-light" on:click={(event)=>handleDeleteQuestionClick(event,question)}>
                <Fa icon={faTrashAlt} />
              </button>
            </td>
          {/each}
        </tbody>
      </table>


      <button class="btn btn-primary" on:click={handleAddQuestionClick}>Add Question</button>

    {:else}  
      {#if $activeQuestion}
        <QuestionPreview question={activeQuestion}/>
      {/if}
    {/if}    
  {/if}  
</template>



<style>
  table-fixed {
    table-layout: fixed;
  }

  .question-index { width: 12.5; }
  .question-text { width: 50%; }
  .question-answered { width: 12.5%; }
  .question-active { width: 12.5%; }
  .question-delete { width: 12.5%; }



  td.question-text {
    max-width: 24ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .form-check,
    .form-check .form-check-input,
    .form-check .form-check-label {
      cursor: pointer;  
    }


</style>
