import { readable } from 'svelte/store';
import Question from 'src/models/Question.js';
import Quiz from 'src/models/Quiz.js';

let activeQuestion = readable(
  1,
  // Handle Subscribe
  function( set ) {
    console.log( 'got a subscriber' );

    // let quizzes = Quiz.findAll();
    let quiz = Quiz.find( 'default' );

    let unsubscribeQuiz = quiz.subscribe( function( value ) {
      let quiz = value;
      let activeQuestion = quiz ? quiz.activeQuestion : 1;
      set( activeQuestion );
    } );
    return function() {
      unsubscribeQuiz();
    };
  }
);


export default activeQuestion;