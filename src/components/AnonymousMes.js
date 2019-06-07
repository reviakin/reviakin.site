import React, { useState } from 'react'

export default function AnonymousMes({
    myMessage = 'Two and two are five?',
    ...props
} = {}) {

    var [message, setMessage] = useState(myMessage)
    var [messages, setMessages] = useState([])

    function handleChangeMes(event) {
        setMessage(event.target.value)
    }

    function submitMes(event) {
        event.preventDefault()
        var oldMessages = [...messages]
        var updateMessages = [
            ...oldMessages,
            message
        ]
        setMessages(updateMessages)
        setMessage('')
    }

    return (
        <div>
            <form>
                <label>
                    anonymous message
                    <input
                        type="text"
                        value={message}
                        placeholder='What do you think?'
                        onChange={handleChangeMes}
                    />
                </label>
                <button onClick={submitMes}> Submit</button>
            </form>
        </div >
    )
}