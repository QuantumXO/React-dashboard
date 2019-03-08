
// React
import React, { PureComponent } from 'react'

class SubmitBtn extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            loginError: '',
            PasswordError: '',
        }

    }

    loginSubmit(e){
        e.preventDefault();

        const login = document.getElementById('login');
        const password = document.getElementById('password');

        this.setState({
            loginError: '',
            passwordError: '',
        });

        if(login.value !== ''){
            if(login.value == this.props.basic.login){
                login.classList.remove('input__error');
                if(password.value !== ''){
                    if(password.value == this.props.basic.password){
                        console.log('success');
                        this.setState({
                            passwordError: ''
                        });
                        password.classList.remove('input__error');

                        window.location.replace('/');

                    }else{
                        shake(password);
                        password.classList.add('input__error');
                        this.setState({
                            passwordError: 'not correct password'
                        });
                    }
                }else{
                    shake(password);
                    password.classList.add('input__error');
                    this.setState({
                        passwordError: 'password must not be empty'
                    });
                }
            }else{
                shake(login);
                this.setState({
                    loginError: 'login must be right'
                });
                login.classList.add('input__error');
            }
        }else{
            shake(login);
            login.classList.add('input__error');
            this.setState({
                loginError: 'login must not be empty'
            });
        }

    }

    render(){
        return(
            <input type="submit" className='login__submit' onClick={this.loginSubmit.bind(this)} value='LogIn'/>
        )
    }

}

export default SubmitBtn