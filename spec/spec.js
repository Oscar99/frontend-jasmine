describe("First jasmine project", function() {
  it("should say hello jasmine", function() {

    expect(helloWorld()).toBe("hello world");
  });
 
  it ("should write the title on the page",function(){
  	expect( textTitle).toBe("Testing Jasmine");
  	expect(textTitle).not.toBe(" ");

});
it ("sould include in the title Jasmine",function(){
	expect(textTitle).toMatch(/Jasmine/i);
	
	});
it("verificacion de suma",function(){
	expect(suma(2,2)).toBe(4);
	expect(suma(3,6)).toBe(9);
	expect(suma(-50,1000)).toBe(950);
	expect(suma(-50,"1000")).toBe(950);
	expect(suma (20,40)).toBeGreaterThan(30);
	expect(suma (40,40)).toBeLessThan(81);
	});

});
