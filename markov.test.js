const markov = require('./markov');

describe('markov tests', function() {

    test('make sure does not return identical to initial input', function() {
        let mm = new markov.MarkovMachine("my name is jed");
        expect(mm.makeText()).not.toEqual('my name is jed');
    })

    test('make sure it outputs at least one word from the initial input', function(){
        let mm = new markov.MarkovMachine("my name is jed");
        let out = mm.makeText();
        let arrOut = out.split(" ");
        try {
            expect(out).toContain('my');
        }
        catch {
            try {
                expect(out).toContain('name');
            }
            catch {
                try {
                    expect(out).toContain('is');
                }
                catch {
                    expect(out).toContain('jed');
                }
            }
        }
    })
})