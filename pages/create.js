"use client"; // This is a client component



import { useState } from "react";



function Create() {

    const [newTodo, setNewTodo] = useState("");

    function handleChange(e) {

        setNewTodo(e.target.value);

    }

    function postNewTodo() {

        const todoObject = {

            userId: 1,

            title: newTodo,

            completed: false,

        };

        fetch("jsonplaceholder.typicode.com/posts", {

            method: "POST",

            body: JSON.stringify(todoObject),

            headers: {

                "Content-type": "application/json; charset=UTF-8",

            },

        })

            .then((response) => response.json())

            .then((json) => console.log(json));

    }



    return (

        <>

            <input type="text" onChange={(e) => handleChange(e)} />

            <button type="button" onClick={() => postNewTodo()}>

                Guardar

            </button>

        </>

    );

}



export default Create;