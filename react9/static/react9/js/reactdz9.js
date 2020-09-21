class AppDz9 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'], // временые перменные

            itemtovars:[
                {name: 'iphone b7', price: '123', old: 25, categ: 'apple'},
                {name: 'lenovo xxx', price: '321', old: 15, categ: 'lenovo'},
                {name: 'samsung', price: '232', old: 5,categ: 'samsung'},
                {name: 'iphone x', price: '434', old: 50, categ: 'apple'}
                ],

            tmptovar : ''}
    }

    mySort(event){
        //ловим товары из массива list = this.state.itemtovars.map
        // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if(event.target.value == '1'){
            let tmpTovars = this.state.itemtovars;
            this.sortTovars(tmpTovars)
            console.log(tmpTovars)
            this.setState({itemtovars: tmpTovars}) // записываем в стейт пересортированные товары
            //console.log('up')
        }else if(event.target.value == '2'){

        }

        if(event.target.value == '3'){
            let tmpTovarsOld = this.state.itemtovars;
            this.sortOlds(tmpTovarsOld)
            console.log(tmpTovarsOld)
            this.setState({itemtovars: tmpTovarsOld})
        }else {
            //console.log('down')
        }
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

        sortOlds(itemTovars){
            itemTovars.sort(function (a, b) {
                if (a.old > b.old){
                    return 1;
                }else {
                    return -1;
                }

            });
        }

        render() {//  render зарезервированное имя в реакте выводит даные
            // в this.state.tovars. находится наш товар
            const list = this.state.itemtovars.map((item, index)=>{
                return <li key={index}>{item.name}<div>{item.price} $</div><div>{item.old} год</div></li>
            });

            return <div>
                <div>Page9</div>
                <select name='' id='' onChange={this.mySort.bind(this)}>
                    <option value='0'>Сортировать товары по:</option>
                    <option value='1'>по возрастанию цены</option>
                    <option value='2'>по убыванию цены</option>
                    <option value='3'>по возрастанию года выпуска</option>
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
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDz9/>,
    document.getElementById('appdz9')
);