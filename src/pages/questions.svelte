<script>
  import { onMount } from 'svelte';
  import { collectionData } from 'rxfire/firestore';
  import { groupBy, map, startWith } from 'rxjs/operators';
  import { send, receive } from 'src/transitions/crossfade.js';
  
  import Question from 'src/collections/Question.js';
  import { firestore } from 'src/services/firebase';


  let questions = Question.findAll();

  $: console.log ( $questions );

</script>

<style>


</style>

<template>
  <h1>Questions</h1>

  <table class="table">
    <thead>
      <th class="question-text">Text</th>
    </thead>
    <tbody>
      {#each $questions as question}
        <tr>
          <td class="question-text">
            {question.text}
          </td>
        </tr>
      {/each}  
    </tbody>
  </table>
</template>

