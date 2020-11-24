import { _method } from "../../../../../src/es/geekshubs/academy/kata1/boo";

describe('Geekhubs Testing', function (){
    
    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = "Boo 1";
        //Act
        var result = _method(1);
        //Assert
        expect(result).toBe(expected);
    });

});