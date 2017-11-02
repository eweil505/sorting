describe('Bubble Sort', function() {
    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it('handles an array with one item', function() {
        expect(bubbleSort([12])).toEqual([12]);
    });

    it('handles an array with multiple items', function() {
        expect(bubbleSort([4, 2, 10, 1, 5])).toEqual([1, 2, 4, 5, 10]);
    });

    beforeAll(function() {
        spyOn(window, 'swap').and.callThrough();
    });

    it('swaps the correct number of times', function() {
        bubbleSort([4, 2, 10, 1, 5]);
        expect(window.swap.calls.count()).toEqual(5);
    });


});

