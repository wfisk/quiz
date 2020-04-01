<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  import Router from 'svelte-spa-router'

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
  import QuestionsPage from 'src/pages/questions.svelte';

  import 'src/services/firebase'
  import { auth, googleProvider } from 'src/services/firebase';

  import Question from 'src/collections/Question.js';
  import Quiz from 'src/collections/Quiz.js';
  import session from 'src/stores/session.js';

  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({user});
  }); 

  const routes = {
    // Exact path
    '/':                  QuestionsPage,
    "/questions":         QuestionsPage,
    "/questions/1":       Question01Page,
    "/questions/2":       Question02Page,
    "/questions/3":       Question03Page,
    "/questions/4":       Question04Page,
    "/questions/5":       Question05Page,
    "/questions/6":       Question06Page,
    "/questions/7":       Question07Page,
    "/questions/8":       Question08Page,
    "/questions/9":       Question09Page,
    "/questions/10":      Question10Page,
    '*':                  QuestionsPage,
  };

  const pages = [
		{ questionIndex:  1, component: Question01Page },
		{ questionIndex:  2, component: Question02Page },
		{ questionIndex:  3, component: Question03Page },
		{ questionIndex:  4, component: Question04Page },
		{ questionIndex:  5, component: Question05Page },
		{ questionIndex:  6, component: Question06Page },
		{ questionIndex:  7, component: Question07Page },
		{ questionIndex:  8, component: Question08Page },
		{ questionIndex:  9, component: Question09Page },
		{ questionIndex: 10, component: Question10Page },
	];



  onMount( function(){
    signOut = auth.onAuthStateChanged;
  });

  let quizzes = Quiz.findAll();
  $: quiz = $quizzes[0];
  $: page = pages.find( (page) => page.questionIndex === ( quiz ? quiz.activeQuestion : 1 ) );
</script>

<style global lang="scss" >
  @import "styles/global.scss"; 
</style>

<template>
  <div class="container-fluid">
    <!-- svelte:component this={page.component}/ -->
    <QuestionsPage />
  </div>
</template>


