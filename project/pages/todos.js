import React from 'react';
import { todos } from '../data/todos';

const Todos = ({data}) => {
    return (
        <div>
            {data.map(todo => <h1 key={todo.id}>{todo.title}</h1>)}
        </div>
    );
};

export default Todos;

export async function getStaticProps(){

    return{
        props:{data:todos}
    }
}