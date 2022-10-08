import { Play } from 'phosphor-react'
import {
  MinutesAmountInput,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Sparator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Working on</label>
          <TaskInput id="task" placeholder="Type your task name" />

          <label htmlFor="">duration</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />

          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Sparator>:</Sparator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton type="submit">
          <Play size={24} />
          Start
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
