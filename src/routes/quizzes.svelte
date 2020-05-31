<script>
  import {
    map
  } from 'rxjs/operators';
  import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from "sveltestrap";

  import currentUser from "src/stores/current-user.js";
  import Quiz from 'src/models/Quiz';



  let modalIsOpen = false;
  let mediaType;
  let newQuizId;
  let newQuizName;
  let quizzes = Quiz.all({
    order: 'name'
  });
  $: console.log({
    currentUser: $currentUser
  });

  function handleAddQuizCancel() {
    modalIsOpen = false;
  }

  async function handleAddQuizConfirm() {
    Quiz.add({
      id: newQuizId,
      name: newQuizName,
      owner: {
        uid: $currentUser.uid,
        displayName: $currentUser.displayName
      }
    });
    modalIsOpen = false;
  }

</script>

<style>
  .quiz-name {
    width: 25%;
  }

  .quiz-id {
    width: 33.333%;
  }

  .quiz-owner {
    width: 25%;
  }

  .quiz-active-question {
    width: 16.667%;
  }

</style>

<template>
  <h1>Quizzes</h1>

  <table class="table table-striped">
    <thead>
      <th class="quiz-name">Name</th>
      <th class="quiz-id">Quiz Id</th>
      <th class="quiz-owner">Owner</th>
      <th class="quiz-active-question">Active Question</th>
    </thead>
    <tbody>
      {#each $quizzes as quiz}
      <tr>
        <td class="quiz-name">
          <a href="#/quizzes/{quiz.id}">{quiz.name}</a>
        </td>
        <td class="quiz-id">
          {quiz.id}
        </td>
        <td class="quiz-owner">
          {quiz.owner && quiz.owner.displayName}
        </td>
        <td class="quiz-active-question">
          {quiz.activeQuestion}
        </td>
      {/each}
    </tbody>
  </table>

  <Button color="success" on:click={() => modalIsOpen = true}>
    Add Quiz
  </Button>


  <Modal isOpen={modalIsOpen} >
    <ModalHeader toggle={handleAddQuizCancel}>Add Quiz</ModalHeader>
    <ModalBody>
      <div class="form-group">
        <label for="quiz-id">Quiz Id</label>
        <input class="form-control" id="quiz-id" bind:value={newQuizId}>
      </div>
      <div class="form-group">
        <label for="quiz-name">Name</label>
        <input class="form-control" id="quiz-name" bind:value={newQuizName}>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={handleAddQuizConfirm}>
        OK
      </Button>
      <Button color="secondary" on:click={handleAddQuizCancel}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  


</template>
