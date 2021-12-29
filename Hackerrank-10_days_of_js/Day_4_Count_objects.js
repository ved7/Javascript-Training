function getCount(objects) {
    let count = 0;
    objects.forEach((singleObject) => {
        if (singleObject.x == singleObject.y) {
            count++;
        }
    })
    return count;
}
