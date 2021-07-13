function TaskBanner(props) {
    return (
      <h4 className="bg-primary text-white text-center p-4">
        {props.userName}'s Task App {props.TaskItem.filter((t) => !t.completed).length}
      </h4>
    );
  }
  
  export default TaskBanner;