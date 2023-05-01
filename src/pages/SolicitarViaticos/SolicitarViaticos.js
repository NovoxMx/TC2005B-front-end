import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import FormInputIcon from "../../components/SolicitarViaticos/FormInputIcon";
import AddInputButton from "../../components/SolicitarViaticos/AddInputButton";
import RequestModal from "../../components/SolicitarViaticos/RequestModal";
import "../../styles/SolicitarViaticos.css";
<<<<<<< HEAD
import { postEstimatedExpenses } from "../../util/PostExpenses";
=======
import { postEstimatedExpenses } from "../../utils/PostExpenses";
>>>>>>> origin

function SolicitarViaticos() {
  const [formData, setFormData] = useState({
    fechaInicio: "",
    fechaTermino: "",
    destino: "",
    proyecto: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [dataFromAddInput, setDataFromAddInput] = useState([]);

  const handleDataFromAddInput = (gastos) => {
    setDataFromAddInput(gastos);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const postToDB = () => {
    for (let i = 0; i < dataFromAddInput.length; i++) {
      postEstimatedExpenses(
        dataFromAddInput[i].concepto,
        dataFromAddInput[i].monto
      );
    }
  };

  let totalGastos = 0;

  for (let i = 0; i < dataFromAddInput.length; i++) {
    totalGastos = totalGastos + parseInt(dataFromAddInput[i].monto);
  }

  if (dataFromAddInput.length === 0) {
    totalGastos = 0;
  }

  return (
    <>
      <h1 id="HeaderTitle">Solicitar viaticos</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <div id="FormSolicitBody">
          <Container id="FormSolicitComponent">
            <Row id="SolicitFormRow">
              <Col sm={10} md={5}>
                <FormInputIcon
                  className="formFechaInicio-input"
                  inputControlID="fechaInicio"
                  inputLabel="Fecha Inicio"
                  inputName="fechaInicio"
                  inputType="date"
                  value={formData.fechaInicio}
                  onChange={handleInputChange}
                />
              </Col>
              <Col sm={10} md={5}>
                <FormInputIcon
                  className="formFechaTermino-input"
                  inputControlID="fechaTermino"
                  inputLabel="Fecha Termino"
                  inputName="fechaTermino"
                  inputType="date"
                  value={formData.fechaTermino}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row id="SolicitFormRow">
              <Col sm={10} md={5}>
                <FormInputIcon
                  className="formDestino-input"
                  inputControlID="destino"
                  inputLabel="Destino"
                  inputName="destino"
                  inputType="text"
                  value={formData.destino}
                  onChange={handleInputChange}
                />
              </Col>
              <Col sm={10} md={5}>
                <FormInputIcon
                  className="formProyecto-input"
                  inputControlID="proyecto"
                  inputLabel="Proyecto"
                  inputName="proyecto"
                  inputType="text"
                  value={formData.proyecto}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row id="SolicitFormRow" className="mx-1">
              <Col sm={10} md={10}>
                <AddInputButton
                  className="form-button"
                  onAddInput={handleDataFromAddInput}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div id="Footer">
          <hr />
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <p className="mt-0" id="TotalExpenses">
                  TOTAL DE LOS GASTOS (MXN): {totalGastos}
                </p>
              </Col>
              <Col id="SaveSendColumns" sm={12} md={6}>
                <Button id="SendSaveButtons" variant="primary">
                  GUARDAR CAMBIOS
                </Button>
                <Button id="SendSaveButtons" variant="primary" type="submit">
                  GUARDAR Y ENVIAR
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Form>
      <RequestModal
        showModal={showModal}
        formData={formData}
        gastosValues={dataFromAddInput}
        totalGastos={totalGastos}
        handleClose={() => setShowModal(false)}
        handleModal={postToDB}
      />
    </>
  );
}

export default SolicitarViaticos;
