import React, { Component } from 'react';
import ProductShopping from './ProductShopping';
import {getProducts} from './ProductAction';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from 'react-native';


class Product extends Component{

  componentDidMount(){
    this.props.getProducts();
   }


render(){

    debugger;
  
const{products}=this.props;

  return(
    <>     
    <View>
    {products.map((product) => {
      return(
        <ProductShopping  product={product}/>
      )}
      )}
         </View>
       
    </>
  );
}
  }

  const mapStateToProps = ({product}) => ({
    fetchingProducts: product.fetchingProducts,
    fetchingProductsError : product.fetchingProductsError,
    products: product.products,
});

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
        {
          getProducts,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Product);