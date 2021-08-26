 
import schema from './jsonFormSchema.json';
import uischema from './jsonFormUISchema.json';
//import { JsonForms } from '@jsonforms/react';
//import {
//    materialCells,
//    materialRenderers,
//  } from '@jsonforms/material-renderers';

import { useState } from 'react';

const initialData = {
    name: 'Max Power',
  };

function JsonForm() {

    const onSubmit = (formData) => {
        console.log("Data submitted: ", formData);
 
        var el = document.getElementById("formData");

        if (el) {
            el.value = JSON.stringify(formData, null, 2);

        }


    };


    var schemaText = JSON.stringify(schema, null, 2);

    var uischemaText = JSON.stringify(uischema, null, 2);

    const [data, setData] = useState(initialData);

    return (
        <div className="App container">
            <div className="col-md-12">
                <div className="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>JSONSchema</h2>
                        <textarea style={{ border: "0", readonly: "true", width: "100%", overflow: "auto", height: "400px" }} value={schemaText}  ></textarea>
                    </div>
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Data</h2>
                        <textarea id="formData" style={{ border: "0", readonly: "true", width: "100%", overflow: "auto", height: "100px" }}    ></textarea>
                    </div>
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>UI Schema</h2>
                        <textarea style={{ border: "0", readonly: "true", width: "100%", overflow: "auto", height: "400px" }} value={uischemaText}  ></textarea>
                    </div>

                </div>
                <div className="col-md-6">
                  
                </div>

            </div>
        </div>
    );

}

export default JsonForm;