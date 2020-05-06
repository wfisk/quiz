import { collectionData, docData } from 'rxfire/firestore';
import { bufferCount, groupBy, map, startWith } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs'

import Collection from 'src/collections/Collection';
import { firestore } from 'src/services/firebase';

export default class Question extends Collection {
  static collectionPath = 'questions';
  // Question.collectionRef = firestore.collection( Question.collectionPath );

  constructor() {
    super();
  }

  static addTo( parent, props ) {
    if ( !parent ) {
      return;
    }

    let collectionPath = parent.documentPath() + '/' + this.collectionPath;
    const collectionRef = firestore.collection( collectionPath );
    collectionRef.add( props );
  }

  static delete( id ) {
    firestore.collection( this.collectionPath ).doc( id ).delete();
  }

  static findBelongingTo( parent, id ) {
    if ( !parent ) {
      return of( null );
    }

    let documentPath = parent.documentPath() + '/' + this.collectionPath + '/' + id;
    let documentRef = firestore.doc( documentPath );

    let result = docData( documentRef, 'id' ).pipe( startWith( null ) );
    result.set = result.next

    return result;
    // let doc = await docRef.get();
    // return { id, ...doc.data() };
  }

  static findAllBelongingTo( parent ) {
    if ( !parent ) {
      return EMPTY;
    }

    let collectionPath = parent.documentPath() + '/' + this.collectionPath;
    const collectionRef = firestore.collection( collectionPath );
    return collectionData( collectionRef, 'id' ).pipe(
      map( questions => questions.sort( ( a, b ) => a.questionIndex - b.questionIndex ) ),
      startWith( [ { text: "one" } ] )
    );
  }

  static findAllByQuizId( quizId ) {
    const collectionRef = firestore.collection( this.collectionPath );
    return collectionData( collectionRef.where( 'quizId', '==', quizId ), 'id' ).pipe(
      map( questions => questions.sort( ( a, b ) => a.questionIndex - b.questionIndex ) ),
      startWith( [ { text: "one" } ] )
    );
  }

  static findAllInGroupsOfThree() {
    const collectionRef = firestore.collection( this.collectionPath );
    return collectionData( collectionRef, 'id' ).pipe(
      startWith( [] ),
      map( ( it, index ) => {
        it.index = index;
        return it;
      } ),
      groupBy( it => it.index )
    );
  }

  static update( id, props ) {
    firestore.collection( this.collectionPath ).doc( id ).update( props );
  }

  static updateBelongingTo( parent, id, props ) {
    // firestore.collection( this.collectionPath ).doc( id ).update( props );

    let documentPath = parent.documentPath() + '/' + this.collectionPath + '/' + id;
    let documentRef = firestore.doc( documentPath );
    documentRef.update( props );

  }

}