import * as React from 'react';
import SidebarButton from './Buttons/SidebarButton';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Sidebar.scss';

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
        </section>
    );
}

export interface SidebarProps {
    onCustomIdeaClick():void;
    onAutoClick():void
}
