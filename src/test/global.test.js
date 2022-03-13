const text = 'Hello World';

it( 'debe contener hello', () =>
{
  expect( text ).toContain( 'Hello' );
} )