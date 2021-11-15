import * as yup from 'yup'
import Vue from 'vue'

const schemaAll = yup.object().shape({
  // accountRequired: yup.string().required(),
  // accountFormat: yup.string().email(),
  account: yup.string().required(),
  password: yup.string().required(),
  settingPassword: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=^.{8,15}$)/)
})

// yup.setLocale({
//   mixed: {
//     default: '格式不對'
//   }
// })

Vue.prototype.$validate = async (field, userInput) => {
  userInput = await schemaAll.fields[field].ensure(userInput).cast(userInput)
  // const result = await schemaAll.fields[field].isValid(userInput)
  const result = await schemaAll.validateAt(field, userInput)
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
