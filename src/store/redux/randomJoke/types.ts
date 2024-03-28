export interface JokeInfo {
  id: string
  answer: string
  question: string
}

export interface JokeResponse {
  type: string
  setup: string
  punchline: string
  id: number
}

export interface RandomJokeState {
  data: JokeInfo[]
  status: "default" | "loading" | "success" | "error"
  error: any
}
