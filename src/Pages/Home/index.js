/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
// import { Header } from '../../Components';
import { useForm, Controller } from "react-hook-form";
import Item from './Items';
import imgPerson from '../../Assets/Img/fi_users.png'
import './Home.css'
import { connect } from 'react-redux'
// import useShow from '../../Utils/Hooks/useShow';

const Home = (props) => {
  // const { show, setShow, driver, setDriver } = useShow();
  const { show, setShow, driver, setDriver } = props;
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  const resultSubmit = data =>{
    if(data.tipeDriver){
      setShow();
      setDriver(data.tipeDriver)
    }else{
      alert("fill parameter Tpi Driver")
    }
  } 

  return (
    <>
      {/* <Header search={show} /> */}
      <Container className="border border-2 py-2 px-3 offset-header">
        <Form onSubmit={handleSubmit(resultSubmit)}>
          <Row>
            <Col xs sm="3" md lg="2">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tipe Driver</Form.Label>
                <Controller
                  control={control} 
                  name="tipeDriver"                                           
                  defaultValue={driver||""}                                                                        
                  render={({ field: { onChange, value, ref }}) => (
                    <Form.Select
                      onChange={onChange}
                      name="tipeDriver"
                      ref={ref}
                      value={value}>
                        <option value="" disabled>Open this select menu</option>
                        <option value="true">Dengan Supir</option>
                        <option value="false" className="text-danger bg-CostumRed">
                          Tanpa Supir  (Lepas Kunci)
                        </option>
                    </Form.Select>
                  )}
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Tanggal</Form.Label>
                <Controller
                  control={control}   
                  name="Tanggal"                                         
                  defaultValue=""                                                                        
                  render={({ field: { onChange, value, ref }}) => (
                    <Form.Control 
                      onChange={onChange}
                      name="Tanggal"
                      ref={ref}
                      type="date"
                      value={value}
                    />
                  )}
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="2">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Time</Form.Label>
                <Controller
                  control={control}   
                  name="Time"                                         
                  defaultValue=""                                                                        
                  render={({ field: { onChange, value, ref }}) => (
                    <Form.Control 
                      onChange={onChange}
                      name="Time"
                      ref={ref}
                      type="time"
                      value={value}
                    />
                  )}
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Penumpang</Form.Label>
                  <Controller
                    control={control}   
                    name="Penumpang"                                         
                    defaultValue=""                                                                        
                    render={({ field: { onChange, value, ref }}) => (
                      <div className="d-flex flex-row">
                        <Form.Control
                          className="border border-end-0" 
                          onChange={onChange}
                          name="Penumpang"
                          ref={ref}
                          type="text"
                          value={value}
                        />
                        <span className="bg-white border border-start-0 py-1 pe-2" id="inputGroup-sizing-sm"><img src={imgPerson} alt="" /></span>
                      </div>
                    )}
                  />
                </Form.Group>
            </Col>
            <Col xs sm="2" md lg="2">
              <div className="d-flex flex-column justify-content-end btn-search">
              {show !== true? (
                  <Button type='submit' variant="success">Cari Mobil</Button> 
                ):(
                  <Button type='submit' variant="outline-primary">Edit</Button> 
                )
              }
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <Item />
    </>
  )
}

const mapsStatesToProps = (state) =>{
    return {
      show : state.dataCar.show,
      driver: state.dataCar.driver
  }
}

const mapsDispatchToProps = (dispatch) => {
  return{
    setShow: () => dispatch({type: "HIDE_HEADER"}),
    setDriver: (value) => dispatch({type: "DATA_SEARCH", payload: value}),
  }
}

export default connect(mapsStatesToProps, mapsDispatchToProps)(Home);