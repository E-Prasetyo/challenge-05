/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllCar } from '../../Redux/Actions/postActions';
import { connect } from 'react-redux';
import { toRupiah, passenger, checkDriver } from '../../Utils/Function';
import CardItem from './Card';
import './Home.css';

const Item = (props) => {
  let navigate = useNavigate();
  const { data, show, driver, setDataChoice} = props;
  const search = show;

  useEffect(() => {
    props.getAllCars();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [driver])

  const handleChose = (item) => {
    const sendData = {
      seat: passenger(item.category),
      year: "2021",
      checkDriver: checkDriver(item.status)
    };
    setDataChoice(sendData);
    return navigate(`/detail/${item.id}`)
  }

  const listCar = data?.filter(item => item.status.toString() === driver).map((item) => {
    return (
      <CardItem 
        key={item.id}
        data={item} 
        toRupiah={toRupiah} 
        passenger={passenger}
        checkDriver={checkDriver}
        handleChose={handleChose}  
      />
    )
  })
  return (
    <>
      <Container>
        <Row>
        {(search === false || driver === undefined) &&  ""}
        {(search === true && driver) && listCar}
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps =(state)=>{
  return {
      data : state.dataCar.cars,
      show : state.dataCar.show,
      driver : state.dataCar.driver,
  }
}

const mapsDispatchToProps = (dispatch) =>{
  return{
    getAllCars: () => dispatch(getAllCar()),
    setDataChoice: (value) => dispatch({type: 'DATA_CHOICE', payload: value})
  }
}

export default connect(mapStateToProps,mapsDispatchToProps)(Item)