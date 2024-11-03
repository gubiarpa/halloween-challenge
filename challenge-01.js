function createMagicPotion(potions, target) {
	let match = undefined
	for (let i = 0; i < potions.length - 1; i++) {
		for (let j = i + 1; j < potions.length; j++) {
			if (potions[i] + potions[j] === target) {
				if (match === undefined || j < match[1]) {
					match = [i, j]
				}
			}
		}
	}
	if (match !== undefined) return [match[0], match[1]]

	return undefined
}

console.log(createMagicPotion([4, 5, 6, 2], 8))
console.log(createMagicPotion([1, 2, 3, 4], 9))
console.log(createMagicPotion([1, 2, 3, 4], 5))
console.log(createMagicPotion([10, 5, 2, 3, 7, 5], 10))
