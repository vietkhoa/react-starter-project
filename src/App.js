import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDe0CskaX6RJLsG6P8LX_a9B2JJsfv5Dho",
            authDomain: "manager-6d886.firebaseapp.com",
            databaseURL: "https://manager-6d886.firebaseio.com",
            projectId: "manager-6d886",
            storageBucket: "manager-6d886.appspot.com",
            messagingSenderId: "1054258621256"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App
