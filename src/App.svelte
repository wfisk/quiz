<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3
  export let name;

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
  import Question07Page from 'src/pages/question_07.svelte';
  import Question08Page from 'src/pages/question_08.svelte';
  import Question09Page from 'src/pages/question_09.svelte';
  import Question10Page from 'src/pages/question_10.svelte';
  import Question11Page from 'src/pages/question_11.svelte';
  import Question12Page from 'src/pages/question_12.svelte';
  import Question13Page from 'src/pages/question_13.svelte';
  import Question14Page from 'src/pages/question_14.svelte';
  import Question15Page from 'src/pages/question_15.svelte';
  import Question16Page from 'src/pages/question_16.svelte';
  import Question17Page from 'src/pages/question_17.svelte';
  import Question18Page from 'src/pages/question_18.svelte';
  import Question19Page from 'src/pages/question_19.svelte';
  import Question20Page from 'src/pages/question_20.svelte';


  import QuestionsPage from 'src/pages/questions.svelte';

  import 'src/services/firebase'
  import {
    auth,
    googleProvider
  } from 'src/services/firebase';

  import Question from 'src/collections/Question.js';
  import Quiz from 'src/collections/Quiz.js';
  import session from 'src/stores/session.js';

  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({
      user
    });
  });

  const routes = {
    // Exact path
    '/': QuestionsPage,
    "/questions": QuestionsPage,
    "/questions/1": Question01Page,
    "/questions/2": Question02Page,
    "/questions/3": Question03Page,
    "/questions/4": Question04Page,
    "/questions/5": Question05Page,
    "/questions/6": Question06Page,
    "/questions/7": Question07Page,
    "/questions/8": Question08Page,
    "/questions/9": Question09Page,
    "/questions/10": Question10Page,
    '*': QuestionsPage,
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
      component: Question07Page
    },
    {
      questionIndex: 8,
      component: Question08Page
    },
    {
      questionIndex: 9,
      component: Question09Page
    },
    {
      questionIndex: 10,
      component: Question10Page
    },
    {
      questionIndex: 11,
      component: Question11Page
    },
    {
      questionIndex: 12,
      component: Question12Page
    },
    {
      questionIndex: 13,
      component: Question13Page
    },
    {
      questionIndex: 14,
      component: Question14Page
    },
    {
      questionIndex: 15,
      component: Question15Page
    },
    {
      questionIndex: 16,
      component: Question16Page
    },
    {
      questionIndex: 17,
      component: Question17Page
    },
    {
      questionIndex: 18,
      component: Question18Page
    },
    {
      questionIndex: 19,
      component: Question19Page
    },
    {
      questionIndex: 20,
      component: Question20Page
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

  $: console.log(activeQuestion);
  $: console.log(page);

</script>

<style global lang="scss">
  @import "styles/global.scss";

</style>

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
