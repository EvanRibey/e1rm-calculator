import { MDCSelect } from '@material/select';

export class Select {
  elem: MDCSelect;

  constructor(id: string) {
    if (!id) throw new Error('No id provided');

    const elem = (<HTMLSelectElement>document.getElementById(id));
    if (!elem) throw new Error('No elem to bind');

    this.elem = new MDCSelect(elem);
  }

  value(): number {
    return parseFloat(this.elem.value);
  }
}
