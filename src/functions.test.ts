import { describe, it, expect, afterEach } from 'vitest'
import { addTodo, toggleTodo, deleteTodo } from './functions'
import { Todo } from './types/Todo'

let todos: Todo[] = []

const newTodoTitle = 'Learn Unit Testing'
const emptyTodoTitle = ''
const shortTodoTitle = 'Le'

const todo: Todo = {
	id: 1,
	title: 'My test todo',
	completed: false,
}

/**
 * Add todo
 */
describe('add todo', () => {

    afterEach(() => {
		todos = []
	})

	it('should add a todo', () => {
        const result = addTodo(newTodoTitle, todos)

        // can add a todo
        expect(todos).toContainEqual({ title: newTodoTitle, id: 1, completed: false })

        // has successfully added a todo
        expect(result.success).toBe(true)

        // the list is not still empty
        expect(todos.length).toBe(1)

        // the todo added is the todo that was sent in

	})

    it('should not add a todo with empty title', () => {
        const result = addTodo(emptyTodoTitle, todos)

        // result could not be added
        expect(result.success).toBe(false)

        // result could not be added because title was empty
        expect(result.error).toBe('Title cannot be empty')

        // the list is still empty
        expect(todos).toEqual([])
	})

    it('should not add a todo with title shorter than 3 characters', () => {
        const result = addTodo(shortTodoTitle, todos)

        // todo could not be added
        expect(result.success).toBe(false)

        // result could not be added because title was less than three chars
        expect(result.error).toBe('Title must be at least 3 characters long')

        // the list is still empty
        expect(todos).toEqual([])
	})

})

/**
 * Toggle todo
 */
describe('toggle todo', () => {

	it('should toggle a todo', () => {
        const todos = [todo]
        const result = toggleTodo(todo.id, todos)

        // successful toggling
        expect(result.success).toBe(true)

        // it toggled
        expect(todo.completed).toBe(true)
	})

    it('should not toggle a todo that does not exist', () => {
        const todos = [todo]
        const result = toggleTodo(2, todos)

        // *NOT* successful toggling
        expect(result.success).toBe(false)

        // it *DID NOT* toggle because the todo was not found
        expect(result.error).toBe('Todo not found')
	})

})

/**
 * Delete todo
 */
describe('delete todo', () => {

	it.todo('should delete a todo', () => {
        //

        //
	})

    it.todo('should not delete a todo that does not exist', () => {
        //

        //
	})

})
