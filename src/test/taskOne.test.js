const { sum } = require( '../taskOne' );

describe( 'sum function', function ()
{
  it( 'where the parameters is 0 and send function of message', () =>
  {
    const result = sum( result => console.log( '->', result ) );
    expect( result ).toBe( console.log( '->', 0 ) );
  } );

  it( 'where the parameters is 1 and send function of message', () =>
  {
    const result = sum( 1 )( result => console.log( '->', result ) );
    expect( result ).toBe( console.log( '->', 1 ) );
  } )

  it( 'where the parameters are 2 and send function of message', () =>
  {
    const result = sum( 1 )( 2 )( result => console.log( '->', result ) );
    expect( result ).toBe( console.log( '->', 3 ) );
  } )

  it( 'where the parameters are 3 and send function of message', () =>
  {
    const result = sum( 1 )( 2 )( 4 )( result => console.log( '->', result ) );
    expect( result ).toBe( console.log( '->', 7 ) );
  } )

} );


