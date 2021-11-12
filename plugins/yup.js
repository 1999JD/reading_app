import * as yup from 'yup'
import Vue from 'vue'

const schema = yup.object().shape({
  account: yup.string().required().email(),
  password: yup.string().required(),
  settingPassword: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/)
})

Vue.prototype.$validate = async (field, userInput) => {
  const result = await schema.fields[field].isValid(userInput)
  return result
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
