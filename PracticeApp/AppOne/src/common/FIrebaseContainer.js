import RNFirebase from 'react-native-firebase';

export default class FIrebaseContainer{
    firebase;
    constructor(){
        const configurationOptions = {
            persistence: true,
            debug:false
        };
        this.firebase = new RNFirebase(configurationOptions);


        /*this.firebase.auth().signInAnonymously()
            .then((user) => {
                console.log("AUTH",user.isAnonymous);
            });*/
    }

    getAuth(){
        return this.firebase.auth();
    }


    signIn(email,password,success,fail){
        this.firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                success(user);
                console.log('User successfully logged in', user)
            })
            .catch((err) => {
                fail(err);
                console.error('User signin error', err);
            });
    }

    saveProduct(product){
        this.firebase
            .database()
            .ref('products')
            .push().set(product);
    }

    getFirebase(){
        return this.firebase;
    }
}