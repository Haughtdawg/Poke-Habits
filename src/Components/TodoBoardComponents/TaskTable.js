import { TaskListItem } from './TaskListItem.js';



export function TaskTable( { infoomation }){

    const rowInfo = infoomation.map((e) => <TaskListItem pointAmt= {e.pointAmt} title= {e.title} key= {e.iD.toString()} />);

    return(
        
            <div>
                {rowInfo}
            </div>

    )

}