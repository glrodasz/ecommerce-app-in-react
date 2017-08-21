import React from 'react';
import { Tabs } from 'antd';
import List from '../../../pages/admin/products/list';
import Create from '../../../pages/admin/products/create';

const TabPane = Tabs.TabPane;

const AdminPage = () => (
            <div>
                <div className="cont-header-page">
                    <h1>Administrar productos</h1>
                </div>
                <hr/>
                <Tabs tabPosition='left'>
                    <TabPane tab="Listar" key="1"><List /></TabPane>
                    <TabPane tab="Agregar" key="2"><Create /></TabPane>
                    <TabPane tab="Eliminar" key="3">Delete</TabPane>
                </Tabs>
                <style  jsx>
                    {`
                        .cont-header-page{
                            padding:20px;
                            text-align:center;
                        }
                        h1{
                            text-transform:uppercase;
                        }
                        hr{
                            border: 0;
                            border-bottom: 1px solid white;
                            box-shadow: 1px 1px 1px #d8d2d2;
                        }
                    `}
                </style>
            </div>
        );
    

export default AdminPage;
