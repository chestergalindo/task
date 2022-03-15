/**
 * searh key in object and return direction path
  * @param {*} a (object,searchKey)
 * @returns {Map} => directions of searchKey
 */

function extractValueForKey ( object, searchKey )
{
  let resultMap = new Map

  function extractValue ( object, searchKey, level, node )
  {
    if ( object.hasOwnProperty( searchKey ) )
    {
      resultMap.set( node, object[ searchKey ] )
    }
    for ( let key in object )
    {
      const divline = node === "" ? '' : '/'
      const nodeName = node + divline + key
      if ( typeof object[ key ] === "object" )
      {
        extractValue( object[ key ], searchKey, level + 1, nodeName )
      }
    }
  }

  extractValue( object, searchKey, 0, '' )

  return resultMap
}

module.exports = { extractValueForKey }