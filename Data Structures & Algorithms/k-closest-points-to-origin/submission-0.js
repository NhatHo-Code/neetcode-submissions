class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
const dist = [];
    for (let i = 0; i < points.length; i++) {
        dist[i] = points[i][0] * points[i][0] + points[i][1] * points[i][1];
    }

    for (let i = 1; i < points.length; i++) {
        const keyPoint = points[i];
        const keyDist = dist[i];
        let j = i - 1;

        while (j >= 0 && dist[j] > keyDist) {
            points[j + 1] = points[j];
            dist[j + 1] = dist[j];
            j--;
        }

        points[j + 1] = keyPoint;
        dist[j + 1] = keyDist;
    }

    return points.slice(0, k);
    }
}
