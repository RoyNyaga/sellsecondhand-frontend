import 'antd/dist/antd.css';
import React, { Component } from 'react';
import NavigationBar from "../../components/navbar"
import styled from "styled-components"
import { Layout, Menu, Breadcrumb } from 'antd';
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
              
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
              <h1>testing this thin out testing this out</h1>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

const StyledSider = styled(Sider)`
  background: green;
`
 
export default ProductPage;