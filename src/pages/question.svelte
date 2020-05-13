<script>
  import Question from 'src/models/Question';
  import Quiz from 'src/models/Quiz';
  import QuestionEditor from 'src/components/question_editor.svelte';
  import QuestionPreview from 'src/components/question_preview.svelte';
  import {
    of as rxOf
  } from 'rxjs';
  import {
    map
  } from 'rxjs/operators';


  export let params = {};

  $: console.log(params.quizId);

  let quizId = params.quizId;
  let questionId = params.questionId;

  let quiz = Quiz.find(quizId);
  $: question = $quiz ? $quiz.findQuestion(questionId) : rxOf(null);

  $: console.log({
    $question
  });

</script>

<template>
  {#if $question}
    <div class="row">
      <div class="col border-right bg-light">
        <QuestionEditor {quiz} {question} />
      </div>
      <div class="col">
        <QuestionPreview {question} />
      </div>
    </div>
  {/if}  
</template>
