
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (DnD) {
		ctx.clearRect(0,0,canvas.width, canvas.height);
		//drawing.paint(ctx);
		epaisseur = $('#spinnerWidth').val();
		couleur = $('#colour').val();
		if($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.posxinit-DnD.posxfin , DnD.posyinit - DnD.posyfin, DnD.posxinit, DnD.posyinit , epaisseur, couleur)
		}else{
			var line = new Line(DnD.posxinit, DnD.posyfin, 0, 0, epaisseur, couleur)
		}
	}

	this.onInteractionUpdate= function (DnD){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawing.paint(ctx);
		epaisseur = $('#spinnerWidth').val();
		couleur = $('#colour').val();
		if($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.posxinit-DnD.posxfin , DnD.posyinit - DnD.posyfin, DnD.posxinit, DnD.posyinit , epaisseur, couleur)
			rec.paint(ctx)
		}else{
			var line = new Line(DnD.posxinit, DnD.posyinit, DnD.posxfin, DnD.posyfin, epaisseur, couleur)
			line.paint(ctx)
		}
	}

	this.onInteractionEnd= function (DnD){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawing.paint(ctx);
		epaisseur = $('#spinnerWidth').val();
		couleur = $('#colour').val();
		if($('#butRect')[0].checked){
			var rec = new Rectangle(DnD.posxinit-DnD.posxfin , DnD.posyinit - DnD.posyfin, DnD.posxinit, DnD.posyinit , epaisseur, couleur)
			drawing.ajoutForme(rec)
			rec.paint(ctx)
		}else{
			var line = new Line(DnD.posxinit, DnD.posyinit, DnD.posxfin, DnD.posyfin, epaisseur, couleur)
			drawing.ajoutForme(line)
			line.paint(ctx)
		}
	}
};


