'use client';
import React from 'react';

const App: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  // const { data, isLoading, isError } = useQuery<ApiResponse>({
  //   queryKey: ['users'],
  //   queryFn: getUsers,
  // });
  // console.log('checkData:', data);

  // if (isLoading) return <div>Loading users...</div>;
  // if (isError) return <div>Error fetching users</div>;

  return (
    // <Layout className="h-screen">
    //   <Sider trigger={null} collapsible collapsed={collapsed}>
    //     <div className="demo-logo-vertical" />
    //     <MenuPage />
    //   </Sider>
    //   <Layout>
    //     <Header style={{ padding: 0, background: '#fff' }}>
    //       <Button
    //         type="text"
    //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         onClick={() => setCollapsed(!collapsed)}
    //         style={{
    //           fontSize: '16px',
    //           width: 64,
    //           height: 64,
    //         }}
    //       />
    //     </Header>
    //     <Content
    //       style={{
    //         margin: '24px 16px',
    //         padding: 24,
    //         minHeight: 280,
    //         background: colorBgContainer,
    //         borderRadius: borderRadiusLG,
    //       }}
    //     >
    //       <div>
    //         <h1>User List</h1>
    //         {data?.items.map(user => (
    //           <div key={user.id}>
    //             <p>Name: {user.name}</p>
    //             <p>Email: {user.email}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </Content>
    //   </Layout>
    // </Layout>
    <div>HomePage</div>
  );
};

export default App;
