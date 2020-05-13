import Model from 'src/models/Model';
import MediaItem from 'src/models/MediaItem';

export default class Question extends Model {
  static collectionPath = 'questions';

  addMediaItem( props ) {
    MediaItem.add( props, this );
  }

  findMediaItem( id ) {
    return MediaItem.find( id, this );
  }

  media() {
    return MediaItem.findAll( { parent: this } );
  }


}