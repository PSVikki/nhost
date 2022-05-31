import {
  BackendOrSubdomain,
  NhostAuthConstructorParams,
  NhostClient as VanillaClient
} from '@nhost/nhost-js'

export type NhostReactClientConstructorParams = BackendOrSubdomain &
  Omit<NhostAuthConstructorParams, 'url' | 'start' | 'client'>

export class NhostClient extends VanillaClient {
  constructor(params: NhostReactClientConstructorParams) {
    super({ ...params, start: false })
  }
}
