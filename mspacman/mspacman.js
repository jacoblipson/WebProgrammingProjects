function draw() {
		c = document.getElementById("game");
		ctx = c.getContext("2d");
		sprite = document.getElementById("sprite");
		ctx.drawImage(sprite,322,2,464,136,0,0,464,136);
		ctx.drawImage(sprite,83,23,13,14,97,37,13,14);
		ctx.drawImage(sprite,82,123,15,14,327,93,15,14);
}
