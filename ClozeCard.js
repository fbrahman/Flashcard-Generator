const cCard = (function() {  
    const ClozeCard = function(text, cloze) {
        if (this instanceof ClozeCard) {
            this.fullText = text;
            this.cloze = cloze;
            this._setProps(this);
        } else {
        	return new ClozeCard(text, cloze);
        }
    };

    ClozeCard.prototype._setProps = function(instance) {
    	let text = instance.fullText;
    	let cloze = instance.cloze;

    	if (text.indexOf(cloze) === -1) {
    	    console.log('This doesn\'t work, oops')
    	} else {
    	    let partial = text.replace(cloze, '...');
    	    instance.partial = partial;
    	}
    };

    module.exports = {
        CreateCard: ClozeCard
    }
})()



