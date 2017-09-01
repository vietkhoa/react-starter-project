import React, { Component } from 'react'
import { emailChanged, passwordChange, loginUser } from '../actions'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {

    onEmailChange = (text) => {
        this.props.emailChanged(text)
    }

    onPasswordChange = (text) => {
        this.props.passwordChange(text)
    }

    onButtonPress = () => {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size='large' />
        }

        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        )
    }

    render() {
        const { email, password } = this.props
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={email}
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        value={password}
                        placeholder='password'
                        onChangeText={this.onPasswordChange}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )

    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {

    const { email, password, error, loading } = auth

    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChange, loginUser })(LoginForm)