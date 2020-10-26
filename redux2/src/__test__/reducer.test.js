import reducer from '../reducer';

describe('Reducer Testing',() => {
    it('Should return initial state',()=>{
        expect(JSON.stringify(reducer(undefined,{})))
        .toEqual(JSON.stringify({
            article:{},
            gallery:{}
        }))
    })
    it('Reducer with Action',()=>{
        let state={
            article:[],
            gallery:[]
        }

        state=reducer(state,{action:'LATEST_NEWS'})

        expect(state).toEqual({
            article:[],
            gallery:[]
        })
    })
}) 

