import { collectionData, docData } from 'rxfire/firestore';
import { bufferCount, groupBy, map, startWith } from 'rxjs/operators';

import Collection from 'src/collections/Collection';
import { firestore } from 'src/services/firebase';

export default class Maze extends Collection {

  constructor(){
    super();
  }

  static add( props ) {
    firestore.collection( this.collectionName ).add( props );
  }

  static delete( id ) {
    firestore.collection( this.collectionName ).doc( id ).delete();
  }

  static find( id ){
    let docRef = this.collectionRef.doc( id );

    return docData( docRef ).pipe( startWith( null ) );
    
    // let doc = await docRef.get();
    // return { id, ...doc.data() };
  }

  static findAll(){
    const collectionRef = firestore.collection( this.collectionName );
    return collectionData( collectionRef, 'id' ).pipe( startWith( [] ) );
  }

  static findAllInGroupsOfThree(){
    const collectionRef = firestore.collection( this.collectionName );
    return collectionData( collectionRef, 'id' ).pipe( 
      startWith( [] ),
      map( (it,index) => {
        it.index = index;
        return it;
      }),
      groupBy( it => it.index )
    );  
  }

  static update( id, props ) {
    firestore.collection( this.collectionName ).doc(id).update( props );
  }

}

Maze.collectionName = 'mazes';
Maze.collectionRef = firestore.collection( Maze.collectionName );





