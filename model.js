
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Forme(epaisseur, couleur){
    this.epaisseur = epaisseur;
    this.couleur = couleur;
};

function Drawing(){
    this.tabforme = [];
    this.ajoutForme = function(forme){
        this.tabforme.push(forme);
    };
    this.suppforme = function(id){
        this.tabforme.splice(id,1);
    };
};

function Rectangle(largeur,hauteur,posx,posy,epaisseur,couleur ){
    Forme.call(this,epaisseur, couleur);
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.posx = posx;
    this.posy = posy;
};
Rectangle.prototype = new Forme();

function Line(posxA,posyA,posxB,posyB,epaisseur,couleur){
    Forme.call(this, epaisseur, couleur);
    this.posxA = posxA;
    this.posyA = posyA;
    this.posxB = posxB;
    this.posyB = posyB;
};
Line.prototype = new Forme();




