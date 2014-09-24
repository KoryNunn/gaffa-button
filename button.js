var Gaffa = require('gaffa'),
    crel = require('crel');

function Button(){}
Button = Gaffa.createSpec(Button, Gaffa.ContainerView);
Button.prototype._type = 'button';

Button.prototype.render = function(){
    var textNode = document.createTextNode(''),
        renderedElement = crel('button', textNode);

    this.views.content.element = renderedElement;

    this.textNode = textNode;

    this.renderedElement = renderedElement;

};

Button.prototype.text = new Gaffa.Property(function(view, value){
    if(value !== null && value !== undefined){
        view.textNode.textContent = value;
    }else{
        view.textNode.textContent = '';
    }
});

Button.prototype.type = new Gaffa.Property(function(viewModel, value){
    viewModel.renderedElement.setAttribute("type", value || 'button');
});

module.exports = Button;