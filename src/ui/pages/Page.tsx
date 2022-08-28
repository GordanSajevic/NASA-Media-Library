import * as React from "react";

export interface PageProps {
  children?: any;
  title?: string;
}

export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  render() {
    const { children, title } = this.props;
    return (
        <div className="main">
            <div className='content-wrapper'>
                <h3>{title}</h3>
                {children}
            </div>
      </div>
    );
  }
}

export default Page;
