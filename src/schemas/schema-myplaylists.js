import myPlaylists from '../myplaylists.json'
import { normalize, schema } from 'normalizr'

const playlist = new schema.Entity('myplaylists');
const mySchema = { myplaylists: [ playlist ] }
const normalizedData = normalize(myPlaylists, mySchema);

export default normalizedData
