function App() {
  const products = [
    { name: 'T-shirt', price: '450' },
    { name: 'Shirt', price: '800' },
    { name: 'Pant', price: '1000' },
    { name: 'Panjabi', price: '1200' },
    { name: 'Saree', price: '2000'}
  ]
  return (
    <div className="App">
      <header className="App-header">
       {
         products.map(product =>< Product product = {product}></Product>)
       }
      </header>
    </div>
  );
}


//1st component
function Product(props) {
  const productStyle = {
    border: '5px solid gray',
    margin: '2px',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '250px',
    float: 'left',
  }
  //const { name, price } = props.product;
 // console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}


export default App;
