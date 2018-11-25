import * as React from 'react';
import { Icon } from '../../../Common';
import { ListGroupItem } from 'reactstrap';

export default class SidebarButton extends React.PureComponent<SidebarButtonProps> {
    public render() {
        return (
            <ListGroupItem>
                <div className="SidebarButton clearfix">
                    {this.props.children}
                    <Icon name="plus-circle" className="pull-right" onClick={this.props.onIconClick} />
                </div>
            </ListGroupItem>
        );
    }
}

export interface SidebarButtonProps {
    onIconClick?: () => void;
}
