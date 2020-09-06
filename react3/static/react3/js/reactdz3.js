
    class AppDz3 extends React.Component{
    constructor() {
    super();
    this.state = {
    obj: ['name', 'price', '/static/react3/img/Nokia-105.jpg'],
    text : ''}
}
    render(){
    const list = this.state.obj.map((item, index)=>{
    return <li key={index}>{item}</li>
})
    return <div>
    <ul>{list[0]}
    {list[1]}
    {list[2]}
    <img class="im" src={list[2]}/>
    </ul>
    react
    </div>;
}
}
    ReactDOM.render(
    <AppDz3/>,
    document.getElementById('app3dz')
    );