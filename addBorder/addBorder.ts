function addBorder(picture: string[]): string[] {
	const sizeOfWall = picture[0].length + 2;
	let wall = '';
	for (let i = 0; i < sizeOfWall; i++) {
		wall = wall.concat('*');
	}
	picture.unshift(wall);
	picture.push(wall);

	for (let i = 1; i < picture.length - 1; i++) {
		picture[i] = '*'.concat(picture[i]) + '*';
	}
	return picture;
}

console.log(addBorder([ 'abc', 'ded' ]));
