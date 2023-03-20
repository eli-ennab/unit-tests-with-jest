import { describe, it, expect, afterEach } from 'vitest'
import { addTodo, toggleTodo, deleteTodo } from './functions'
import { Todo } from './types/Todo'

let todos: Todo[] = []

const todo: Todo = {
	id: 1,
	title: 'My test todo',
	completed: false,
}

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
        const result = addTodo(todo.title, todos)

        // can add a todo
        expect(todos).toContainEqual(todo)

        // has successfully added a todo
        expect(result.success).toBe(true)

        // the list is not still empty
        expect(todos.length).toBe(1)

        // confirm that the added todo is the todo that was sent in
        expect(todos[0]).toEqual(todo)
	})

    it('should not add a todo with empty title', () => {
        const result = addTodo(emptyTodoTitle, todos)

        // has *NOT* successfully added a todo
        expect(result.success).toBe(false)

        // the error is because the title is empty
        expect(result.error).toBe('Title cannot be empty')

        // confirm that the empty todo is not added (and that the list is still empty)
        expect(todos).toEqual([])
        expect(todos.length).toBe(0)
	})

    it('should not add a todo with title shorter than 3 characters', () => {
        const result = addTodo(shortTodoTitle, todos)

        // has *NOT* successfully added a todo
        expect(result.success).toBe(false)

        // the error is because the title is less than three chars
        expect(result.error).toBe('Title must be at least 3 characters long')

        // confirm that the too short todo is not added (and that the list is still empty)
        expect(todos).toEqual([])
        expect(todos.length).toBe(0)
	})
})

/**
 * Toggle todo
 */
describe('toggle todo', () => {

    const todos = [todo]

	it('should toggle a todo', () => {
        const result = toggleTodo(todo.id, todos)

        // has successfully toggled a todo
        expect(result.success).toBe(true)

        // confirm that the todo toggled (to completed true)
        expect(todo.completed).toBe(true)
	})

    it('should not toggle a todo that does not exist', () => {
        const result = toggleTodo(1337, todos)

        // has *NOT* successfully toggled a todo
        expect(result.success).toBe(false)

        // the error is because the todo is not found
        expect(result.error).toBe('Todo not found')
	})
})

/**
 * Delete todo
 */
describe('delete todo', () => {

    const todos = [todo]

	it('should delete a todo', () => {
        const result = deleteTodo(todo.id, todos)

        // has successfully deleted a todo
        expect(result.success).toBe(true)

        // make sure the todo is deleted
        expect(todos.length).toBe(0)

        // .. and that it is the exact todo that is deleted
        expect(todo.id).toBe(1)
        expect(todos).not.toContainEqual(todo)
	})

    it('should not delete a todo that does not exist', () => {
        const result = toggleTodo(1337, todos)

        // has *NOT* successfully deleted a todo
        expect(result.success).toBe(false)

        // the error is because the todo is not found
        expect(result.error).toBe('Todo not found')
	})
})
