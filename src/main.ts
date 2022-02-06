import './style.css'
import { init } from './e1rm/app';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>E1RM Calculator</h1>
  <p style="text-align:left;">
    This is a quick calculator to calculate your estimated one rep max. If an RPE is provided, it will use <a href="https://articles.reactivetrainingsystems.com/2015/11/29/beginning-rts/" target="_blank">Mike Tucherer's</a> RPE chart to do the calculation. If one is not provided, <a href="https://en.wikipedia.org/wiki/One-repetition_maximum#Brzycki" target="_blank">Brzyckis'</a> formula is used instead.
  </p>
  <form id="calculator" style="display:flex; flex-direction:column;" class="rpe-form">
    <label class="mdc-text-field mdc-text-field--filled rpe-form__input" id="weight">
      <span class="mdc-text-field__ripple"></span>
      <span class="mdc-floating-label" id="weight-label">Weight</span>
      <input class="mdc-text-field__input" type="number" min="1" aria-labelledby="weight-label" required>
      <span class="mdc-line-ripple"></span>
    </label>
    <label class="mdc-text-field mdc-text-field--filled rpe-form__input" id="reps">
      <span class="mdc-text-field__ripple"></span>
      <span class="mdc-floating-label" id="reps-label">Reps</span>
      <input class="mdc-text-field__input" min="1" max="12" type="number" aria-labelledby="reps-label" required>
      <span class="mdc-line-ripple"></span>
    </label>
    <div class="mdc-select mdc-select--filled rpe-form__select" id="rpe">
      <div class="mdc-select__anchor"
           role="button"
           aria-haspopup="listbox"
           aria-expanded="false"
           aria-labelledby="rpe-label rpe-selected-text">
        <span class="mdc-select__ripple"></span>
        <span id="rpe-label" class="mdc-floating-label">RPE</span>
        <span class="mdc-select__selected-text-container">
          <span id="rpe-selected-text" class="mdc-select__selected-text"></span>
        </span>
        <span class="mdc-select__dropdown-icon">
          <svg
              class="mdc-select__dropdown-icon-graphic"
              viewBox="7 10 10 5" focusable="false">
            <polygon
                class="mdc-select__dropdown-icon-inactive"
                stroke="none"
                fill-rule="evenodd"
                points="7 10 12 15 17 10">
            </polygon>
            <polygon
                class="mdc-select__dropdown-icon-active"
                stroke="none"
                fill-rule="evenodd"
                points="7 15 12 10 17 15">
            </polygon>
          </svg>
        </span>
        <span class="mdc-line-ripple"></span>
      </div>

      <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
        <ul class="mdc-list" role="listbox" aria-label="RPE listing">
          <li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="" role="option">
            <span class="mdc-list-item__ripple"></span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="0" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">N/A</span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="6.5" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              6.5
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="7" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              7
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="7.5" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              7.5
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="8" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              8
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="8.5" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              8.5
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="9" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              9
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="9.5" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              9.5
            </span>
          </li>
          <li class="mdc-list-item" aria-selected="false" data-value="10" role="option">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              10
            </span>
          </li>
        </ul>
      </div>
    </div>
    <button class="mdc-button mdc-button--raised">
      <div class="mdc-button__ripple"></div>
      <span class="mdc-button__label">Calculate</span>
    </button>
  </form>
  <p id="result" class="form-result"></p>
`

init();
