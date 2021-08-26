import Form from "@rjsf/core";
import schema from './jsonSchemaFormElement.json';

function JsonSchemaForm() {

    const onSubmit = ({ formData }, e) => {
        console.log("Data submitted: ", formData);

        var el = document.getElementById("formData");

        if (el) {
            el.value = JSON.stringify(formData, null, 2);

        }


    };

    const log = (type) => console.log.bind(console, type);



    var schemaText = JSON.stringify(schema, null, 2);
    debugger;
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
                        <textarea id="formData" style={{ border: "0", readonly: "true", width: "100%", overflow: "auto", height: "400px" }}    ></textarea>
                    </div>


                </div>
                <div className="col-md-6">
                    <Form schema={schema}
                        onChange={onSubmit}
                        onSubmit={onSubmit}
                        onError={log("errors")} liveValidate  />
                </div>

            </div>
        </div>
    );

}

export default JsonSchemaForm;