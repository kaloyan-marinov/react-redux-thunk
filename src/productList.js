import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./productActions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message} </div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(products);

    /*
    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id}. {product.title}
          </li>
        ))}
      </ul>
    );
    */
    return (
      <div className="container">
        {products.map((product) => (
          <div key={product.id}>
            Post #{product.id}: {product.title}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
});

export default connect(mapStateToProps)(ProductList);
