import Model from 'src/models/Model';
import MediaItem from 'src/models/MediaItem';

export default class Question extends Model {

  static getCollectionId() {
    return 'questions';
  }


  addMediaItem( props ) {
    MediaItem.add( props, this );
  }

  findMediaItem( id ) {
    return MediaItem.find( id, { parent: this } );
  }

  media() {
    return MediaItem.all( { parent: this } );
  }


}