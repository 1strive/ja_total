//model就是一个对象
import { Reducer, Subscription, Effect } from 'umi'
import {getRemoteList} from './service'
interface UserModelType {
    namespace: 'users';
    state: {}
    reducers: {
        getList: Reducer
    }
    effects: {
        getRemote: Effect
    }
    subscriptions: {
        setup: Subscription
    }
}

const UserModel:UserModelType = {

    namespace: 'users',
    state: {},
    reducers: {
        //action就是{type,payload}
        getList(state, { payload }) {
            return payload
        }
    },
    effects: {
        //全部是异步函数 加*变成生成器函数 
        *getRemote(action,{put,call}) {
           const data = yield call(getRemoteList)
            yield put({
                type: 'getList',
                payload: data
            })
        }
    },
    subscriptions: {
        //一般会将除了type之外的数据放在payload中
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => { //{pathname}是对location.pathname的解构赋值
                if (pathname === '/users') {
                    dispatch({
                        type: 'getRemote'
                    })
                }
            })
        }
    }
}

export default UserModel;