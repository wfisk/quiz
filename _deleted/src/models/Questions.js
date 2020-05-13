import { collectionData, docData } from 'rxfire/firestore';
import { bufferCount, groupBy, map, startWith } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs'

import Collection from 'src/models/Collection';
import { firestore } from 'src/services/firebase';

export default class Questions extends Collection {
  static collectionPath = Questions.collectionPath;
  static itemClass = Question;


  static add( props, parent = null ) {
    let collectionPath = this.collectionPath;
    if ( parent ) {
      collectionPath = parent.documentPath() + '/' + collectionPath;
    }
    const collectionRef = firestore.collection( collectionPath );
    collectionRef.add( props );
  }

  static delete( id ) {
    firestore.collection( this.collectionPath ).doc( id ).delete();
  }

  static find( id, parent ) {
    let documentPath = this.collectionPath + '/' + id;
    if ( parent ) {
      let documentPath = parent.documentPath() + '/' + documentPath;
    }

    let documentRef = firestore.doc( documentPath );

    let result = docData( documentRef, 'id' ).pipe(
      map( data => new Question( data, parent ) ),
      startWith( null )
    );
    result.set = result.next

    return result;
  }

  static findAll( parent ) {
    let collectionPath = this.collectionPath;
    if ( parent ) {
      collectionPath = parent.documentPath() + '/' + collectionPath;
    }

    const collectionRef = firestore.collection( collectionPath );
    return collectionData( collectionRef, 'id' ).pipe(
      map( questions => questions.sort( ( a, b ) => a.questionIndex - b.questionIndex ) ),
      startWith( [ { text: "one" } ] )
    );
  }

  static update( id, props ) {
    firestore.collection( this.collectionPath ).doc( id ).update( props );
  }


  static updateBelongingTo( parent, id, props ) {
    let documentPath = parent.documentPath() + '/' + this.collectionPath + '/' + id;
    let documentRef = firestore.doc( documentPath );
    documentRef.update( props );

  }



}