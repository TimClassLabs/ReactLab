import { FC, useState } from "react";
import { Priority } from "./ToDoItem";

export const Editor : FC =()=> {
  const [title,setTitle] = useState<string>('');
  const [priority,setPriority] = useState<Priority>(Priority.LOW);
  const [assignee,setAssignee] = useState<string>('');

  const handleTitleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {setTitle(e.target.value);};
  const handlePriorityChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {setPriority(parseInt(e.target.value));};
  const handleAssigneeChange:React.ChangeEventHandler<HTMLSelectElement> = (e) => {console.log(e.target.value);};
  
  return(
    <div className="box">
      <div className="field">
        <div className="control">
          <input type="text" className="input" placeholder="title" value={title} onChange={handleTitleChange}/> 
          {/* 也可以省略上面的handleTitleChange (event function) 直接寫在html內 */}
          {/* <input type="text" className="input" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>     */}
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <div className="control">
              {
                Object.entries(Priority)
                .filter(([k,v]) => isNaN(k as any))
                .map(([k,v]) => 
                  <label className="radio" key={k}>
                    <input type="radio" checked={priority===v} value={v} onChange={handlePriorityChange}/> {" " + k} 
                  </label>
                )
              }
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <div className="select">
                <select onChange={handleAssigneeChange}>
                  <option value="">assign to</option>
                  <option value="alax">alax</option>
                  <option value="bob">bob</option>
                  <option value="chris">chris</option>
                  <option value="david">david</option>
                  <option value="ed">ed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="content"/>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="checkbox"><input type="checkbox"/> Resolved </label>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <div className="buttons has-addons">
                <button className="button is-link" onClick={()=>console.log(title)}> Save </button>
                <button className="button is-link is-light"> Cancel </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}