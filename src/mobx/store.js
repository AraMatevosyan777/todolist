import { makeAutoObservable } from "mobx"

class todoList {
    list = [
        {id: 1, text: 'blablabla', isDone: false},
        {id: 2, text: 'blablabla', isDone: false},
        {id: 3, text: 'blablabla', isDone: false},
        {id: 4, text: 'blablabla', isDone: false},
        {id: 5, text: 'blablabla', isDone: false},
      ]

    constructor() {
        makeAutoObservable(this)
    }

    edit(id, text) {
        this.list = this.list.map(el => {
            if(el.id === id){
                el.text = text
                return el
            }
            return el
        })
    }
    delete(id) {
        this.list = this.list.filter(el => el.id !== id)
    }
    add(value) {
        let newToDo = {
            id: this.list.length + 1,
            text: value,
            isDone: false
          }
        this.list.push(newToDo)
    }
    toggle(id) {
        this.list.map(el => {
            if(el.id === id){
                el.isDone = !el.isDone
                return el
            }
            return el
        })
    }
}

export default new todoList()
