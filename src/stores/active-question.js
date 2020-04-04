import { readable } from 'svelte/store';
import Question from 'src/collections/Question.js';
import Quiz from 'src/collections/Quiz.js';

// let activeQuestion = writable(
//   1, 
//   // Handle Subscribe
//   function( set ) {
//     console.log('got a subscriber');
//     // set(100);
// 	  return function(){ 
//       console.log('no more subscribers');
//     };
//   }
// );

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