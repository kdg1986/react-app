import { Layout, Menu, Breadcrumb,List,Card  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import '@STYLE/antd.css';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'

const CardList = () => {
    const data = [
        {
          title: 'Title 1',
          content: 'content',
        },
        {
          title: 'Title 2',
          content: 'content',
        },
        {
          title: 'Title 3',
          content: 'content',
        },
        {
          title: 'Title 4',
          content: 'content',
        },
        {
          title: 'Title 5',
          content: 'content',
        },
        {
          title: 'Title 6',
          content: 'content',
        },
      ];
    
      return(
        <DragDropContext>
            <Droppable droppableId="droppable-1" type="PERSON">
            {(provided, snapshot) => (
                <div
                {...provided.droppableProps} ref={provided.innerRef}
                >
                    <List
                        grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                        }}
                        dataSource={data}
                        renderItem={(item,index) => {
                            console.log( item )
                         return(   
                        
                            <Draggable key={item.title} draggableId={item.title} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                              >
                                <List.Item>
                                    <Card title={item.title}>{item.content}</Card>
                                </List.Item>
                              </div>                  
                            )}                
                          </Draggable>
                        
                        
                        )
                        }}
                    />
                    {provided.placeholder}            
                </div>
            )}
            </Droppable>
        </DragDropContext>
      )
}

const Contents = props => {
    return(
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout.Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
                {props.children}
            </Layout.Content>
        </Layout>
    )
}


const Table = () => {
    return <h1>table</h1>
}


export default () => {
    
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;

    return(
        <Layout className="h">
            <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                //defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1"><Link to="/ant/BeautifulDnd" >BeautifulDnd</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/ant/table" >table</Link></Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
                <Contents>
                    <Route exact path="/ant" render={null}/>
                    <Switch>
                        <Route path="/ant/BeautifulDnd" component={CardList}/>                    
                        <Route path="/ant/table" component={Table}/>                    
                    </Switch>
                </Contents>
            </Layout>
        </Layout>
    )
}
