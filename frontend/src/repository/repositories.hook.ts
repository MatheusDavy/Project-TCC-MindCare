/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import env from '../configs/enviroment'
import {
  AuthRepository,
  ChatbootRepository,
  ConsultRepository,
  PaymentRepository,
  QuestionaryRepository,
  TreatmentTemplateRepository,
  UserRepository,
  PlansRepository
} from './apis'

export function useRepository () {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL

  return {
    authRepository: useCallback(() => AuthRepository({ baseUrl }), [])(),
    userRepository: useCallback(() => UserRepository({ baseUrl }), [])(),
    consultationRepository: useCallback(() => ConsultRepository({ baseUrl }), [])(),
    treatmentTemplateRepository: useCallback(() => TreatmentTemplateRepository({ baseUrl }), [])(),
    questionaryRepository: useCallback(() => QuestionaryRepository({ baseUrl }), [])(),
    chatbootRepository: useCallback(() => ChatbootRepository({ baseUrl }), [])(),
    paymentRepository: useCallback(() => PaymentRepository({ baseUrl }), [])(),
    plansRepository: useCallback(() => PlansRepository({ baseUrl }), [])()
  }
}
