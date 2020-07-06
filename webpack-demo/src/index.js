import _ from "lodash"
import printParams from './print.js'
import './index.css'

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }

document.body.appendChild(component());

printParams('test', 12121, 123)