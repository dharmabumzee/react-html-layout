import React, { ReactNode } from "react";
import styled from "styled-components";
import { EmptyBox } from "../empty-box";
import "./index.scss";
import { Header } from "../header";
import classnames from "classnames";

// const Wrapper = styled.div`
//   padding: 10px;
//   color: red;
// `;

// export interface LayoutProps {
//   text?: string;
// }

// export const Layout: React.FC<LayoutProps> = ({ text }) => <Wrapper>{text ? text : "Test Component 2"}</Wrapper>;

export interface LayoutProps {
    header?: ReactNode;
    footer?: ReactNode;
    sidebar?: ReactNode;
    fixedHeader?: boolean;
    fixedHeaderHeigth?: number;
}

const DEFAULT_HEADER_HEIGHT: number = 50;

export class Layout extends React.PureComponent<LayoutProps> {
    public render(): React.ReactNode {
        const { children, header, footer, sidebar, fixedHeader, fixedHeaderHeigth } = this.props;
        const rootStyle: React.CSSProperties = {};
        if (fixedHeader === true) {
            rootStyle.paddingTop = fixedHeaderHeigth || DEFAULT_HEADER_HEIGHT;
        }
        return (
            <div className={classnames("layout")} style={rootStyle}>
                <Header fixed={fixedHeader} fixedHeigth={fixedHeaderHeigth || DEFAULT_HEADER_HEIGHT}>
                    {header}
                </Header>
                <div className="layout__body">
                    <div className="layout__body__sidebar">
                        {sidebar === "" ? <EmptyBox>Sidebar</EmptyBox> : <div>{sidebar}</div>}
                    </div>
                    <div className="layout__body__content">
                        {children ? <div>{children}</div> : <EmptyBox>Content</EmptyBox>}
                    </div>
                </div>
                <div className="layout__footer">{footer ? <div>{footer}</div> : <EmptyBox>Footer</EmptyBox>}</div>
            </div>
        );
    }
}
