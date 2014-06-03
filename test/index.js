var Gaffa = require('gaffa'),
    Button = require('../'),
    Set = require('gaffa-set'),
    Form = require('gaffa-form'),
    gaffa = new Gaffa();

// Register used viewItems with gaffa
gaffa.registerConstructor(Button);
gaffa.registerConstructor(Set);

var setValue = new Set();
setValue.source.binding = '(? event.which "click" "submit")';
setValue.target.binding = '[value]';

var button1 = new Button();
button1.text.binding = '(join " " "The value was set via a" [value] "event")';
button1.actions.click = [setValue];

var button2 = new Button();
button2.text.value = 'Disabled button';
button2.enabled.value = false;

var button3 = new Button();
button3.text.value = 'Submit button';
button3.type.value = 'submit';

var form = new Form();
form.views.content.add([
    button1,
    button2,
    button3
]);
form.actions.submit = [setValue];

// An example model
gaffa.model.set({
    value:'---'
})

// Add the view on load.
window.onload = function(){
    gaffa.views.add([
        form
    ]);
};

// Globalise gaffa for easy debugging.
window.gaffa = gaffa;