import { StatesController, controller, store } from '../Others/StatesController'

export const doSomething = () => {
    controller.decrease()
    console.log(`SS: ${controller.counter}`)
}