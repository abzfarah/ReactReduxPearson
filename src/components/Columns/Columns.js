import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.COLUMNS;

export default class Columns extends Component {

  constructor(props, context) {
    super(props, context);
    this._onResize = this._onResize.bind(this);
    this._layout = this._layout.bind(this);
    this.state = { count: 1 };
  }

  componentDidMount () {
    window.addEventListener('resize', this._onResize);
    this._layout();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._onResize);
    clearTimeout(this._layoutTimer);
  }

  _onResize () {
    clearTimeout(this._layoutTimer);
    this._layoutTimer = setTimeout(this._layout, 50);
  }

  _layout () {
    const container = this.refs.container;
    const children = React.Children.toArray(this.props.children);
    let count = 1;
    const child = container.childNodes[0];
    if (child) {
      const rect = container.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const widestCount = Math.floor(rect.width / childRect.width);
      const childrenPerColumn = Math.ceil(children.length / widestCount);
      count = Math.ceil(children.length / childrenPerColumn);
    }

    if (count === 0) {
      count = 1;
    }

    this.setState({ count: count });
  }

  render() {
    let classes = classnames(
      CLASS_ROOT,
      this.props.className,
      {
        [`${CLASS_ROOT}--${this.props.size}`]: this.props.size
      }
    );

    const children = React.Children.toArray(this.props.children);
    const childrenPerColumn = Math.ceil(children.length / this.state.count);
    let groups = [];
    let offset = 0;
    while (groups.length < this.state.count) {
      groups.push(children.slice(offset, offset + childrenPerColumn));
      offset += childrenPerColumn;
    }

    const columns = groups.map((group, index) => (
      <div key={index} className={`${CLASS_ROOT}__column`}>
        {group}
      </div>
    ));

    return (
      <div ref="container" className={classes}>
        {columns}
      </div>
    );
  }
}

Columns.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
