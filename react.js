function Car(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={props.car.img}
                    alt={props.car.name} />
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price} $</p>
        </div>
    )
}

const app = (
    <div className="app">
        <div className="list">
            <Car car={{name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg'}} />
            <Car car={{name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598'}}/>
            <Car car={{name: 'Rolls Royce', price: 50000, img: 'https://auto.ironhorse.ru/wp-content/uploads/2018/06/Wraith-tmb-550x300.jpg'}}/>
            <Car car={{name: 'Mercedes amg Coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2'}}/>
        </div>
    </div>
)

ReactDOM.render(app, document.getElementById('root'))