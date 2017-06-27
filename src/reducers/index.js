/**
 * Created by rihongo on 2017. 6. 27..
 */
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});

export default  reducers;
