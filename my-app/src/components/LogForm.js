import React from "react";
import { Button, Form, Container, Segment } from "semantic-ui-react";


function LogForm( { mode }){
    function handleSubmit(event) {
        const newLogData = {
            title: event.target[0].value,
            author: event.target[1].value,
            url: event.target[2].value,
            genre: event.target[3].value,
            category:event.target[4].value,
            thoughts: event.target[5].value
        }

        onSubmit(newLogData)
    }

    const genres = [
        { key: "f", text: "Fiction", value: 'fiction' },
        { key: "ps", text: "Psychology / Sociology", value: "psychSoc" },
        { key: "pr", text: "Philosophy / Religion", value: "philRel"},
        { key: "be", text: "Business / Economics", value: "bizEcon"}
      ]

    return (
        <div>
            {mode ? <Container>
                    <Segment inverted>
                    <h1>Create New Log</h1>
                    <Form inverted onSubmit={handleSubmit}>
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
                            />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Category</label>
                                <Form.Radio
                                    label="Book"
                                    value='bo'
                                />
                                <Form.Radio
                                    label="TedTalk / Podcast"
                                    value='tp'
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
                <Form onSubmit={handleSubmit}>
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
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Category</label>
                            <Form.Radio
                                label="Book"
                                value='bo'
                            />
                            <Form.Radio
                                label="TedTalk / Podcast"
                                value='tp'
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