<script>
  import Question from 'src/models/Question';
  import Quiz from 'src/models/Quiz';
  import QuestionEditor from 'src/components/editors/question_editor.svelte';
  import QuestionPreview from 'src/components/previews/question_preview.svelte';
  import {
    of as rxOf
  } from 'rxjs';
  import {
    map
  } from 'rxjs/operators';


  export let params = {};

  let quizId = params.quizId;
  let questionId = params.questionId;

  let quiz = Quiz.find(quizId);
  $: question = $quiz ? $quiz.findQuestion(questionId) : rxOf(null);

</script>

<template>
  {#if $question}
    <div class="row">
      <div class="col-md-6 border-right bg-light">
        <a href="#/">Quizzes</a>
        /
        <a href="#/quizzes/{$quiz.id}">{$quiz.name}</a>
      <QuestionEditor {quiz} {question} />
      </div>
      <div class="col-md-6">
        <QuestionPreview {question} />
      </div>
    </div>
  {/if}  
</template>
