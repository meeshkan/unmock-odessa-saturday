import api_call from '../src/andrii_p'
import * as unmock from "unmock-node";

beforeAll(async()=>{
    unmock.on();
});

test('test api', async()=>{

    const res = await api_call();
    expect(Object.keys(res)).toEqual(['assets']);
    }
);
