import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AUTHENTICATION } from '../constants'
import AuthContext from '../contexts/AuthContext'
import { addPhoneRequest } from '../api'

const useCreateDevice = () => {
  const history = useHistory()
  const {
    userInfo: { token },
  } = useContext(AuthContext)

  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    code: '',
    model: '',
    vendor: '',
    os: '',
    osVersion: '',
    image: '',
  })

  const handleSubmit = (event, setSubmitStages) => {
    event.preventDefault()

    if (formData.vendor === '') {
      setError('Vyberte prosím Výrobce')
    } else if (formData.os === '') {
      setError('Vyberte prosím Operační systém')
    } else {
      setSubmitStages(AUTHENTICATION.authenticating)

      addPhoneRequest({
        token,
        formData,
      })
        .then(() => {
          setSubmitStages(AUTHENTICATION.authenticated)
          setError(null)
          history.push('/devices')
        })
        .catch(({ error }) => {
          setError(error)
          setSubmitStages(AUTHENTICATION.unauthenticated)
        })
    }
  }

  return {
    handleSubmit,
    formData,
    setFormData,
    error,
  }
}

export default useCreateDevice
