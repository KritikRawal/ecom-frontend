import React,{useState,useEffect} from 'react';
import '../style.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Container,Row,Col} from 'react-bootstrap';
import {AiFillPlusCircle} from 'react-icons/ai'
import {MdTimer} from 'react-icons/md'
import TabPanel  from './tabPanel';
import {BiTask} from 'react-icons/bi';
import AddProduct from './addProduct'
import UpdateAndDelete from './updateAndDelete'

 
const Admin = () => {
    let [value,setValue] = useState(0);
    const handleChange = (e,val)=>{
        setValue(
            val
        )
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={2} className="d-none d-md-block"></Col>
                    <Col lg={7}>
                    <div className="tab__toggle mt-2">
                        <AppBar position="static" style={{background:"purple"}}>
                            <Tabs
                               value={value}
                               onChange={handleChange}
                               
                            >
                                
                                <Tab icon={<AiFillPlusCircle style={{fontSize:"21px"}}/>} label="Add Product"/>
                                <Tab icon={<MdTimer style={{fontSize:"21px"}}/>} label="Update/Delete"/>
                                <Tab icon={<BiTask style={{fontSize:"21px"}}/>} label="Tasks"/>
                                <Tab icon={<AiFillPlusCircle style={{fontSize:"21px"}}/>} label="Extra"/>
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                           <AddProduct/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <UpdateAndDelete/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                         
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                         
                        </TabPanel>
                    </div>
                    </Col>   
                    <Col lg={2} className="d-none d-md-block"></Col>
                </Row>
            </Container>
        
        </React.Fragment>
    )
}
 
export default Admin