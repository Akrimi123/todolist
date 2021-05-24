import React from 'react'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

const List = (props) => {
    const items = props.items;
    const list = items.map(item =>{
        return <div className="list" key={item.key}>
    <p>
        <input type="text" id={item.key} value={item.text} onChange={(e)=>{
            props.edit(e.target.value,item.key)}}/>
        <span>

        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
        
    </p>
    </div>
    })
    return(
        <div>
            <FlipMove duration={700} easing="ease-in-out">
                {list}
            </FlipMove>
        </div>
    )
}
export default List ;