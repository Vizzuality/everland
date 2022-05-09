export type ApiError = {
  error: string
  message: string
  statusCode: number
  code: Errors
}

export type PaginatedResponse<Resource, Key extends string> = {
  page: number
  total: number
} & {
  [key in Key]: Resource[]
}

export const enum Errors {
  DISCOUNT_NOT_FOUND = 'DISCOUNT_NOT_FOUND',
  MEAL_PLAN_MINIMUM_DOSE_NOT_SATISFIED_ERROR = 'MEAL_PLAN_MINIMUM_DOSE_NOT_SATISFIED_ERROR',
  SUBSCRIPTION_NOT_EXTERNALLY_UPDATABLE_ERROR = 'SUBSCRIPTION_NOT_EXTERNALLY_UPDATABLE_ERROR',
}
