import { FC, useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Create: FC = () => {
  const [data, setData] = useState("");
  return (
    <Container className="container">
      <Content>
        <h1 className="title">Create new post</h1>
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onChange={(_, editor: any) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      </Content>
    </Container>
  );
};

export default Create;

const Container = styled.div`
  padding: 40px 20px;
`;
const Content = styled.div`
  .title {
    font-size: 20px;
    color: var(--title-color);
    font-family: var(--font-medium);
    font-weight: normal;
    margin-bottom: 20px;
  }

  .ck-editor {
    background: none;

    .ck-editor__top {
      .ck-sticky-panel {
        .ck-sticky-panel__content {
          .ck-toolbar_grouping {
            background: none;
            border-radius: 50px;
            border-color: var(--border-color-light) !important;
            border-bottom: 1px solid var(--border-color-light);

            .ck-icon {
              color: var(--text-color);
            }

            .ck-input {
              background: var(--element-background-hover);
              color: var(--text-color);
            }

            .ck-dropdown__panel {
              background: var(--element-background);

              .ck-insert-table-dropdown__label {
                color: var(--text-color);
              }

              .ck-labeled-field-view__status {
                color: var(--text-color);
              }
            }

            .ck-button {
              &:hover {
                background: var(--element-background-hover);
                cursor: pointer;
              }

              &.ck-on {
                background: var(--element-color);
              }
            }

            .ck-button__label {
              color: var(--text-color);
            }

            .ck-button_with-text {
              background: var(--main-background);
              outline: none;

              &[aria-checked="true"] {
                background: var(--element-color);
              }
            }
          }
        }
      }
    }

    .ck-content {
      background: none;
      padding-left: 0;
      padding-right: 0;
      border: none;
      border-bottom: 1px solid var(--border-color) !important;
      border-radius: 0 !important;
      font-size: 14px;

      * {
        font-size: var(--font-regalar);
        color: var(--text-color);
      }

      &.ck-focused {
        border: none;
        border-bottom: 1px solid var(--border-color-light) !important;
      }

      ul {
        list-style: decimal;
      }
    }
  }
`;
