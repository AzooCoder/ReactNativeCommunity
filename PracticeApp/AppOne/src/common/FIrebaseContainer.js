import RNFirebase from 'react-native-firebase';

export default class FIrebaseContainer{
    firebase;
    constructor(){
        const configurationOptions = {
            persistence: true
        };
        this.firebase = new RNFirebase(configurationOptions);


        this.firebase.auth().signInAnonymously()
            .then((user) => {
                console.log("AUTH",user.isAnonymous);
            });
    }


    savePosts(data){
        this.firebase
            .database()
            .ref('posts/1234')
            .set(data);
    }

    getFirebase(){
        return this.firebase;
    }
}