import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { cx, css } from '@emotion/css';

const Button = forwardRef(
  function Button(
    {
      className,
      active,
      reversed,
      ...props
    },
    ref
  ) {
    return (
      <span
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            cursor: pointer;
            color: ${reversed
              ? active
                ? 'white'
                : '#aaa'
              : active
              ? 'black'
              : '#ccc'};
          `
        )}
      />
    );
  }
);
Button.displayName = 'Button';

const EditorValue = forwardRef(
  function EditorValue(
    {
      className,
      value,
      ...props
    },
    ref
  ) {
    const textLines = value.document.nodes
      .map(node => node.text)
      .toArray()
      .join('\n');
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    );
  }
);
EditorValue.displayName = 'EditorValue';

const Icon = forwardRef(
  function Icon({ className, ...props }, ref) {
    return (
      <span
        {...props}
        ref={ref}
        className={cx(
          'material-icons',
          className,
          css`
            font-size: 18px;
            vertical-align: text-bottom;
          `
        )}
      />
    );
  }
);
Icon.displayName = 'Icon';

const Instruction = forwardRef(
  function Instruction({ className, ...props }, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            white-space: pre-wrap;
            margin: 0 -20px 10px;
            padding: 10px 20px;
            font-size: 14px;
            background: #f8f8e8;
          `
        )}
      />
    );
  }
);
Instruction.displayName = 'Instruction';

const Menu = forwardRef(
  function Menu({ className, ...props }, ref) {
    return (
      <div
        {...props}
        data-test-id="menu"
        ref={ref}
        className={cx(
          className,
          css`
            & > * {
              display: inline-block;
            }

            & > * + * {
              margin-left: 15px;
            }
          `
        )}
      />
    );
  }
);
Menu.displayName = 'Menu';

const Portal = function Portal({ children }) {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};
Portal.displayName = 'Portal';

const Toolbar = forwardRef(
  function Toolbar({ className, ...props }, ref) {
    return (
      <Menu
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            position: relative;
            padding: 17px 10px 17px;
            margin: 0 -20px;
            border-bottom: 2px solid #eee;
            margin-bottom: 20px;
          `
        )}
      />
    );
  }
);
Toolbar.displayName = 'Toolbar';

export {
  Button,
  EditorValue,
  Icon,
  Instruction,
  Menu,
  Portal,
  Toolbar
};
