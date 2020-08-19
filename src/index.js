// import Note from '@models/note'
// import Column from '@models/column'
import './styles/common.scss'
import './styles/inputs.scss'
import './styles/column.scss'
import './styles/note.scss'


class Note {
    constructor(id = null, content = '') {

        const element = this.element = document.createElement('div')

        element.classList.add('note')

        element.setAttribute('draggable', 'true')

        const taskPerson = document.createElement('div')
        taskPerson.classList.add('note__person')
        const taskText = document.createElement('textarea')
        element.append(taskPerson)
        element.append(taskText)

        taskText.textContent = content

        if (id) {
            this.element.setAttribute('data-note-id', id)
        }

        else {
            this.element.setAttribute('data-note-id', Note.idCounter)
            Note.idCounter++
        }

        element.addEventListener('dragstart', this.dragstart.bind(this))
        element.addEventListener('dragend', this.dragend.bind(this))
        element.addEventListener('dragenter', this.dragenter.bind(this))
        element.addEventListener('dragover', this.dragover.bind(this))
        element.addEventListener('dragleave', this.dragleave.bind(this))
        element.addEventListener('drop', this.drop.bind(this))

    }

    get column() {
        return this.element.closest('.column')
    }


    dragstart(event) {
        Note.dragged = this.element
        this.element.classList.add('dragged')

        event.stopPropagation()
    }

    dragend(event) {
        event.stopPropagation()

        Note.dragged = null
        this.element.classList.remove('dragged')

        document
            .querySelectorAll('.note')
            .forEach(x => x.classList.remove('under'))



    }
    dragenter(event) {
        event.stopPropagation()

        if (!Note.dragged || this.element === Note.dragged) {
            return
        }
        this.element.classList.add('under')
    }
    dragover(event) {
        event.preventDefault()
        event.stopPropagation()

        if (!Note.dragged || this.element === Note.dragged) {
            return
        }
    }
    dragleave(event) {
        event.stopPropagation()

        if (!Note.dragged || this.element === Note.dragged) {
            return
        }
        this.element.classList.remove('under')
    }
    drop(event) {
        event.stopPropagation()

        if (!Note.dragged || this.element === Note.dragged) {
            return
        }

        if (this.element.parentElement === Note.dragged.parentElement) {
            const note = Array.from(this.element.parentElement.querySelectorAll('.note'))
            const indexA = note.indexOf(this.element)
            const indexB = note.indexOf(Note.dragged)

            if (indexA < indexB) {
                this.element.parentElement.insertBefore(Note.dragged, this.element)
            }

            else {
                this.element.parentElement.insertBefore(Note.dragged, this.element.nextElementSibling)
            }

        }
        else {
            this.element.parentElement.insertBefore(Note.dragged, this.element)
        }
    }
}

Note.idCounter = 0
Note.dragges = null



class Column {
    constructor(id = null) {
        const instance = this

        this.notes = []

        const element = this.element = document.createElement('div')

        element.classList.add('column')
        element.setAttribute('draggable', 'true')

        if (id) {
            element.setAttribute('data-column-id', id)
        }

        else {
            element.setAttribute('data-column-id', Column.idCounter)
            Column.idCounter++
        }


        let columnName = ''

        switch (Column.idCounter) {
            case 1:
                columnName = 'Беклог'
                break
            case 2:
                columnName = 'В работе'
                break
            case 3:
                columnName = 'Выполнена'
                break
            case 4:
                columnName = 'Сдана'
                break
            default:
                columnName = 'Новый столбец'
                break
        }

        element.innerHTML =
            `   
        <div class="column-header__container"><span class="process-icon"></span>
            <p class="column-header" >${columnName}</p>
            <span class="delete-column">x</span>
        </div>
        <div data-notes></div>
        <p class="column-footer">
            <span data-action-addNote class="action"> + </span>
        </p>
        `


        const spanAction_addNote = element.querySelector('[data-action-addNote]')

        spanAction_addNote.addEventListener('click', function (event) {

            const note = new Note
            instance.add(note)

        })


        const headerElement = element.querySelector('.column-header')

        headerElement.addEventListener('dblclick', function (event) {
            headerElement.setAttribute('contenteditable', true)
            headerElement.focus()
            headerElement.classList.add('edit')
        })
        headerElement.addEventListener('blur', function (event) {
            headerElement.removeAttribute('contenteditable', true)
            headerElement.classList.remove('edit')
        })

        element.addEventListener('dragover', this.dragover.bind(this))
        element.addEventListener('drop', this.drop.bind(this))


        const deleteColumn = element.querySelector('.delete-column')

        deleteColumn.addEventListener('click', function (event) {
            deleteColumn.closest('.column').remove()
        })
    }

    add(...notes) {
        for (const note of notes) {
            if (!this.notes.includes(note)) {
                this.notes.push(note)

                this.element.querySelector('[data-notes]').append(note.element)
            }
        }
    }

    dragover(event) {
        event.preventDefault()
    }

    drop() {
        if (Note.dragged) {
            return this.querySelector('[data-notes]').append(Note.dragged)
        }
    }
}

Column.idCounter = 0


document
    .querySelector('[data-action-addColumn]')
    .addEventListener('click', function (event) {
        const column = new Column

        document.querySelector('.columns').append(column.element)

    })

