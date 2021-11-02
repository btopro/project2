import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningHeader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'learning-header';
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: transparent;
          color: var(--simple-colors-default-theme-grey-1);
        }
        #headers {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        #main-header {
          font-weight: lighter;
          font-size: 50px;
          margin: 0;
          padding-left: 30px;
        }
        #sub-header {
          font-weight: lighter;
          font-size: 35px;
          margin: 0;
          padding-left: 30px;
        }
      `,
    ];
  }

  render() {
    return html` <div>
      <div id="headers">
        <h2><slot id="main-header" name="main-header">main header</slot></h2>
        <h3><slot id="sub-header" name="sub-header">sub header</slot></h3>
      </div>
    </div>`;
  }
}
customElements.define(LearningHeader.tag, LearningHeader);
