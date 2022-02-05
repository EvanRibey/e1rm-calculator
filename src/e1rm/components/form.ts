import { ripple } from 'material-components-web';
import { Input } from './input';
import { Select } from './select';
import PercTable from '../json/rpe-ref.json';

export class Form {
  weight: Input;
  reps: Input;
  rpe: Select;
  result: HTMLParagraphElement;

  constructor() {
    const form = document.querySelector('form#calculator')
    const resultElem = document.querySelector<HTMLParagraphElement>('p#result');

    if (!form) throw new Error('No form to bind');
    form.addEventListener('submit', (event) => this.submit(event));

    if (!resultElem) throw new Error('No result paragraph to bind');
    this.result = resultElem;

    this.weight = new Input('weight');
    this.reps = new Input('reps');
    this.rpe = new Select('rpe');

    this.bindMdc();
  }

  bindMdc(): void {
    const button = document.querySelector('form button');
    if (button) {
      ripple.MDCRipple.attachTo(button);
    }
  }

  tucherer(weight: number, reps: number, rpe: number): number {
    let perc = (<any>PercTable)[''+reps][''+rpe];
    
    return weight / perc * 100;
  }

  brzycki(weight: number, reps: number): number {
    return weight * (36 / (37 - reps));
  }

  submit(event: Event): void {
    event.preventDefault();

    let e1rm = 0;

    if (this.rpe.value() > 0) {
      e1rm = this.tucherer(
        this.weight.value(),
        this.reps.value(),
        this.rpe.value()
      );
    } else {
      e1rm = this.brzycki(
        this.weight.value(),
        this.reps.value(),
      )
    }

    this.result.innerHTML = 'E1RM: '+Math.round(e1rm * 100) / 100;
  }
}
