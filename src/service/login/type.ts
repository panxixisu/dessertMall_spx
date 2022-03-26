export interface ILoginResult {
  accountId: string
  password: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
