import api_call from '../src/andrii_p'

test('test api', async()=>{
    const res = await api_call();
    expect(Object.keys(res)).toEqual(['assets']);
    }
);
