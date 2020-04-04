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
    console.log('got a subscriber');

    let quizzes = Quiz.findAll();
    let unsubscribeQuizzes = quizzes.subscribe( function( values ) {
      let quiz = values[0];
      let activeQuestion = quiz ? quiz.activeQuestion : 1;
      set( activeQuestion );
    });
	  return function(){ 
      unsubscribeQuizzes();
    };
  }
);


export default activeQuestion;

