/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface ThreadTransaction {
  uid: number
  order: number
  fee: number
  weight: number
  sigops: number
  effectiveFeePerVsize: number
  inputs: Array<number>
}
export class GbtGenerator {
  constructor()
  /**
   * # Errors
   *
   * Rejects if the thread panics or if the Mutex is poisoned.
   */
  make(mempool: Array<ThreadTransaction>, maxUid: number): Promise<GbtResult>
  /**
   * # Errors
   *
   * Rejects if the thread panics or if the Mutex is poisoned.
   */
  update(newTxs: Array<ThreadTransaction>, removeTxs: Array<number>, maxUid: number): Promise<GbtResult>
}
/**
 * The result from calling the gbt function.
 *
 * This tuple contains the following:
 *        blocks: A 2D Vector of transaction IDs (u32), the inner Vecs each represent a block.
 * block_weights: A Vector of total weights per block.
 *      clusters: A 2D Vector of transaction IDs representing clusters of dependent mempool transactions
 *         rates: A Vector of tuples containing transaction IDs (u32) and effective fee per vsize (f64)
 */
export class GbtResult {
  blocks: Array<Array<number>>
  blockWeights: Array<number>
  clusters: Array<Array<number>>
  rates: Array<Array<number>>
  constructor(blocks: Array<Array<number>>, blockWeights: Array<number>, clusters: Array<Array<number>>, rates: Array<Array<number>>)
}
