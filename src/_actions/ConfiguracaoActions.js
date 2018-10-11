import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import api from '../config/config-production'

export function getExchanges() {
  const request = axios.get(`${api.WOLFBOT_API_URL}/exchanges/loadExchanges`)

  return {
    type: 'EXCHANGES_FETCHED',
    payload: request

  }
}

export function SelectedOption(selectOption, acao) {
  return {
    type: acao,
    payload: {
      value: selectOption.value,
      label: selectOption.label
    }
  }
}

export function salvarConfiguracao(values) {
  const url = `${api.WOLFBOT_API_URL}/configuracao`

  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'CONFIGURATION_SAVED', payload: resp.data },
          toastr.success('Sucesso', 'Configuração salva com sucesso!')
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}

export function salvarEstrategia(values) {
  const url = `${api.WOLFBOT_API_URL}/configuracao`

  return dispatch => {
    axios.post(url, values)
      .then(resp =>
        dispatch(
          { type: 'CONFIGURATION_SAVED', payload: resp.data },
          toastr.success('Sucesso', 'Configuração salva com sucesso!')
        )
      )
      .catch(e => {
        for (var i = 0; i < e.response.data.errors.length; i++) {
          toastr.error('Erro', e.response.data.errors[i].message)
        }
      })
  }
}
