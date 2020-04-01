<script>
  import { onMount } from "svelte";
  import { fromEvent, interval } from "rxjs";
  import { map, sample } from "rxjs/operators";
  import Question from "src/collections/Question.js";

  // Question Observable
  let questions = Question.findAll();

  //emit value every 1s
  const source = interval(1000);
  //sample last emitted value from source every 2s
  const example = source.pipe(sample(interval(2000)));
  //output: 2..4..6..8..
  // const subscribe = example.subscribe((val) => console.log(val));

  let button = null;
  let buttonLog = null;

  onMount(function () {
    button = document.querySelector("#btn-test");
    //create observable that emits click events
    const buttonClick$ = fromEvent(button, "click");
    //map to string with given event timestamp
    buttonLog = buttonClick$.pipe(
      map((event) => `Event time: ${event.timeStamp}`)
    );
  });
  console.log(button);

  //output (example): 'Event time: 7276.390000000001'

  $: console.log($buttonLog);

  // $: console.log($questions);
</script>

<style>
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>

<template>
  <h1>Questions</h1>

  <div class="buttons">
    <button id="btn-test">
      Click Me.
    </button>
  </div>

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
