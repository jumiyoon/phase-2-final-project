import React, { useState } from "react";
import { Button, Form, Container, Segment } from "semantic-ui-react";


function LogForm( { mode, onNewLogSubmit }){
    function handleSubmit(event) {
        const newLogData = {
            title: event.target[0].value,
            author: event.target[1].value,
            url: event.target[2].value,
            genre: genre,
            category: category,
            thoughts: event.target[5].value
        }
        console.log(newLogData);
        onNewLogSubmit(newLogData)

    }

    const genres = [
        { key: "f", text: "Fiction", value: 'Fiction' },
        { key: "ps", text: "Psychology / Sociology", value: "Psychology / Sociology" },
        { key: "pr", text: "Philosophy / Religion", value: "Philosophy / Religion"},
        { key: "be", text: "Business / Economics", value: "Business / Economics"}
    ]

    const [ genre, setGenre ] = useState("")
    function handleGenre(e) {
        setGenre(e.target.textContent)
    }

    const [ category, setCategory ] = useState("")

    function handleCategory(category) {
        setCategory(category)
    }


    return (
        <div>
            {mode ? <Container>
                    <Segment inverted>
                    <h1>Create New Log</h1>
                    <Form size="large" inverted onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Input fluid label="Title" placeholder="Title" width={5}/>
                            <Form.Input fluid label="Author" placeholder="Author" width={5} />
                            <Form.Input fluid label="URL" placeholder="URL" width={10} />
                            <Form.Select
                                fluid
                                label="Genre"
                                options={genres}
                                placeholder='Genre'
                                width={7}
                                onChange={handleGenre}
                            />
                        </Form.Group>
                        <Form.Group inline>
                        <label>Category</label>
                        <Form.Field
                            label='Book'
                            control='input'
                            type='radio'
                            name='Book'
                            onChange={()=>handleCategory("Book")}
                        />
                        <Form.Field
                            label='TedTalk / Podcast'
                            control='input'
                            type='radio'
                            name='Book'
                            onChange={()=>handleCategory("TedTalk / Podcast")}
                        />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field width={15} label="Thoughts" placeholder="My Thoughts" control='textarea' rows='5' />
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                    </Segment>
                </Container> : 
                <Container>
                <h1>Create New Log</h1>
                <Form size="large" onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Input fluid label="Title" placeholder="Title" width={5}/>
                        <Form.Input fluid label="Author" placeholder="Author" width={5} />
                        <Form.Input fluid label="URL" placeholder="URL" width={10} />
                        <Form.Select
                            fluid
                            label="Genre"
                            options={genres}
                            placeholder='Genre'
                            width={7}
                            onChange={handleGenre}
                        />
                    </Form.Group>
                    <Form.Group inline>
                    <label>Category</label>
                    <Form.Field
                        label='Book'
                        control='input'
                        type='radio'
                        name='Book'
                        onChange={()=>handleCategory("Book")}
                    />
                    <Form.Field
                        label='TedTalk / Podcast'
                        control='input'
                        type='radio'
                        name='Book'
                        onChange={()=>handleCategory("TedTalk / Podcast")}
                    />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field width={15} label="Thoughts" placeholder="My Thoughts" control='textarea' rows='5' />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>}
        </div>
    )

}
export default LogForm;