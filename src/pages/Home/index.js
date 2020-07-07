import React, { Component } from "react";
import { getBookData } from '../../MockData/mockData';
import { Row, Space, Card, Button, Col } from 'antd';
import Navbar from '../Navbar';


class Home extends Component {
	state = {
		books: [],
		price: 0,
		name: '',
		bookId: '',
		cover: '',
		discount1: 0,
		discount2: 0,
		total: 0,
		finalPrice: 0,
		inputPrice: 0,
	}
	// buy 2 unique series books discount 10% of those 2 books
	// buy 3 unique series books discount 11% of those 3 books
	// buy 4 unique series books discount 12% of those 4 books
	// buy 5 unique series books discount 13% of those 5 books
	// buy 6 unique series books discount 14% of those 6 books
	// buy 7 unique series books discount 15% of those 7 books

	componentDidMount() {
		this._getDataBook()
	}

	_getDataBook = async () => {
		try {
			let res = await getBookData()
			this.setState({
				books: res.data
			})
			// let bookCover = this.state.books.map(cover => cover.cover)
			// let bookName = this.state.books.map(name => name.title)
			// let bookPrice = this.state.books.map(price => price.price)
			// let bookId = this.state.books.map(id => id.id)
			// this.setState({
			// 	price: bookPrice,
			// 	name: bookName,
			// 	bookId: bookId,
			// 	cover: bookCover
			// })
		}
		catch (error) {
			console.log(error);

		}
	}


	handleClickPrice = (price) =>{
		this.setState({
			inputPrice: price,
		})
	}

	/* update values on change */
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		},
			() => {
				this.setState({
					total: this.totalDiscount(),
					finalPrice: this.getFinalPrice()
				})
			});
	}

	/* calculate and return total discount */
	totalDiscount() {
		return (Math.abs((((1 - (this.state.discount1 / 100)) * (1 - (this.state.discount2 / 100))) - 1) * 100)).toFixed(2);
	}

	getFinalPrice() {
		return (this.state.price - (this.state.price * this.totalDiscount() / 100)).toFixed(2);
	}


	render() {
		console.log('res', this.state.books)
		return (
			<div className="home-container">
				<Navbar />
				<div className="name-shop-text-home">Shiba Book Shop</div>
				<Row className="home-content" span={24} >
					<Col span={14}>{this.state.books.map((val, idx) => (
						<Space direction="vertical">
							<Card title={val.title} style={{ width: 300, margin: '15px' }} key={val.id}>
								<img src={val.cover} alt="book" className="img-book" />
								<div><Button onClick={() => this.handleClickPrice(val.price)}>{val.price} THB</Button></div>
							</Card>
						</Space>))}</Col>
					<Col style={8}>

						<div>
							<h2>Discount Calculator</h2>
							<h1>{this.state.inputPrice}$ - {this.state.total}% ={this.state.finalPrice}$</h1>
							<label>
								Price : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               					<input name="price" value={this.state.inputPrice} onChange={(e)=> this.setState({inputPrice : e.target.value})} type="number" step="0.05" min="0" /> $</label>
							<br />
							<label>
								Discount 1 :
               						<input
									name="discount1"
									value={this.state.discount1}
									onChange={this.handleChange}
									type="number"
									min="0" />
               						 %
             				 </label>
							<br />
							<label>
								Discount 2 :
                <input
									name="discount2"
									value={this.state.discount2}
									onChange={this.handleChange}
									type="number"
									min="0" />
                 %
              </label>

						</div>
					</Col>
				</Row>


			</div>



		)
	}
}
export default Home;