
interface Todo {
    title: string;
    description: string;
    id: number;
    done: boolean;
}

type UpdateTodoInput = Partial<Todo>;

function UpdateTodoInput(id: number, newProps: )

const newProps = {
    title: "go to gym";
}