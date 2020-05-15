<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3

  import {
    onMount,
    setContext
  } from 'svelte';
  import {
    authState
  } from 'rxfire/auth';
  // import Router from 'svelte-spa-router'
  import {
    default as Router,
    location,
    querystring
  } from 'svelte-spa-router';
  import qs from 'qs';


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


  import QuestionsPage from 'src/pages/questions.svelte';
  import QuizzesPage from 'src/pages/quizzes.svelte';
  import QuizPage from 'src/pages/quiz.svelte';
  import QuestionPage from 'src/pages/question.svelte';
  import SessionPage from 'src/pages/session.svelte';

  import 'src/services/firebase'
  import {
    auth,
    googleProvider
  } from 'src/services/firebase';

  import Question from 'src/models/Question.js';
  import Quiz from 'src/models/Quiz.js';
  import session from 'src/stores/session.js';

  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({
      user
    });
  });

  const routes = {
    // Exact path
    '/': QuizzesPage,
    "/quizzes/:quizId/questions/:questionId": QuestionPage,
    "/quizzes/:quizId": QuizPage,
    "/questions": QuestionsPage,
    "/questions/1": Question01Page,
    "/questions/2": Question02Page,
    "/questions/3": Question03Page,
    "/questions/4": Question04Page,
    "/questions/5": Question05Page,
    "/questions/6": Question06Page,
    "/session": SessionPage,
    '*': QuizzesPage,
  };

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



  onMount(function() {
    signOut = auth.onAuthStateChanged;
  });

  let quiz = Quiz.find('default');
  $: activeQuestion = $quiz ? $quiz.activeQuestion : 1;
  $: page = pages.find((page) => page.questionIndex === activeQuestion);
  $: params = qs.parse($querystring);
  $: loggedIn = params.loggedIn;

</script>

<style global lang="scss">
  @import "styles/global.scss";

</style>

<!-- template>
  <div class="container-fluid">
    <Router {routes} />
  </div>
</template -->

<template>
  <div class="container-fluid">
    {#if loggedIn }
      <QuestionsPage />
      {:else}
      {#if page}
      <svelte:component this={page.component} />
      {/if}
    {/if}
  </div>
</template>
