import { state, action, createStore } from 'usm-redux';

export class Controller {
    @state
    states = {
        counter: 0
    }

    @action
    increase() {
        this.states.counter += 1;
    }

    @action
    decrease() {
        this.states.counter -= 1;
    }
}

export const controller = new Controller();

export const store = createStore({
    modules: [controller],
});