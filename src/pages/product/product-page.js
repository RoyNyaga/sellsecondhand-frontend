import 'antd/dist/antd.css';
import React, { Component } from 'react';
import NavigationBar from "../../components/navbar"
import ProductCard from "../../components/productCard"
import styled from "styled-components"
import { Layout, Menu, Row, Col } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <Layout>
        <NavigationBar/>
        <Content style={{ padding: '0 0' }}>
          <Layout className="site-layout-background" style={{ padding: '0 0' }}>
            <StyledSider className="site-layout-background" width={200}>
             <h1>what could be this</h1>
            </StyledSider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>              
              <Row gutter={[20, 20]}>
                <Col xs={{span: 12}} md={{span: 6}} sm={{span: 8}}>
                  <ProductCard/>
                </Col>
                <Col xs={{span: 12}} md={{span: 6}} sm={{span: 8}}>
                  <ProductCard/>
                </Col>
                <Col xs={{span: 12}} md={{span: 6}} sm={{span: 8}}>
                  <ProductCard/>
                </Col>
                <Col xs={{span: 12}} md={{span: 6}} sm={{span: 8}}>
                  <ProductCard/>
                </Col>
                <Col xs={{span: 12}} md={{span: 6}} sm={{span: 8}}>
                  <ProductCard/>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

const StyledSider = styled(Sider)`
  background: #100e17;
  border-right: 5px solid #fc8019;
  color: #f7e8dc;
  h1{
    color: #f7e8dc;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
 
export default ProductPage;