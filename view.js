
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.rect(this.posx,this.posy,this.hauteur,this.largeur)
    ctx.strokeStyle = this.couleur
    ctx.lineWidth = this.epaisseur
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.posxA, this.posyA);
    ctx.lineTo(this.posxB, this.posyB);
    ctx.strokeStyle = this.couleur
    ctx.lineWidth = this.epaisseur
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    console.log(this.tabforme);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.tabforme.forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};