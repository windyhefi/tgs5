import {api} from '../../axios'

export const questionsAmount = async(amount) =>{
   const questions = await api.get('/',{params:{
      amount
   }}}

   retuen questions.data
}
