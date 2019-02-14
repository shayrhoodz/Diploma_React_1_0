import React, {Component} from 'react';
import Header from '../header';
// import Footer from '../footer';
import './coffeePage.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemList from '../itemList';
// import ItemDetails from '../itemDetails';
import GetService from '../../services/getService';
import SearchPanel from '../search-panel';
// import itemList from '../itemList/itemList';



export default class CoffeePage extends Component {
    constructor(props) {
        super(props);
            this.state = {
                term:'',
                filter: ''
            }
            this.onUpdateSearch = this.onUpdateSearch.bind(this);
            this.onUpdateFilter = this.onUpdateFilter.bind(this);

    };

    // SearchPost(items, term) {
    //     if (term.length === 0) {
    //     return items
    //     }
    
    //     return items.filter( (item) => {
    //         return item.name.indexOf(term) > -1 // если не чего не найдено, будет возвращено -1
    //     })
    // }

    // filterPost(items, filter) {
    //     if (filter === items.country) {
    //         return items.filter(item => item.country)
    //     } else {
    //         return items
    //     }
    // }

    onUpdateSearch(term) {
        this.setState({term})
    }
    
    onUpdateFilter(country) {
        this.setState(
            {filter: country}
            )
    }
    

	service = new GetService();

	render() {
        return(
      <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <Header />
            </div>
          </div>
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>

			{/* <ItemDetails/> */}

			{/* <Router>
				<Route path='/coffeepage/itemDetails' component={ItemList} />
			</Router> */}
      

    	<section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src="img/logo/Beans_logo_dark.svg" alt="Beans logo"/>
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        {/* <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/> */}
                        <SearchPanel
                            onUpdateSearch={this.onUpdateSearch}
                        />
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button className="shop__filter-btn"
                                onClick = {() => this.onUpdateFilter('Brazil')}
                            >Brazil</button>
                            <button className="shop__filter-btn"
                                onClick = {() => this.onUpdateFilter('Kenya')}
                            >Kenya</button>
                            <button className="shop__filter-btn"
                                onClick = {() => this.onUpdateFilter('Columbia')}
                            >Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
						<ItemList 
                            getData = {this.service.getShop}
                            term = {this.state.term}
                            filter = {this.state.filter}
                        // name = {'coffeePage'}

                        />                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <Footer /> */}
    </>
    )
  }
} 

// const View = () => {
// 	return(
// 		<section className="shop">
//       <div className="container">
// 				<div className="row">
// 						<div className="col-lg-5 offset-1">
// 								<img className="shop__girl" src="img/coffee_item.jpg" alt="coffee_item"/>
// 						</div>
// 						<div className="col-lg-4">
// 								<div className="title">About it</div>
// 								<img className="beanslogo" src="img/logo/Beans_logo_dark.svg" alt="Beans logo"/>
// 								<div className="shop__point">
// 										<span>Country:</span>
// 										Brazil
// 								</div>
// 								<div className="shop__point">
// 										<span>Description:</span>
// 										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
// 										Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// 								</div>
// 								<div className="shop__point">
// 										<span>Price:</span>
// 										<span className="shop__point-price">16.99$</span>
// 								</div>
// 						</div>
// 					</div>
// 			</div>
// 		</section>
// 	)
// }