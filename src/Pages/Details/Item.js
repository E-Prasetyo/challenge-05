import React, { useEffect }  from 'react'
import {
   Container, Row, Col, Card, Button, Accordion
} from 'react-bootstrap';
import iconUsers from '../../Assets/Img/fi_users.png';
import iconSettings from '../../Assets/Img/fi_settings.png';
import iconDate from '../../Assets/Img/fi_users.png';
import { connect } from "react-redux";
import { getCarById } from '../../Redux/Actions/postActions';
import { toRupiah } from '../../Utils/Function';
import './Details.css';
import ButtonCostume from '../../Components/Button';

const Item = (props ) => {;
  const { data, getCar, id, dataChoice } = props;
  const { seat, year, checkDriver } = props?.dataChoice;

  useEffect(() => {
    getCar(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Container className="">
        <Row>
          <Col className="ps-0" xs="6">
            <Container className="py-2 border-card">
              <p className="fw-bold">Tentang Paket</p>
              <p>Include</p>
              <ul>
                <li><small>Apa saja yang termasuk dalam paket misal durasimax 12 jam</small> </li>
                <li><small>Sudah termasuk bensin selama 12 jam</small></li>
                <li><small>Sudah termasuk Tiket Wisata</small></li>
                <li><small>Sudah termasuk pajak</small></li>
              </ul>
              <p>Exclude</p>
              <ul>
                <li><small>Tidak termasuk biaya makan sopir Rp 75.000/hari</small> </li>
                <li><small>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</small></li>
                <li><small>Tidak termasuk akomodasi penginapan</small></li>
              </ul>
              <Accordion className=""  defaultActiveKey="0">
                <Accordion.Item className="accordion-custom" eventKey="0">
                  <Accordion.Header className="accordion-custom px-0" >
                  Refund, Reschedule, Overtime
                  </Accordion.Header>
                  <Accordion.Body className="px-0">
                  <ul>
                    <li><small>Tidak termasuk biaya makan sopir Rp 75.000/hari</small> </li>
                    <li><small>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</small></li>
                    <li><small>Tidak termasuk akomodasi penginapan</small></li>
                    <li><small>Tidak termasuk biaya makan sopir Rp 75.000/hari</small></li>
                    <li><small>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</small></li>
                    <li><small>Tidak termasuk akomodasi penginapan</small></li>
                    <li><small>Tidak termasuk biaya makan sopir Rp 75.000/hari</small></li>
                    <li><small>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</small></li>
                    <li><small>Tidak termasuk akomodasi penginapan</small></li>
                  </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Container>
            <div className="d-flex flex-row justify-content-end">
              <Button className="mt-3" variant="success">
                Lanjutkan Pembayaran
              </Button>
            </div>
          </Col>
          <Col className="pe-0" xs="6">
            <Container className="w-100">
              <Card className="card-details w-100">
                <Card.Body>
                  <Card.Img variant="top" src={data?.image} />
                  <Card.Text><small><b>{data?.name}/{data?.category}</b></small></Card.Text>
                  <div className="d-flex flex-row gap-2">
                    <div className="d-flex flex-row">
                      <small>
                        <img className='' src={iconUsers} alt="" />
                        <span className="ps-3">{seat} Orang</span>
                      </small>
                    </div>
                    <div className="d-flex flex-row">
                      <small>
                        <img className='' src={iconSettings} alt="" />
                        <span className="ps-3">{checkDriver}</span>
                      </small>
                    </div>
                    <div className="d-flex flex-row">
                      <small>
                        <img className='' src={iconDate} alt="" />
                        <span className="ps-3">Tahun {year}</span>
                      </small>
                    </div>
                  </div>
                  
                  <div className="mt-5 d-flex flex-row justify-content-between">
                    <span>Total</span><b>{toRupiah(data?.price)}</b>
                  </div>
                  {/* <ButtonCostume className="mt-3 w-100" variant="success" >
                    Lanjutkan Pembayaran
                  </ButtonCostume> */}
                  <ButtonCostume 
                    className="mt-3 w-100" 
                    variant="success" 
                    dataFlag={dataChoice}
                  />
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapsStatesToProps = (state) => {
  return{
    data: state.dataCar.car,
    dataChoice: state.dataCar.dataChoice
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    getCar: (value) => dispatch(getCarById(value))
  }
}

export default connect(mapsStatesToProps, mapsDispatchToProps)(Item)