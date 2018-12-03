import * as React from 'react';
import SidebarButton from './Buttons/SidebarButton';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Sidebar.scss';
import {FormGroup, Label, Input, FormText, Form} from 'reactstrap';

export default function Sidebar(props: SidebarProps) {
    return (
        <section className="side-bar">
            <ListGroup>
                <SidebarButton onIconClick={props.onCustomIdeaClick}>
                    Add Custom idea
                </SidebarButton>
                <SidebarButton onIconClick={props.onAutoClick}>
                    Add Auto-generated idea
                </SidebarButton>
            </ListGroup>
            <Form>
            <FormGroup>
          <Label for="exampleFile" alignment="center">Upload Project File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
          Already got a brainstorm going? Upload it here to continue working!
          </FormText>
            </FormGroup>
            </Form>

        </section>
    );
}

export interface SidebarProps {
    onCustomIdeaClick():void;
    onAutoClick():void
}
