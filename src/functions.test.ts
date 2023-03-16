import { describe, it, expect, afterEach } from 'vitest'
import { addTodo, toggleTodo, deleteTodo } from './functions'
import { Todo } from './types/Todo'

let todos: Todo[] = []

const newTodoTitle = 'Learn Unit Testing'
const emptyTodoTitle = ''
const shortTodoTitle = 'Le'

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

	it.todo('should toggle a todo', () => {
	})

    it.todo('should not toggle a todo that does not exist', () => {
	})

})

/**
 * Delete todo
 */
describe('delete todo', () => {

	it.todo('should delete a todo', () => {
	})

    it.todo('should not delete a todo that does not exist', () => {
	})

})
