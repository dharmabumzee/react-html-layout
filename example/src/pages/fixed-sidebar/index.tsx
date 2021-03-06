import React from "react";
import "./index.scss";
import { Layout } from "../../react-html-layout";
import { Sidebar } from "../../components/sidebar";
import { Content } from "../../components/content";

export class FixedSidebar extends React.PureComponent {
  public render(): React.ReactNode {
    return (
      <Layout sidebar={<Sidebar />}>
        <Content />
      </Layout>
    );
  }
}
