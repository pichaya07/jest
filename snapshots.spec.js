const user = {
    name:'Tony Tinkertons',
    age:25,
    job:'inventor'
}

test ('user match', () => {
    const userString = "{\"name\":\"Tony Tinkerton\",\"age\":25,\"job\":\"inventor\"}";
    expect(user).toMatchSnapshot()
})