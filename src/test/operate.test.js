import operate from '../logic/operate';
import '@testing-library/jest-dom'


it('test',()=>{
    expect(operate(1,2,"+").toBeDefined());
})