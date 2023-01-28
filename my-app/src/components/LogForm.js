import React from "react";
import { Form, Container } from "semantic-ui-react";


function LogForm(){

    const genres = [
        { key: "f", text: "Fiction", value: 'fiction' },
        { key: "ps", text: "Psychology / Sociology", value: "psychSoc" },
        { key: "pr", text: "Philosophy / Religion", value: "philRel"},
        { key: "be", text: "Business / Economics", value: "bizEcon"}
      ]

    return (
        <div>
            <Container>
                <h1>Create New Log</h1>
                <Form>
                    <Form.Group >
                        <Form.Input fluid label="Title" placeholder="Title" />
                        <Form.Input fluid label="Author" placeholder="Author" />
                        <Form.Input fluid label="URL" placeholder="URL" />
                        <Form.Select
                            fluid
                            label="Genre"
                            options={genres}
                            placeholder='Genre'
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
                        <Form.Field label="Thoughts" placeholder="My Thoughts" control='textarea' rows='3' />
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )

}
export default LogForm;