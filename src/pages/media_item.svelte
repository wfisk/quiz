<script>
  import {
    of as rxOf
  } from 'rxjs';

  import MediaItemEditor from 'src/components/editors/media_item_editor.svelte';
  import MediaItemPreview from 'src/components/previews/media_item_preview.svelte';
  import Quiz from 'src/models/Quiz';

  export let params = {};

  let quiz = Quiz.find(params.quizId);
  $: question = $quiz ? $quiz.findQuestion(params.questionId) : rxOf(null);
  $: mediaItem = $question ? $question.findMediaItem(params.mediaItemId) : rxOf(null);

  $: console.log({
    $mediaItem
  });

</script>

<template>
  {#if $mediaItem}
    <div class="row">
      <div class="col border-right bg-light">
        <a href="#/">Quizzes</a>
        /
        <a href="#/quizzes/{$quiz.id}">{$quiz.name}</a>
        /
        <a href="#/quizzes/{$quiz.id}/questions/{$question.id}" class="question-text">{$question.text}</a>
        <MediaItemEditor {mediaItem} />
      </div>
      <div class="col">
        <MediaItemPreview {mediaItem} />
      </div>
    </div>
  {/if}  
</template>


<style>
  .question-text {
    max-width: 24ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  </style>
