class App9 extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            tovars: ['iphone b7', 'samsung j4', 'lenovo'], // временые перменные

            itemtovars:[
                {name: 'iphone b7', price: 123, categ: 'apple'},
                {name: 'lenovo xxx', price: 321, categ: 'lenovo'},
                {name: 'samsung xx', price: 232,categ: 'samsung'},
                {name: 'iphone x', price: 434, categ: 'apple'}
                ],
            itemtovarsorig:[  // для рендомного выведения товаров
                {name: 'iphone b7', price: 123, categ: 'apple'},
                {name: 'lenovo xxx', price: 321, categ: 'lenovo'},
                {name: 'samsung xx', price: 232,categ: 'samsung'},
                {name: 'iphone x', price: 434, categ: 'apple'}
            ],

            chek_box:[

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
                //this.setState({itemtovars: tmpTovars}) // записываем в стейт пересортированные товары
                //console.log('up')
            }else if(event.target.value == '2'){
                this.sortTovarsDown(tmpTovars)
                //this.setState({itemtovars:tmpTovars})
                //console.log('down')
            }else if (event.target.value == '0'){
                let tmpTovars = this.state.itemtovarsorig;
                //this.setState({itemtovars:tmpTovars})//перезаписывае опять в рендомном порядке
            }
                this.setState({itemtovars:tmpTovars})// это видят 3 блока if else else, сделали для упращения кода
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
    sortCateg(event){
        //console.log(this.state.chek_box)
        let tmp_check_boxes = []
        tmp_check_boxes = this.state.chek_box // перезаписали все что лежит в глобальном chek_box
        if (tmp_check_boxes.length == 0){
            tmp_check_boxes.push(event.target.value)// то что нажато в чекбоксе
            this.setState({chek_box:tmp_check_boxes}) // перезаписываем новый чебокс в глобальный массив

            let tmp_array = []
            if(event.target.value == '0'){
                let item = ''

                for (item of this.state.itemtovarsorig){
                    if (item.categ == "apple"){
                        //console.log(item.name)
                        tmp_array.push(item)
                    }
                }
                //console.log(tmp_array)
            }
            if(event.target.value == '1'){
                //alert('eto lenovo')
                let item = ''
                for (item of this.state.itemtovarsorig){
                    if (item.categ == "lenovo"){
                        //console.log(item.name)
                        tmp_array.push(item)

                    }
                }
            }
            if(event.target.value == '2'){
                //alert('eto samsung')
                let item = ''
                for (item of this.state.itemtovarsorig){
                    if (item.categ == "samsung"){
                        //console.log(item.name)
                        tmp_array.push(item)
                    }
                }
            }//console.log(tmp_array)
            this.setState({itemtovars: tmp_array})
        }else {
            //alert('puolno')
            //alert(event.target.value)

            let tmp_array = []
            tmp_check_boxes = this.state.chek_box // перезаписали все что лежит в глобальном chek_box
            console.log('spisok filtrov')
            console.log(tmp_check_boxes)
            console.log(event.target.value)
            if(event.target.value == '0'){
                let item = ''

                for (item of this.state.itemtovarsorig){
                    if (item.categ == "apple"){
                        //console.log(item.name)
                        tmp_array.push(item)
                    }
                }
                //console.log(tmp_array)
            }
            if(event.target.value == '1'){
                //alert('eto lenovo')
                let item = ''
                for (item of this.state.itemtovarsorig){
                    if (item.categ == "lenovo"){
                        //console.log(item.name)
                        tmp_array.push(item)

                    }
                }
            }
            if(event.target.value == '2'){
                //alert('eto samsung')
                let item = ''
                for (item of this.state.itemtovarsorig){
                    if (item.categ == "samsung"){
                        //console.log(item.name)
                        tmp_array.push(item)
                    }
                }

        }
           console.log('1111')
            //console.log(tmp_array)
            var tmp_item_tovars = this.state.itemtovars // чтоб добавть в товары еще одну категорию
            // накапливаем товары которые выбраны
            var item = ''
            // console.log('tmp_array')
            // console.log(tmp_array)
            // console.log('tmp_item_tovars')
            // console.log(tmp_item_tovars)
            for(item of tmp_array){
                console.log(item)
                tmp_item_tovars.push(item)

            }

            console.log('tmp_item_tovars2')
            console.log(tmp_item_tovars)
            this.setState({itemtovars: tmp_item_tovars})

        }
    }

    render() {//  render зарезервированное имя в реакте выводит даные
        // в this.state.tovars. находится наш товар
        const list = this.state.itemtovars.map((item, index)=>{
            return <li key={index}>{item.name}<div>{item.price} $</div></li>
        });
// первый this это функция в клсе,  второй this то что вводим
        return <div>
            <div id='check' >
                <div style={{color: 'blue'}}><input value='0' type='checkbox' onChange={this.sortCateg.bind(this)}/> apple</div>
                <div style={{color: 'green'}}><input value='1' type='checkbox' onChange={this.sortCateg.bind(this)}/>lenovo</div>
                <div style={{color: 'red'}}><input value='2' type='checkbox' onChange={this.sortCateg.bind(this)}/>sumsung</div>
            </div>
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