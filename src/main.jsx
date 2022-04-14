
import {data} from './data';
function Title(props){
    return <div>
            <h1>
            {props.title}
        </h1>
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