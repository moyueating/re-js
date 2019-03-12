// 见博客


function middleware(store){
    return function(next){
        return function(action){
            console.log('pre', store.getState())
            next(action)
            console.log('after', store.getState())
        }
    }
}
