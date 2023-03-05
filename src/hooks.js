import {useEffect, useState} from 'react'

import {questionsAmount} from './fetcher'
import { useQuery } from '@tanstack/react-query'

export const useQuestionsAmount = ({amount}) =>{
   return useQuery({
       querykey:['qustion-amount',amount),
       queryFn:(params) => questionsAmount(amount)
   })
