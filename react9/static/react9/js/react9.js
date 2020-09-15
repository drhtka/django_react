class App9 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'], // временые перменные

            itemtovars:[
                {name: 'iphone b7', price: 123},
                {name: 'lenovo', price: 321},
                {name: 'samsung', price: 232},
                {name: 'iphone x', price: 434}
                ],
            itemtovarsorig:[  // для рендомного выведения товаров
                {name: 'iphone b7', price: 123},
                {name: 'lenovo', price: 321},
                {name: 'samsung', price: 232},
                {name: 'iphone x', price: 434}
            ],

            tmptovar : ''}
    }

    mySort(event){
        //ловим товары из массива list = this.state.itemtovars.map
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        let tmpTovars = this.state.itemtovars;
            if(event.target.value == '1'){
                this.sortTovars(tmpTovars)
                //console.log(tmpTovars)
                this.setState({itemtovars: tmpTovars}) // записываем в стейт пересортированные товары
                //console.log('up')
            }else if(event.target.value == '2'){
                this.sortTovarsDown(tmpTovars)
                this.setState({itemtovars:tmpTovars})
                //console.log('down')
            }else if (event.target.value == '0'){
                let tmpTovars = this.state.itemtovarsorig;
                this.setState({itemtovars:tmpTovars})//перезаписывае опять в рендомном порядке
            }
        }

    //сортируем товары по убыванию
    sortTovarsDown(itemTovars){
        itemTovars.sort(function (a, b) {
        if(a.price < b.price){
            return 1;
        }else{
            return -1;
        }
        })
    }

    //сортируем товары по возростанию
    sortTovars(itemTovars){ //создаем переменную в ней сортируем массив
        //сортировка массива
        itemTovars.sort(function(a, b){
            // функция сортировка, перебирает весь массив
            // когда стоимость товара больше стоимости второго
            // вывести 1  иначе вывести -1
            if (a.price > b.price){
                return 1;
            }else {
                return -1;
            }
            });
    }

    render() {//  render зарезервированное имя в реакте выводит даные
        // в this.state.tovars. находится наш товар
        const list = this.state.itemtovars.map((item, index)=>{
            return <li key={index}>{item.name}<div>{item.price} $</div></li>
        });

        return <div>
            <div>Page9</div>
        <select name='' id='' onChange={this.mySort.bind(this)}>
            <option value='0'>Сортировать товары по:</option>
            <option value='1'>по возрастанию цены</option>
            <option value='2'>по убыванию цены</option>
        </select>
            <ul>{list}</ul>
            <div className='react'>hello react</div>
            <div style={{background: 'orange', color: 'blue'}}>hello</div>
        </div>;
    }
}
// по  нажатию вызываем метод onSubmit и передаем в метод {this.addTovar.bind(this)}>
// и передаем методом onChange и сохраняем  в метод {this.saveNewTovar.bind(this)}/>
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <App9/>,
    document.getElementById('app9')
);