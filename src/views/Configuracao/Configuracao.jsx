import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, Label, Button } from 'reactstrap';

import Alerts from '../../containers/Components/Alerts'
import Input from '../../containers/Components/Input'
import SelectExchanges from './SelectExchanges'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { salvarConfiguracao } from './ConfiguracaoActions'

class Configuracao extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onSubmit(values) {
    const { salvarConfiguracao } = this.props
    const post = {
      key: values.key,
      secret: values.secret,
      id_exchange: this.props.exchangeSelected.id_exchange,
      nome_exchange: this.props.exchangeSelected.label,
    }
    salvarConfiguracao(post)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="animated fadeIn">
        <Alerts />
        <Row>
          <Col xs="12" lg="12" sm="12">
            <Card className="card">
              <CardHeader>
                <i className="icon-settings"></i> Configuração
                            </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                  <InputGroup className="mb-3">
                    <Col lg="1">
                      <Label >
                        <h6>Exchange</h6>
                      </Label>
                    </Col>
                    <Col>
                      <SelectExchanges />
                    </Col>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Col lg="1">
                      <Label>
                        <h6>API Key</h6>
                      </Label>
                    </Col>
                    <Col>
                      <Field component={Input} type="text" name="key" placeholder="ApiKey" className="form-control" />
                    </Col>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Col lg="1">
                      <Label>
                        <h6>API Secret</h6>
                      </Label>
                    </Col>
                    <Col>
                      <Field component={Input} type="text" name="secret" placeholder="ApiSecret" className="form-control" />
                    </Col>
                  </InputGroup>
                  <Row>
                    <Col xs="6">
                      <Button type="submit" className="btn-outline-success">Salvar Configuração</Button>
                    </Col>
                  </Row>
                  <hr />
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Configuracao = reduxForm({ form: 'formConfig' })(Configuracao)
const mapDispatchToProps = dispatch => bindActionCreators({ salvarConfiguracao }, dispatch)
const mapStateToProps = state => ({ exchangeSelected: state.selectConfig.exchangeSelected })
export default connect(mapStateToProps, mapDispatchToProps)(Configuracao)
