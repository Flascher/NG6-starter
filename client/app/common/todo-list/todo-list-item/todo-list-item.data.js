export default function(task, completed = false) {
    return {
        task: task || '',
        completed: completed
    };
};
