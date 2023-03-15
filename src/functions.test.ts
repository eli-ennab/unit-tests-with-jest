import { describe, it, expect } from 'vitest'
import { addTodo, toggleTodo, deleteTodo } from './functions'

/**
 * Add todo
 */
describe('add todo', () => {

    const newTodo = 'Learn Unit Testing'
    const emptyTodo = ''
    const shortTodo = 'Le'

	it('should add a todo', () => {
        const todos: any = []
        addTodo(newTodo, todos)
        expect(todos).toContainEqual({ title: newTodo, id: 1, completed: false })
	})

    it('should not add a todo with empty title', () => {
        const todos: any = []
        addTodo(emptyTodo, todos)
        expect(todos).toEqual([])
	})

    it('should not add a todo with title shorter than 3 characters', () => {
        const todos: any = []
        addTodo(shortTodo, todos)
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
