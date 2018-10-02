import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';
import Input from '../../../containers/Components/Input';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DadosPessoais extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div style={{ width: '100%' }}>
        <div className="" style={{ width: '25%', margin: 'auto' }}>
          <img src="dist/img/account/vinne1.jpg" width="125px" height="125px"
            style={{ display: "block", margin: "10px auto" }}></img>
          <h5 style={{ textAlign: 'center' }}>Vinicius Rocha</h5>
        </div>
        <br />
        <div style={{ width: '80%', margin: 'auto' }}>
          <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
            <InputGroup className="mb-3">
              <Col lg="1">
                <Label >
                  <h6>Email:</h6>
                </Label>
              </Col>
              <Col>
                <p>Vnc.chelsea@gmail.com</p>
              </Col>
            </InputGroup>
            <InputGroup className="mb-2">
              <Col lg="1">
                <Label>
                  <h6>Nome:</h6>
                </Label>
              </Col>
              <Col md="7">
                <Field component={Input} type="text" name="nome" className="form-control" />
              </Col>
            </InputGroup>
            <InputGroup className="mb-2">
              <Col lg="1">
                <Label>
                  <h6>Genêro:</h6>
                </Label>
              </Col>
              <Col md="7">
                <Field component={Input} type="text" name="genero" className="form-control" />
              </Col>
            </InputGroup>
            <Row>
              <Button type="submit" className="btn-outline-success" style={{ margin: 'auto' }}>Salvar Alterações</Button>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}

DadosPessoais = reduxForm({ form: 'formDadosPessoais' })(DadosPessoais)
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(DadosPessoais)
