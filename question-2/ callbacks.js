//method resolvedPromise
const resolvedPromise = () => {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            resolve({'message':'resolved promise after a timeout of 500ms'});

        }, 500);

    });

}

//method rejectedPromise
const rejectedPromise = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            reject({'error': 'rejected promise after a timeout of 500ms'});

        }, 500);

    });

}

//outputs
resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(err => console.log(err))