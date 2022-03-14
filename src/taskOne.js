
function sum ( a )
{
  defaultValue = 0
  if ( typeof ( a ) === 'function' )
  {
    return a( defaultValue );
  }
  if ( typeof ( a ) === 'number' )
  {
    return ( b ) =>
    {
      if ( typeof ( b ) === 'function' )
      {
        return b( a );
      }
      if ( typeof ( b ) === 'number' )
      {
        return ( c ) =>
        {
          if ( typeof ( c ) === 'function' )
          {
            return c( a + b );
          }
          return ( callback ) =>
          {
            callback( a + b + c );
          }
        }
      }
    }
  }
}

module.exports = { sum };