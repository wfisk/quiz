import { writable } from 'svelte/store';
import activeQuestion from "src/stores/active-question.js";
import Question from 'src/collections/Question.js';
import Quiz from 'src/collections/Quiz.js';

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



let activeQuestionPage = writable(
  Question01Page, 
  // Handle Subscribe
  function( set ) {
    console.log('got a subscriber');

    let quizzes = Quiz.findAll();
    let unsubscribeQuizzes = quizzes.subscribe( function( values ) {
      let quiz = values[0];
      let activeQuestion = quiz ? quiz.activeQuestion : 1;
      let activePage = pages.find( (it) => it.questionIndex === activeQuestion );
      set( activePage.component );
    });
	  return function(){ 
      unsubscribeQuizzes();
    };
  }
);

export default activeQuestionPage;

