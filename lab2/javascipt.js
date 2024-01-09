//bai lab2.1
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-funcitons"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makelist(arr) {
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    return failureItems.join('');
}
const failureItems = makelist(result.failure);
console.log(`${failureItems}`);

// bai2.2
let bai2= () => {
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function removeFirstTwo(list) {
        const [a, b, ...arr] = list;
        return arr;
    }
    const result = removeFirstTwo(source);
    console.log(result);
    console.log(source);
}
bai2();

//bai lab2.3
const arr1 = ['so1', 'so2', 'so3', 'so4', 'so5', 'so6', ]
let arr2 = [...arr1];
console.log(arr2);

// bai lab2.4
let hamso1 = () => {
    let mang1 = ['to', 'code'];
    let mang2 = ['is', 'fun'];
    return ['learning', ...mang1, ...mang2];
}
console.log(hamso1());