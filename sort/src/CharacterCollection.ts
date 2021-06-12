export class CharacterCollection {
	constructor(public data: string) {}

	public get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLocaleLowerCase() >
			this.data[rightIndex].toLocaleLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number): void {
		const characters = this.data.split('');

		const leftHead = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = leftHead;

		this.data = characters.join('');
	}
}
