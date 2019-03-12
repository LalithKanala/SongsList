import{combineReducers} from 'redux';


const songsReducer = () => {
    return [
        {title:'I dont know', duration:'4:05'},
        {title:'you dont know', duration:'2:30'},
        {title:'he dont know', duration:'3:25'},
        {title:'she dont know', duration:'1:45'}
    ];
};
const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});