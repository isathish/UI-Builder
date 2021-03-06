import { dataComponentId, sortableClass, formGroup, rowClass, col_sm_9 } from '../common';
import { bootstrapmanualselectinputfieldid } from './ids';
import label from './label';
import extend from 'lodash/extend';
import bootstrapmanualselectinput from './bootstrapmanualselectinput';
import manualselectinputfield from './manualselectinputfield';

const bootstrapmanualselectinputfield = extend({}, manualselectinputfield, {
    name: "Manual Select Field",
    image: "icons/select_input.svg",
    html: `${label.html}${bootstrapmanualselectinput.html}`
});

export default bootstrapmanualselectinputfield;