
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.rect(this.posxinit, this.posyinit, this.posxfin, this.posyfin);
    ctx.strokeStyle = this.couleur
    ctx.strokeWidth = this.epaisseur
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.posxinit, this.posyinit);
    ctx.lineTo(this.posxfin, this.posyfin);
    ctx.strokeStyle = this.couleur
    ctx.strokeWidth = this.epaisseur
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