import { collectionData, docData } from 'rxfire/firestore';
import { filter, groupBy, map, startWith } from 'rxjs/operators';

import Collection from 'src/models/Collection';
import Quiz from 'src/models/Quiz';
import { firestore } from 'src/services/firebase';

export default class Quizzes extends Collection {
  static collectionPath = 'quizzes';

  static find( id ) {
    let docRef = this.collectionRef.doc( id );

    return docData( docRef, 'id' ).pipe(
      map( data => new Quiz( data ) ),
      startWith( null )
    );
  }

  static findAll( { order = '' } ) {
    let result = super.findAll();

    if ( order ) {
      result = result.pipe(
        map( items => items.sort( ( a, b ) => ( a[ order ] && a[ order ].toString().localeCompare( b[ order ] ) ) ) )
      );
    }
    return result;
  }


}