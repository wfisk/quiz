import Model from 'src/models/Model';
import Question from 'src/models/Question';

export default class Quiz extends Model {
  static getCollectionId() {
    return 'quizzes';
  }

  addQuestion( props ) {
    Question.add( props, this );
  }

  findQuestion( id ) {
    return Question.find( id, { parent: this } );
  }

  questions() {
    return Question.all( { parent: this, order: 'questionIndex' } );
  }


}