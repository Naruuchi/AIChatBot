import './style/chatbot.css'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'



function  ChatDialog(){

    document.title = 'AI Assistant'
    
    const [UserInput, SetUserInput] = useState('')
    const [UserInputFinal, SetUserInputFinal] = useState('')
    const [questionHistory, setQuestionHistory] = useState([])
    const [chatHistory, setchatHistory] = useState([])

    const bottomOfHistory = useRef(null)
    const bottomOfChat = useRef(null)

    const getAnswer = () => {
        axios.post('http://localhost:5005/webhooks/rest/webhook', {
            "sender" : "User",
            "message": JSON.stringify(UserInputFinal)
        }).then(res => {
            setchatHistory([...chatHistory, {isUser : false, mess: res['data'][0].text}])
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (bottomOfHistory.current)
            {
                bottomOfHistory.current.scrollIntoView()
            }
    }, [questionHistory])

    useEffect(() => {
        if (bottomOfChat.current)
        {
            bottomOfChat.current.scrollIntoView()
        }
    }, [chatHistory])

    useEffect(() => {
        if (UserInputFinal)
        {
            getAnswer(UserInputFinal)
            SetUserInputFinal('')
        }
    },[UserInputFinal])

    return (
        <div className='chatdialog'>
            <div  className="history">
                <div className='historyTitle'><b><p>Chat History</p></b></div>
                <hr width="65%" size="1" color='white'/>
                <div className='chatHistory'>
                    {questionHistory.map(question => { return <b><p className='chatHistoryMess'>{question}</p></b>})}
                    <div ref={bottomOfHistory}></div>
                </div>
            </div>
            <div  className="chatbot">
                <div className='messageView'>
                    {chatHistory.map(content => { 
                        console.log(content.isUser)
                        if (content.isUser === true)
                        {
                            return <b><p className='Message userMess'>{content.mess}</p></b>
                        }
                        return <b><p className='Message botMess'>{content.mess}</p></b>
                    })}
                    <div ref={bottomOfChat}></div>
                </div>
                <input type='text' placeholder='Ask Some Thing ...' 
                    onChange = {event => {SetUserInput(event.target.value)}}
                    onKeyUp = {async (event) => {
                        if (event.key === 'Enter' && UserInput)
                        {
                            SetUserInputFinal(UserInput)
                            setQuestionHistory([...questionHistory, UserInput])
                            setchatHistory([...chatHistory, {isUser : true, mess: UserInput}])
                            SetUserInput('')
                        }
                    }}
                    value={UserInput}
                />
            </div>
        </div>
    )
}

export default ChatDialog;