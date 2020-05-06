<script>
  import Questions from 'src/collections/Questions';
  import Quizzes from 'src/collections/Quizzes';
  import {
    of as rxOf
  } from 'rxjs';
  import {
    map
  } from 'rxjs/operators';
  import debounce from 'lodash/debounce';

  export let params = {};

  $: console.log(params.quizId);

  let quizId = params.quizId;
  let questionId = params.questionId;

  let quiz = Quizzes.find(quizId);
  $: question = $quiz ? $quiz.findQuestion(questionId) : rxOf(null);

  $: console.log({
    $question
  });


  const handleInput = debounce(
    function(event) {
      // $question.text = event.target.value;
      Questions.updateBelongingTo($quiz, $question.id, {
        text: event.target.value
      });
    },
    300
  );

</script>

<template>
  {#if $question}


    <input class="form-control" value={$question.text} on:input={handleInput}>

  {/if}  
</template>
