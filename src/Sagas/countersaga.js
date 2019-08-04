import {put,takeEvery} from 'redux-saga/effects'
import {increment,decrement} from '../actions/action';
const delay=(ms)=>new Promise(res=>{setTimeout(res,ms)})
function* incrementAsyn(){
    yield delay(1000);
    yield put(increment());
}
function* decrementAsyn(){
    yield delay(1000);
    yield put(decrement());
}
function* watchSaga(){
    yield takeEvery('INCREMENT_ASYNC',incrementAsyn);
    yield takeEvery('DECREMENT_ASYNC',decrementAsyn);
}
export default watchSaga;