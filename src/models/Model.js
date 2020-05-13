import { collectionData, docData } from 'rxfire/firestore';
import { map, startWith } from 'rxjs/operators';

import { firestore } from 'src/services/firebase';

export default class Model {
  static collectionPath = '';
  static itemClass = Document;

  id = 0;
  parent = null;

  static add( props, parent = null ) {
    let collectionPath = this.collectionPath;
    if ( parent ) {
      collectionPath = parent.getDocumentPath() + '/' + collectionPath;
    }
    const collectionRef = firestore.collection( collectionPath );
    collectionRef.add( props );
  }

  static deleteById( id, parent = null ) {
    let documentPath = this.collectionPath + '/' + id;
    if ( parent ) {
      let documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    firestore.doc( documentPath ).delete();
  }

  static find( id, parent ) {
    let documentPath = this.collectionPath + '/' + id;
    if ( parent ) {
      documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    let documentRef = firestore.doc( documentPath );
    let itemClass = this;

    let result = docData( documentRef, 'id' ).pipe(
      map( data => new itemClass( data, parent ) ),
      startWith( null )
    );
    // result.set = result.next;

    return result;
  }


  static findAll( { parent = null, order = '' } ) {
    let collectionPath = this.collectionPath;
    if ( parent ) {
      collectionPath = parent.getDocumentPath() + '/' + collectionPath;
    }

    const collectionRef = firestore.collection( collectionPath );
    return collectionData( collectionRef, 'id' ).pipe(
      map( items => items.sort( ( a, b ) => a[ order ] - b[ order ] ) ),
      startWith( [] )
    );
  }

  static updateById( id, props, { parent = null } ) {
    let documentPath = this.collectionPath + '/' + id;
    if ( parent ) {
      documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    firestore.doc( documentPath ).update( props );
  }



  constructor( data, parent = null ) {
    for ( let key in data ) {
      this[ key ] = data[ key ];
    }
    this.parent = parent;
  }

  getDocumentPath() {
    let result = this.constructor.collectionPath + '/' + this.id;
    if ( this.parent ) {
      result = this.parent.getDocumentPath() + '/' + result;
    }
    return result;
  }

  update( props ) {
    this.constructor.updateById( this.id, props, { parent: this.parent } );
  }




}