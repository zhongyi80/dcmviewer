import { Avatar,Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
//import DicomViewer from "./dicom-viewer";
import ImageViewer from './component/ImageViewer'
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:'right'}} size = "small" icon="user"  ></Avatar>
          <Title style={{color:'white'}} level={3}> CMB Detection</Title>        
        </Header>
        <Layout>
        
        <Sider>
          <Menu defaultSelectedKeys={['Dashboard']} mode='inline'>
            <Menu.Item key='Dashboard'>
              Dashboard
            </Menu.Item>
            <SubMenu title='Study list'>
              <Menu.ItemGroup title='Study list'>
                <Menu.Item>show list1</Menu.Item>
                <Menu.Item>view study</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            

          </Menu>
        </Sider>
        
          
          <Content style={{padding:'0 50px'}}>
            <Breadcrumb.Item>Patient Study</Breadcrumb.Item>
            <div style={{ background:'#fff', padding:24, minHeight:580}}>
              <ImageViewer />
            
            </div>
            

            
          </Content>
         
         
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
