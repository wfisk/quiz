<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3

  import {
    onMount,
    setContext
  } from 'svelte';
  import {
    get
  } from 'svelte/store';
  import {
    authState
  } from 'rxfire/auth';
  import {
    default as Router,
    location,
    querystring,
    wrap,
    replace,
    push
  } from 'svelte-spa-router';
  import qs from 'qs';
  import Headroom from "svelte-headroom";
  import Fa from 'svelte-fa';
  import {
    faHome
  } from '@fortawesome/free-solid-svg-icons/faHome';
  import {
    faPowerOff
  } from '@fortawesome/free-solid-svg-icons/faPowerOff';

  import {
    loggedIn,
    signOut
  } from 'src/services/firebase';


  import MediaItemPage from 'src/routes/media_item.svelte';
  import NotFoundPage from 'src/routes/not_found.svelte';
  import QuestionPage from 'src/routes/question.svelte';
  import QuizPage from 'src/routes/quiz.svelte';
  import QuizzesPage from 'src/routes/quizzes.svelte';
  import SessionPage from 'src/routes/session.svelte';

  import 'src/services/firebase'
  import {
    auth,
    googleProvider
  } from 'src/services/firebase';

  import Question from 'src/models/Question.js';
  import Quiz from 'src/models/Quiz.js';
  import session from 'src/stores/session.js';

  // let signOut = null;

  // const unsubscribe = authState(auth).subscribe(user => {
  //   session.set({
  //     user
  //   });
  // });

  let userLoggedIn;
  $: userLoggedIn = $loggedIn;

  const routes = {
    // Exact path
    '/': wrap(QuizzesPage, (detail) => userLoggedIn),
    "/quizzes/:quizId/questions/:questionId/media-items/:mediaItemId": wrap(MediaItemPage, (detail) => userLoggedIn),
    "/quizzes/:quizId/questions/:questionId": wrap(QuestionPage, (detail) => userLoggedIn),
    "/quizzes/:quizId": QuizPage,
    "/quizzes": wrap(QuizzesPage, (detail) => userLoggedIn),
    "/session": SessionPage,
    '*': NotFoundPage,
  };


  function handleHome() {
    push('/');
  }

  async function handleLogout() {
    await signOut();
    push('/session');
  }

  function handleRouterFailed(event) {
    console.error({
      event
    });
    replace('/session');
  }

</script>


<template>
  {#if $loggedIn}
    <Headroom duration="350ms" offset={50} tolerance={5} >
      <header class="d-flex justify-content-between">
        <div>
          <button class="btn btn-sm btn-light" on:click={handleHome}>
            <Fa icon={faHome} />
          </button>
        </div>
        <div>
          <button class="btn btn-sm btn-light" on:click={handleLogout}>
            <Fa icon={faPowerOff} />
          </button>
        </div>
      </header>
    </Headroom>
  {/if}

  <div class="container-fluid">
    {#if $loggedIn == null }
      <p>
        Loading...
      </p>
    {:else}
        <Router {routes} on:conditionsFailed={handleRouterFailed} />
    {/if} 
  </div>
</template>


<style global lang="scss">
  @import "styles/global.scss";

  body>div:first-child {
    z-index: 1000;
  }

  header {
    background-color: darkblue;
    height: 60px;
    opacity: 0.2;
    z-index: 1;
  }

  .container-fluid {
    padding-top: 60px;
  }

</style>
