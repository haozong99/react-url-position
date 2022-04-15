import imgUrl from '../assets/链接.png'
import {data} from './data';
import './style.css'
const {useState} = React
function Title(props){
    const [img , setImg] = useState(imgUrl)
    const setUrl = (kkey) =>{
        console.log(2);
        var homeUrl = document.URL;
        const state = { 'page_id': 1, 'user_id': 5 }
        const title = ''
        const url = ''

        history.pushState(state, title, url)
    }
    return <div>
        <div className='title' onClick={setUrl(props.title)}>
            <img src={img}/>
            <h1>
            {props.title}
            </h1>
        </div>
            <p>
            {props.content}
            </p>
    </div>

}

function CP(){
    return <div>
        {data.map(item=>{
           return <Title title={item.title} content={item.content} key={item.title}/>
            })}
        </div>
}

ReactDOM.render(
    <CP></CP>,
    document.getElementById("root")
)