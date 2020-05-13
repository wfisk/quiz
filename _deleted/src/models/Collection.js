import Document from 'src/models/Document';

export default class Collection {
  static collectionPath = '';
  static itemClass = Document;


  static add( props, parent ) {
    let collectionPath = parent.documentPath() + '/' + this.collectionPath;
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
      map( data => new static.itemClass( data, parent ) ),
      startWith( null )
    );
    result.set = result.next

    return result;
  }


  static findAll( parent = null ) {
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



}