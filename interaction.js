
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.posxinit = 0;
    this.posyinit = 0;
    this.posxfin = 0;
    this.posyfin = 0;
	// Developper les 3 fonctions gérant les événements

    this.maFctGérantLaPression = function(evt){
        var coord = getMousePosition(canvas, evt);
        this.posxinit = coord.x;
        this.posyinit = coord.y;
        // console.log("Pression");
        // console.log(this.posxinit);
        // console.log(this.posyinit);
        pencil.onInteractionStart(this);
    }

    this.maFctGérantLeDéplacement = function(evt){
        var coord = getMousePosition(canvas, evt);
        this.posxfin = coord.x;
        this.posyfin = coord.y;
        // console.log("Move");
        // console.log(this.posxinit);
        // console.log(this.posyinit);
        pencil.onInteractionUpdate(this);
    }

    this.maFctGérantLeRelâchement = function(evt){
        var coord = getMousePosition(canvas, evt);
        this.posxfin = coord.x;
        this.posyfin = coord.y;
        // console.log("Relach");
        // console.log(this.posxinit);
        // console.log(this.posyinit);
        pencil.onInteractionEnd(this);
    }

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
  canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



