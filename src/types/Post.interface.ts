export interface PostInterface {
    userId: number
    id: number
    title: string
    body: string
  }

  export interface Accumulator {
    [userId: number]: PostInterface[];
  }