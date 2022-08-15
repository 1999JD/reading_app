import * as yup from 'yup'

const schemaAccount = yup.object({
  accountRequired: yup.string().required(),
  accountFormat: yup.string().email(),
})

const schemaPassword = yup.object({
  passwordRequired: yup.string().required(),
})

const schemaSetPassword = yup.object({
  passwordRequired: yup.string().required(),
  passwordFormat: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/)
})

const schemaLogin = yup.object({
  account: yup.string().required().email(),
  password: yup.string().required(),
})

const schemaRegister = yup.object({
  account: yup.string().required().email(),
  settingPassword: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/),
  confirmPassword: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/),
})

const schemaReset = yup.object({
  oldPassword: yup.string().required(),
  newPassword: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/),
  cfmPassword: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/),
})

const inputValidate = async (field, userInput) => {
  if (field === 'account') {
    for (const condition in schemaAccount.fields) {
      const result = await schemaAccount.fields[condition].isValid(userInput)
      if (result === false) {
        return condition === 'accountRequired' ? '此欄必填' : '格式錯誤'
      }
    }
  }
  else if (field === 'password') {
    const result = await schemaPassword.fields.passwordRequired.isValid(userInput)
    return result === false ? '此欄必填' : ''
  }
  else if (field === 'setPassword') {
    for (const condition in schemaSetPassword.fields) {
      const result = await schemaSetPassword.fields[condition].isValid(userInput)
      if (result === false) {
        return condition === 'passwordRequired' ? '此欄必填' : '格式錯誤'
      }
    }
  }
}

const mulPwdVal = async (userInput) => {
  const conditions = yup.object().shape({
    length: yup.string().matches(/(?=^.{8,15}$)/),
    case: yup.string().matches(/(?=.*[a-z])(?=.*[A-Z])/),
    hasNumber: yup.string().matches(/(?=.*\d)/),
  })
  const results = []
  for (const condition in conditions.fields) {
    const result = await conditions.fields[condition].isValid(userInput)
    if (!result) {
      results.push(condition)
    }
  }
  return results
}

const allFormValidate = async (field, userInput) => {
  const formSchemas = {
    register: schemaRegister,
    login: schemaLogin,
    reset: schemaReset,
  }
  let result
  await formSchemas[field].isValid(userInput)
    .then(valid => (result = valid))
    .catch(_err => (result = false))
  return result
}

export default ({ store, redirect }, inject) => {
  const userLogin = async (userInfo) => {
    if (!(await allFormValidate('login', userInfo))) {
      alert('格式錯誤，請檢查後再送出')
      return false
    }
    store.dispatch('handleLogin', true)
    redirect({ name: 'index' })
  }

  const validateFunctions = {
    inputValidate,
    mulPwdVal,
    allFormValidate,
    userLogin,
  }

  inject('validateFunctions', validateFunctions)
}