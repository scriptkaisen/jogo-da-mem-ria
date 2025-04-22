class CardManager{
    flippedCards = now Set();
    urlFactory;

}

constructor(factory){
    this.urlFactory = factory;

}

getSelection( heroiNumber){
    let template = document.getElementById("cardTemplate");
    let clone = template.contentEditable.cloneNode(true);
    let img = clone.querySelector('img');
    img.setAttribute('src', this.urlFactory(heroiNumber));
    clone.children[0].addEventListener('clic', 
        event => this.onclick(event)
    );
    return clone;
}