import React from 'react';
// import { Link } from 'react-router-dom';
// import {Card, Button } from "antd";
// import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
// import {addProductToCart} from "../../Cart/CartAction"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


class ProductShopping extends React.Component {


  render() {
    const { product, item } = this.props;

    return (
      <>
        <Card>
          {/* <div>
      <Link to={`/description/${product.productmapper.productId}`}>
      <img src={product.productmapper.imageUrl} alt={product.productmapper.name} style={{ width: 280, height:"250px"}}/>
      </Link> */}
          <Card.Content>
            <Title>{product.category.name}</Title>
            {/* <Paragraph>Card content</Paragraph> */}
          </Card.Content>
          {/* <h3 style={{fontWeight:"bolder", fontSize:"22px"}}>{product.category.name}</h3> */}
          {/* <div style={{marginLeft:"30%"}}>Price: <span style={{fontWeight:"bold", marginLeft:"10px"}}>{product.productmapper.baseCost} {product.productmapper.currency}</span> </div>
      </div>
      <Button style={{ backgroundColor:"rgba(255,215,0,255)", width:"278px" }} onClick={() => this.props.addProduct(item)}>Add to Cart <ShoppingCartOutlined /></Button> */}

        </Card>


      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //   addProduct: product => dispatch(addProductToCart(product))
  // };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductShopping);