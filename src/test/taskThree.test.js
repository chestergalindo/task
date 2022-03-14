// const { extractValueForKey } = require( '../taskThree' );

// const someObject = {
//   uuid: 1,
//   innerOne: {
//     someKey: "some text"
//   },
//   innerTwo: {
//     uuid: 2,
//     innerTwo: {
//       someOtherKey: "some other text",
//       innerFour: {
//         uuid: 3
//       }
//     }
//   }
// }

// describe( 'extractValueForKey function', function ()
// {

//   it( 'where the parameters are one object and uuid word', () =>
//   {
//     const expectedSimple = {
//       '' => 1,
//       'innerTwo' => 2,
//       'innerTwo/innerThree/innerFour' => 3,
//     };
//     const result = extractValueForKey( {
//       uuid: 1,
//       innerOne: {
//         someKey: "some text"
//       },
//       innerTwo: {
//         uuid: 2,
//         innerThree: {
//           someOtherKey: "some other text",
//           innerFour: {
//             uuid: 3
//           }
//         }
//       }
//     }, 'uuid' )
//     expect( result ).toBe( expectedSimple );
//   } )

//   it( 'where the parameters are one object someObject and uuid word', () =>
//   {
//     const expectedSimple = [ 'someObject' => 1,
//       'someObject/innerTwo' => 2,
//         'someObject/innerTwo/innerTwo/innerFour' => 3,],
//     const result = extractValueForKey( someObject, 'uuid' );
//     expect( result ).toContain( expect.arrayContaining( expected ) );
//   } );

// } );


