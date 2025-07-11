import { useState } from "react"

const Todo = () => {
    const [list, setList] = useState([{ id: 1, desc: "Laundry" }])

    const [text, setText] = useState("")
    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {item.desc}{" "}
                        <button
                            onClick={() =>
                                setList(list.filter((i) => i.id !== item.id))
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add Input"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    const id = crypto.randomUUID()
                    setList([...list, { id, desc: text }])
                    setText("")
                }}
            >
                Submit
            </button>
        </>
    )
}

export default Todo
