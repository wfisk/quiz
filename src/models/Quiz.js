import Model from 'src/models/Model';
import Question from 'src/models/Question';

export default class Quiz extends Model {
  static collectionPath = 'quizzes';

  addQuestion( props ) {
    Question.add( props, this );
  }

  findQuestion( id ) {
    return Question.find( id, this );
  }

  questions() {
    return Question.findAll( { parent: this, order: 'questionIndex' } );
  }


}