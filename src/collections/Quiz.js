import { collectionData, docData } from 'rxfire/firestore';
import { filter, groupBy, map, startWith } from 'rxjs/operators';

import Document from 'src/collections/Document';
import { firestore } from 'src/services/firebase';
import Questions from 'src/collections/Questions';

export default class Quiz extends Document {
  static collectionPath = 'quizzes';

  constructor( data ) {
    super();
    for ( let key in data ) {
      this[ key ] = data[ key ];
    }
  }

  documentPath() {
    return this.constructor.collectionPath + '/' + this.id;
  }

  questions() {
    return Questions.findAllBelongingTo( this );
  }

  findQuestion( id ) {
    return Questions.findBelongingTo( this, id );
  }

  addQuestion( props ) {
    Questions.addTo( this, props );
  }

  static update( id, props ) {
    firestore.collection( this.collectionPath ).doc( id ).update( props );
  }

}

// Quiz.collectionPath = 'quizzes';
// Quiz.collectionRef = firestore.collection( Quiz.collectionPath );