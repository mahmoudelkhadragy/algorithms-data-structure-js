// Merge Sort

// Time Complexity: O(n log n)
// Space Complexity: O(n)

function merge(array1, array2) {
	let combined = [];
	let i = 0,
		j = 0;
	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			combined.push(array1[i]);
			i++;
		} else {
			combined.push(array2[j]);
			j++;
		}
	}
	while (i < array1.length) {
		combined.push(array1[i]);
		i++;
	}
	while (j < array2.length) {
		combined.push(array2[j]);
		j++;
	}

	return combined;
}

function mergeSort(array) {
	if (array.length === 1) return array;

	let midIndex = Math.floor(array.length / 2);
	let left = mergeSort(array.slice(0, midIndex));
	let right = mergeSort(array.slice(midIndex));

	return merge(left, right);
}

let arr = [3, 1, 8, 80, 48, 2, 1, 5];
mergeSort(arr);
