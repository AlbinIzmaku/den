import React, { useCallback, useState } from "react";
import { Editor, Transforms, createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

const CustomEditor = {
  isBoldMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });
    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  isItalicMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.italic === true : false;
  },

  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  },

  isUnderlineMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.underline === true : false;
  },

  toggleUnderlineMark(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "underline");
    } else {
      Editor.addMark(editor, "underline", true);
    }
  },

  isH1MarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.h1 === true : false;
  },

  toggleH1MarkActive(editor) {
    const isActive = CustomEditor.isH1MarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "h1");
    } else {
      Editor.addMark(editor, "h1", true);
    }
  },

  isH2MarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.h2 === true : false;
  },

  toggleH2MarkActive(editor) {
    const isActive = CustomEditor.isH2MarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "h2");
    } else {
      Editor.addMark(editor, "h2", true);
    }
  },
  isOlMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.ol === true : false;
  },

  toggleOlMarkActive(editor) {
    const isActive = CustomEditor.isOlMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "ol");
    } else {
      Editor.addMark(editor, "ol", true);
    }
  },
  isUlMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.ol === true : false;
  },

  toggleUlMarkActive(editor) {
    const isActive = CustomEditor.isOlMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "ul");
    } else {
      Editor.addMark(editor, "ul", true);
    }
  },

  isRightAligned(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.right === true : false;
  },

  toggleRightAlignment(editor) {
    const isActive = CustomEditor.isRightAligned(editor);
    if (isActive) {
      Editor.removeMark(editor, "right");
    } else {
      Editor.addMark(editor, "right", true);
    }
  },
  isCenterAligned(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.center === true : false;
  },

  toggleCenterAlignment(editor) {
    const isActive = CustomEditor.isCenterAligned(editor);
    if (isActive) {
      Editor.removeMark(editor, "center");
    } else {
      Editor.addMark(editor, "center", true);
      Editor.removeMark(editor, "right");
    }
  },

  isLeftAligned(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.left === true : false;
  },

  toggleLeftAlignment(editor) {
    const isActive = CustomEditor.isLeftAligned(editor);
    if (isActive) {
      Editor.removeMark(editor, "left");
    } else {
      Editor.addMark(editor, "left", true);
      Editor.removeMark(editor, "right");
    }
  },
};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const MyPost = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <div>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          Code Block
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(editor);
          }}
        >
          Italic
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleUnderlineMark(editor);
          }}
        >
          Underline
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleH1MarkActive(editor);
          }}
        >
          H1
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleH2MarkActive(editor);
          }}
        >
          H2
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(editor);
          }}
        >
          Cite
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleOlMarkActive(editor);
          }}
        >
          Ol
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleUlMarkActive(editor);
          }}
        >
          Ul
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleRightAlignment(editor);
          }}
        >
          Right
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleCenterAlignment(editor);
          }}
        >
          Center
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            CustomEditor.toggleLeftAlignment(editor);
          }}
        >
          Left
        </button>
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "`": {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }

            case "b": {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }

            case "i": {
              event.preventDefault();
              CustomEditor.toggleItalicMark(editor);
              break;
            }

            case "u": {
              event.preventDefault();
              CustomEditor.toggleUnderlineMark(editor);
              break;
            }

            case "a": {
              event.preventDefault();
              CustomEditor.toggleH1MarkActive(editor);
              break;
            }

            case "s": {
              event.preventDefault();
              CustomEditor.toggleH2MarkActive(editor);
              break;
            }

            case "m": {
              event.preventDefault();
              CustomEditor.toggleRightAlignment(editor);
              break;
            }

            case "o": {
              event.preventDefault();
              Editor.addMark(editor, "ol", true);
              break;
            }

            case "l": {
              event.preventDefault();
              Editor.addMark(editor, "ul", true);
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props) => {
  const { leaf } = props;

  const alignmentStyle = {
    textAlign: leaf.right
      ? "right"
      : leaf.center
      ? "center"
      : leaf.left
      ? "left"
      : "inherit",
  };

  if (leaf.ul) {
    return (
      <ul
        {...props.attributes}
        style={{
          marginLeft: "20px", // Add some margin for better spacing
          fontWeight: leaf.bold ? "bold" : "normal",
          fontStyle: leaf.italic ? "italic" : "normal",
          textDecoration: leaf.underline ? "underline" : "none",
          fontSize: leaf.h1 ? "2em" : leaf.h2 ? "1.5em" : "inherit",
          ...alignmentStyle,
        }}
      >
        <li>{props.children}</li>
      </ul>
    );
  }

  if (leaf.ol) {
    return (
      <ol
        {...props.attributes}
        style={{
          marginLeft: "20px", // Add some margin for better spacing
          fontWeight: leaf.bold ? "bold" : "normal",
          fontStyle: leaf.italic ? "italic" : "normal",
          textDecoration: leaf.underline ? "underline" : "none",
          fontSize: leaf.h1 ? "2em" : leaf.h2 ? "1.5em" : "inherit",
          ...alignmentStyle,
        }}
      >
        <li>{props.children}</li>
      </ol>
    );
  }

  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: leaf.bold ? "bold" : "normal",
        fontStyle: leaf.italic ? "italic" : "normal",
        textDecoration: leaf.underline ? "underline" : "none",
        fontSize: leaf.h1 ? "2em" : leaf.h2 ? "1.5em" : "inherit",
        ...alignmentStyle,
      }}
    >
      {props.children}
    </span>
  );
};

export default MyPost;
