const { extractValueForKey } = require( '../taskThree' );

const someObject = {
  uuid: 1,
  innerOne: {
    someKey: "some text"
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      someOtherKey: "some other text",
      innerFour: {
        uuid: 3
      }
    }
  }
}

const expectedSimple = new Map

expectedSimple.set( '', 1 )
expectedSimple.set( 'innerTwo', 2 )
expectedSimple.set( 'innerTwo/innerThree/innerFour', 3 )

const expectedSimpleNameObject = new Map

expectedSimpleNameObject.set( 'someObject', 1 )
expectedSimpleNameObject.set( 'someObject/innerTwo', 2 )
expectedSimpleNameObject.set( 'someObject/innerTwo/innerThree/innerFour', 3 )

describe( 'extractValueForKey function', function ()
{
  it( 'where the parameters are one object and uuid word', () =>
  {
    const result = extractValueForKey( {
      uuid: 1,
      innerOne: {
        someKey: "some text"
      },
      innerTwo: {
        uuid: 2,
        innerThree: {
          someOtherKey: "some other text",
          innerFour: {
            uuid: 3
          }
        }
      }
    }, 'uuid' )
    expectedSimple.forEach( ( value, key ) =>
    {
      expect( result.get( key ) ).toEqual( value )
    } )
  } )

  it( 'where the parameters are one object someObject and uuid word', () =>
  {
    const result = extractValueForKey( { someObject }, 'uuid' );
    expectedSimpleNameObject.forEach( ( value, key ) =>
    {
      expect( result.get( key ) ).toEqual( value )
    } )
  } );

} );


