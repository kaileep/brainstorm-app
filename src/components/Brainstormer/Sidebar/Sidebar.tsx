import * as React from 'react';
import SidebarButton from './Buttons/SidebarButton';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Sidebar.scss';

export default function Sidebar(props: SidebarProps) {
    return (
        <section className="side-bar">
            <ListGroup>
                <SidebarButton onIconClick={() => alert('Should add custom idea')}>
                    Add Custom idea
                </SidebarButton>
                <SidebarButton onIconClick={() => alert('Should add auto-generated idea')}>
                    Add Auto-generated idea
                </SidebarButton>
                <SidebarButton onIconClick={() => alert('Should add a connection')}>
                    Add Connection
                </SidebarButton>
            </ListGroup>
        </section>
    );
}

export interface SidebarProps {}
