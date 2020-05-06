import { collectionData, docData } from 'rxfire/firestore';
import { filter, groupBy, map, startWith } from 'rxjs/operators';

import Collection from 'src/collections/Collection';
import Quiz from 'src/collections/Quiz';
import { firestore } from 'src/services/firebase';

export default class Quizzes extends Collection {

  constructor( data ) {
    super();
    for ( let key in data ) {
      this[ key ] = data[ key ];
    }
  }

  static add( props ) {
    firestore.collection( this.collectionPath ).add( props );
  }

  static delete( id ) {
    firestore.collection( this.collectionPath ).doc( id ).delete();
  }

  static find( id ) {
    let docRef = this.collectionRef.doc( id );

    return docData( docRef, 'id' ).pipe(
      // map( data => ( { ...data, ...{ color: 'purple' } } ) ),
      map( data => new Quiz( data ) ),
      startWith( null )
    );

    // let doc = await docRef.get();
    // return { id, ...doc.data() };
  }

  static findAll( { order = '' } ) {
    const collectionRef = firestore.collection( this.collectionPath );
    let result = collectionData( collectionRef, 'id' ).pipe(
      startWith( [] )
    );

    if ( order ) {
      result = result.pipe(
        map( quizzes => quizzes.sort( ( a, b ) => ( a[ order ] && a[ order ].toString().localeCompare( b[ order ] ) ) ) )
      );
    }
    return result;
  }

  static findByName( name ) {
    const collectionRef = firestore.collection( this.collectionPath );
    return collectionData( collectionRef, 'id' ).pipe(
      filter( quiz => quiz.name === name ),
      startWith( [] )
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

}

Quizzes.collectionPath = 'quizzes';
Quizzes.collectionRef = firestore.collection( Quizzes.collectionPath );