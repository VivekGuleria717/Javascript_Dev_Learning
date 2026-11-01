// 1st //
function PromisePolyFill(executor) {
    let onResolve, onReject;
       let  isfullFilled = false,
        isrejected = false,
        isCalled = false,
        value

    function resolve(val) {
        isfullFilled = true; // when on reolve promise gets fullfilled 
        value = val;

        if (typeof onResolve === 'function') { // in case of async callback(sitetimeout)
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val) {
        isrejected = true;
        value = val;

        if (typeof onResolve === 'function') { // in case of async callback(sitetimeout)
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function (callback) { // as (res)=>{ console.log(res);  here res=callback}
        onResolve = callback;
        if (isfullFilled && !isCalled) { // in case of sync code exec
            called = true;
            onResolve(value);
        }
        return this;
    }

    // catch part
    this.catch = function (callback) {
        onReject=callback
        if (isrejected && !isCalled) { // in case of sync code exec
            called = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error);
    }

}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});
// async hoga(settimeout/api call) toh phle .then excute hoga else reolve func call hoga direct
examplePromise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })