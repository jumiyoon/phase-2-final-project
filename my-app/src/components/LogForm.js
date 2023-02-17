import React, { useState } from "react";
import { Button, Form, Container, Segment } from "semantic-ui-react";


function LogForm( { mode, onFormSubmit }){
    const [ form, setForm ] = useState({
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        genre: "Fiction",
        category: "Book",
        url: "https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea",
        thoughts: "This was interesting..."
    })

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        
        if (event.target.name === undefined) {
            name = "genre"
            value = event.target.textContent;
        }
        setForm({
            ...form,
            [name]: value});
    }

    function handleSubmit(event) {
        console.log(form);
        onFormSubmit(form);
        alert("New Log Submitted!")
    }

 
    const genres = [
        { key: "f", text: "Fiction", value: 'Fiction' },
        { key: "ps", text: "Psychology / Sociology", value: "Psychology / Sociology" },
        { key: "pr", text: "Philosophy / Religion", value: "Philosophy / Religion"},
        { key: "be", text: "Business / Economics", value: "Business / Economics"}
    ]

    return (
        <div>
            {mode ? <Container>
                    <Segment inverted>
                    <h1>Create New Log</h1>
                    <Form size="large" inverted onSubmit={handleSubmit} autoComplete="off">
                        <Form.Group >
                            <Form.Input fluid label="Title" placeholder="Title" name="title" width={5} onChange={handleChange} />
                            <Form.Input fluid label="Author" placeholder="Author" name="author" width={5} onChange={handleChange} />
                            <Form.Input fluid label="URL" placeholder="URL" name="url" width={10} onChange={handleChange} />
                            <Form.Select
                                fluid
                                label="Genre"
                                name="genre"
                                options={genres}
                                placeholder='Genre'
                                width={7}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group inline>
                        <label>Category</label>
                        <Form.Field
                            label='Book'
                            control='input'
                            type='radio'
                            name='category'
                            value="Book"
                            onChange={handleChange}
                        />
                        <Form.Field
                            label='TedTalk / Podcast'
                            control='input'
                            type='radio'
                            name='category'
                            value="TedTalk / Podcast"
                            onChange={handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={15} name="thoughts" label="Thoughts" placeholder="My Thoughts" control='textarea' rows='5' onChange={handleChange} />
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                    </Segment>
                </Container> : 
                <Container>
                <h1>Create New Log</h1>
                    <Form size="large" onSubmit={handleSubmit} autoComplete="off">
                        <Form.Group >
                            <Form.Input fluid label="Title" placeholder="Title" name="title" width={5} onChange={handleChange} />
                            <Form.Input fluid label="Author" placeholder="Author" name="author" width={5} onChange={handleChange} />
                            <Form.Input fluid label="URL" placeholder="URL" name="url" width={10} onChange={handleChange} />
                            <Form.Select
                                fluid
                                label="Genre"
                                name="genre"
                                options={genres}
                                placeholder='Genre'
                                width={7}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group inline>
                        <label>Category</label>
                        <Form.Field
                            label='Book'
                            control='input'
                            type='radio'
                            name='category'
                            value="Book"
                            onChange={handleChange}
                        />
                        <Form.Field
                            label='TedTalk / Podcast'
                            control='input'
                            type='radio'
                            name='category'
                            value="TedTalk / Podcast"
                            onChange={handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={15} name="thoughts" label="Thoughts" placeholder="My Thoughts" control='textarea' rows='5' onChange={handleChange} />
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
            </Container>
            }
        </div>
    )

}
export default LogForm;