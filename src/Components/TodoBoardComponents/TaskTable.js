import { TaskListItem } from './TaskListItem.js';

//need to store and call info from a json file
//need pointsAggregate.js
export function TaskTable(){
    const callJson = [{iD: 0, pointAmt: 999, title: "Did it work"}, {iD: 1, pointAmt: -50, title: "who knows"}, {iD: 0, pointAmt: 0, title: "I know"}];
    const rowInfo = callJson.map((e) => <TaskListItem pointAmt= {e.pointAmt} title= {e.title} />);
    return(
        
            <div>
                {rowInfo}
            </div>

    )

}