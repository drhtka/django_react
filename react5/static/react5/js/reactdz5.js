class AppDz5 extends React.Component{
    constructor() {
        super();
        this.state = { text : '', mylogin: '', mypass: '', classlogin: '', classpass: ''}
    }

    chageLogin(event){
        // метод будет ждать что введется в поле login
        this.setState({mylogin:event.target.value}) // перезаписываем mylogin тем что будет в input
    }
    changePass(event){
        // метод будет ждать что введется в поле pass
        this.setState({mypass: event.target.value})
    }
    chekMyForm(event){
        // будет отслеживать событие нажатия нашей общей кнопки
        event.preventDefault()// что бы форма никуда не улетела
        if(this.state.mylogin.length == 0){
            this.setState({classlogin:'error'});
        }
        else {
            this.setState({classlogin:'success'});
        }
        if(this.state.mypass.length == 0 ){
            this.setState({classpass: 'error'})
        }
        else {
            this.setState({classpass: 'success'})
        }
        console.log(this.state.mylogin, this.state.mypass)
    }

    render() {
        return <div>
            <form action="" onSubmit={this.chekMyForm.bind(this)}>
                <input className={this.state.classlogin} type="text" placeholder='login' onChange={this.chageLogin.bind(this)}/>
                <input className={this.state.classpass} type="password" placeholder='password' onChange={this.changePass.bind(this)}/>
                <button>Enter</button>
            </form>
        </div>;
    }
}
// вызываем bind и передаем в нем this для контроля данных ввода
// onSubmit отслеживает отправку данных
// форма не может быть подтверждена, если еe есобытие onSubmit возвпращвет false
ReactDOM.render(
    <AppDz5/>,
    document.getElementById('appdz5')
);