
import { deserializeFromObject } from 'tynder/modules/serializer';
import { getType }               from 'tynder/modules/validator';
import { EditShowEvent,
         SubmitEvent }           from 'kdx/helpers/kintone-types';
import { validateThen }          from 'kdx/helpers';

import                                './index.scss';
import { TARGET_PROFILE,
         Apps }                  from '../../schema-types/Apps.meta';
import { App }                   from '../../schema-types/MyApp1';
import { RawApp }                from '../../schema-types/MyApp1.raw';
import AppSchema                 from '../../schema-compiled/MyApp1';



const schema = deserializeFromObject(AppSchema);
const tyApp = getType(schema, 'App');


kintone.events.on([
        'app.record.create.show',
        'mobile.app.record.create.show',
        'app.record.edit.show',
        'mobile.app.record.edit.show',
        'app.record.index.edit.show',
    ], (ev: EditShowEvent<RawApp>) => {

    // if (ev.record.SomeField) {
    //     ev.record.SomeField.disabled = true;
    // }
    return ev;
});


kintone.events.on([
        'app.record.create.submit',
        'mobile.app.record.create.submit',
        'app.record.edit.submit',
        'mobile.app.record.edit.submit',
        'app.record.index.edit.submit',
    ], (ev: SubmitEvent<unknown>) => {

    return validateThen<App>(ev, schema, tyApp, /* async */ (rec) => { // <- NOTE: You can specify 'async' if you have to await anything.
        // if (rec.tableA.length > 0) {
        //     rec.tableA[0].num1 = typeof rec.tableA[0].num1 === 'number' ? rec.tableA[0].num1 + 1 : void 0;
        // }

        console.log(`${TARGET_PROFILE}, ${Apps.MyApp1}`);
        // throw new Error('some error');

        return rec;
    }, (ev) => {
        ev.error = 'Error! Error! Error!';
    });
});
