import * as yup from 'yup'
import Vue from 'vue'

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

Vue.prototype.$validate = async (field, userInput) => {
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

Vue.prototype.$mulPwdVal = async (userInput) => {
  const conditions = yup.object().shape({
    length: yup.string().matches(/(?=^.{8,15}$)/),
    case: yup.string().matches(/(?=.*[a-z](?=.*[A-Z]))/),
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
