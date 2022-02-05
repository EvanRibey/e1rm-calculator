import { textField } from 'material-components-web';

export class Input {
  elem: HTMLInputElement;

  constructor(id: string) {
    if (!id) throw new Error('No id provided');

    const elem = (<Element>document.getElementById(id));
    const input = (<HTMLInputElement>document.querySelector(`#${id} input`));
    if (!elem && !input) throw new Error('No elem to bind');
    new textField.MDCTextField(elem);

    this.elem = input;
  }

  value(): number {
    return parseInt(this.elem.value);
  }
}
