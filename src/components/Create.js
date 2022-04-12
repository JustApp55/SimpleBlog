import '../App.css'
import {createBlog} from '../services/getApis'
import {useNavigate} from 'react-router-dom'

export default function Create() {
    const nav = useNavigate()
    const createTheBlog = e => {
        const blog = {
            title: e.target.title.value,
            author: e.target.author.value,
            body: e.target.body.value,
        }
        console.log(blog)
        createBlog(blog)
        nav('/')
    }

    return (
        <div>
             <h1 className="crb">Create Blog</h1>
            <form onSubmit={createTheBlog} id="eblog">
                Title: <input type="text" name="title" /> <br/>
                Author: <input type="text" name="author" /> <br/> 
                Body: <input type="text" name="body" />  <br/> <br/>
                    <input type='submit' value='New Blog' />
            </form>           
        </div>
    )
}

